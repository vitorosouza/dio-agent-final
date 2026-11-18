document.addEventListener('DOMContentLoaded', () => {
  const statusText = document.getElementById('status-text');
  const previewBox = document.getElementById('preview-box');
  const captureBtn = document.getElementById('capture-btn');
  const btnText = document.getElementById('btn-text');

  function setStatus(msg, isError = false) {
    statusText.innerText = msg;
    statusText.style.color = isError ? '#f75a68' : '#e1e1e6';
  }

  function setLoading(isLoading) {
    captureBtn.disabled = isLoading;
    if (isLoading) {
      btnText.innerHTML = '<span class="spinner"></span> Capturando...';
    } else {
      btnText.innerText = 'Capturar e Copiar Transcrição';
    }
  }

  // Descodifica entidades HTML (&amp;, &#39;, &quot;, etc.)
  function decodeHtmlEntities(str) {
    const txt = document.createElement('textarea');
    txt.innerHTML = str;
    return txt.value;
  }

  // Função injetada na aba ativa para buscar informações do vídeo
  function inspectPage() {
    let videoId = null;
    let lessonTitle = null;

    // 1. Se estiver diretamente no YouTube
    if (window.location.hostname.includes('youtube.com')) {
      const urlParams = new URLSearchParams(window.location.search);
      videoId = urlParams.get('v');
      lessonTitle = document.querySelector('h1.ytd-video-primary-info-renderer, h1.ytd-watch-metadata')?.innerText?.trim() || document.title;
    } else {
      // 2. Se estiver na DIO (web.dio.me)
      const titleEl = document.querySelector('h1, h2, [class*="title"], [data-testid*="title"]');
      lessonTitle = titleEl ? titleEl.innerText.trim() : document.title;

      const iframes = Array.from(document.querySelectorAll('iframe'));
      for (const iframe of iframes) {
        const src = iframe.src || '';
        const match = src.match(/(?:embed\/|v=|vi=|\/v\/|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
        if (match && match[1]) {
          videoId = match[1];
          break;
        }
      }
    }

    return { videoId, lessonTitle };
  }

  async function fetchTranscript(videoId) {
    const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
    const response = await fetch(videoUrl, {
      headers: {
        'Accept-Language': 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7'
      }
    });

    if (!response.ok) {
      throw new Error(`Falha ao carregar dados do YouTube (HTTP ${response.status})`);
    }

    const html = await response.text();

    // Extrai captionTracks do playerResponse
    const match = html.match(/"captionTracks":\s*(\[.*?\])/);
    if (!match || !match[1]) {
      return null; // Vídeo sem legendas/transcrição disponíveis
    }

    let captionTracks;
    try {
      captionTracks = JSON.parse(match[1]);
    } catch (e) {
      return null;
    }

    if (!captionTracks || captionTracks.length === 0) {
      return null;
    }

    // Prioriza legenda em português (pt ou pt-BR)
    let selectedTrack = captionTracks.find(t => t.languageCode === 'pt' || (t.vssId && t.vssId.includes('.pt')));
    if (!selectedTrack) {
      selectedTrack = captionTracks[0];
    }

    const transcriptUrl = selectedTrack.baseUrl;
    const transcriptResponse = await fetch(transcriptUrl);
    if (!transcriptResponse.ok) {
      throw new Error('Falha ao baixar arquivo de legendas do YouTube');
    }

    const xmlText = await transcriptResponse.text();
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlText, 'text/xml');
    const textNodes = Array.from(xmlDoc.querySelectorAll('text'));

    const fullTranscript = textNodes
      .map(node => decodeHtmlEntities(node.textContent))
      .filter(t => t && t.trim().length > 0)
      .join(' ')
      .replace(/\s+/g, ' ');

    return fullTranscript;
  }

  captureBtn.addEventListener('click', async () => {
    setLoading(true);
    setStatus('Localizando vídeo na página...');

    try {
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
      if (!tab || !tab.id) {
        throw new Error('Não foi possível identificar a aba ativa.');
      }

      // Executa inspeção na aba ativa
      const results = await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: inspectPage
      });

      const { videoId, lessonTitle } = results[0]?.result || {};

      if (!videoId) {
        throw new Error('Nenhum vídeo do YouTube incorporado foi encontrado nesta página. Certifique-se de que a aula foi aberta e iniciada.');
      }

      setStatus(`Vídeo encontrado! Baixando transcrição da aula...`);

      const transcript = await fetchTranscript(videoId);
      const ytUrl = `https://www.youtube.com/watch?v=${videoId}`;
      const title = lessonTitle || 'Aula DIO';

      let promptText = '';

      if (transcript && transcript.length > 50) {
        promptText = `Processe a transcrição abaixo e atualize o resumo da disciplina.\nExtraia apenas o conteúdo inédito/ensinado nesta aula, destacando:\n\nTópicos centrais e definições essenciais.\nDicas, alertas ou destaques feitos pelo professor.\nTermos ou fórmulas fundamentais.\nMantenha a formatação limpa (bullets e negritos) e conecte com o histórico do resumo.\nIgnorar vícios de linguagem, conversas paralelas ou momentos de pausa da transcrição; foque estritamente no conteúdo acadêmico/técnico repassado.\n\nAula: "${title}"\nLink do vídeo: ${ytUrl}\n\n[TRANSCRIÇÃO]\n${transcript}`;
        
        previewBox.style.display = 'block';
        previewBox.innerText = `Transcrição obtida (${transcript.length} caracteres):\n"${transcript.substring(0, 160)}..."`;
        setStatus('✅ Transcrição completa copiada com sucesso!');
      } else {
        promptText = `DIO Agent, aqui está a aula "${title}" da DIO:\nLink do vídeo: ${ytUrl}\n\n(Aviso: este vídeo não possui transcrição/legendas abertas no YouTube. Por favor, forneça um resumo sobre o conteúdo e objetivo deste tema na trilha).`;
        setStatus('⚠️ Vídeo sem legendas automáticas. Link da aula copiado!');
      }

      // Copia para o clipboard
      await navigator.clipboard.writeText(promptText);

      btnText.innerText = 'Copiado para o Clipboard!';
      setTimeout(() => {
        btnText.innerText = 'Capturar e Copiar Novamente';
        captureBtn.disabled = false;
      }, 3000);

    } catch (err) {
      console.error(err);
      setStatus(err.message, true);
      setLoading(false);
    }
  });
});
