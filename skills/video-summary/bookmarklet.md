# Bookmarklets: Capturar Aula da DIO

Aqui estão as versões do bookmarklet para uso no navegador.

---

## Versão Estável (Abre o YouTube e Copia o Prompt sem Redirecionamento Indesejado)

```javascript
javascript:(function(){try{const iframes=Array.from(document.querySelectorAll('iframe'));const ytIframe=iframes.find(f=>f.src&&(f.src.includes('youtube.com')||f.src.includes('youtu.be')||f.src.includes('youtube-nocookie.com')));const titleEl=document.querySelector('h1, h2, [class*="title"], [data-testid*="title"]');const lessonTitle=titleEl?titleEl.innerText.trim():document.title;if(ytIframe){let videoId='';const match=ytIframe.src.match(/(?:embed\/|v=|vi=|\/v\/|youtu\.be\/)([a-zA-Z0-9_-]{11})/);if(match)videoId=match[1];const ytUrl=videoId?('https://www.youtube.com/watch?v='+videoId):ytIframe.src;const promptText='Processe a transcrição abaixo e atualize o resumo da disciplina.\nExtraia apenas o conteúdo inédito/ensinado nesta aula, destacando:\n\nTópicos centrais e definições essenciais.\nDicas, alertas ou destaques feitos pelo professor.\nTermos ou fórmulas fundamentais.\nMantenha a formatação limpa (bullets e negritos) e conecte com o histórico do resumo.\nIgnorar vícios de linguagem, conversas paralelas ou momentos de pausa da transcrição; foque estritamente no conteúdo acadêmico/técnico repassado.\n\nAula: "'+lessonTitle+'"\nLink do vídeo: '+ytUrl+'\n\n[TRANSCRIÇÃO]\n';navigator.clipboard.writeText(promptText);window.open(ytUrl,'_blank','noopener,noreferrer');}else{alert('Nenhum vídeo do YouTube incorporado foi encontrado nesta página.');}}catch(e){console.error(e);}void(0);})();
```

---

## Opção 2: Tenta Extrair a Transcrição Direto via Fetch + Abre o YouTube

Tenta obter o XML da legenda do YouTube via requisição em segundo plano. Se o navegador permitir a requisição cross-origin da aba atual, ele copia o prompt **já preenchido com a transcrição inteira**. Caso contrário, copia o prompt e abre a aba do YouTube.

### Código para o Favorito:

```javascript
javascript:(async function(){const f=Array.from(document.querySelectorAll('iframe')).find(e=>e.src&&(e.src.includes('youtube.com')||e.src.includes('youtu.be')||e.src.includes('youtube-nocookie.com'))),t=document.querySelector('h1, h2, [class*="title"], [data-testid*="title"]')?.innerText?.trim()||document.title;if(!f){alert('Nenhum vídeo encontrado nesta página.');return;}let id='',m=f.src.match(/(?:embed\/|v=|vi=|\/v\/|youtu\.be\/)([a-zA-Z0-9_-]{11})/);m&&(id=m[1]);const u=id?`https://www.youtube.com/watch?v=${id}`:f.src;let trans='';try{const res=await fetch(u);const html=await res.text();const cm=html.match(/"captionTracks":\s*(\[.*?\])/);if(cm&&cm[1]){const tracks=JSON.parse(cm[1]);let tr=tracks.find(x=>x.languageCode==='pt'||(x.vssId&&x.vssId.includes('.pt')))||tracks[0];if(tr&&tr.baseUrl){const trRes=await fetch(tr.baseUrl);const xml=await trRes.text();const parser=new DOMParser();const doc=parser.parseFromString(xml,'text/xml');trans=Array.from(doc.querySelectorAll('text')).map(n=>n.textContent).join(' ').replace(/\s+/g,' ');}}}catch(e){}const basePrompt=`Processe a transcrição abaixo e atualize o resumo da disciplina.\nExtraia apenas o conteúdo inédito/ensinado nesta aula, destacando:\n\nTópicos centrais e definições essenciais.\nDicas, alertas ou destaques feitos pelo professor.\nTermos ou fórmulas fundamentais.\nMantenha a formatação limpa (bullets e negritos) e conecte com o histórico do resumo.\nIgnorar vícios de linguagem, conversas paralelas ou momentos de pausa da transcrição; foque estritamente no conteúdo acadêmico/técnico repassado.\n\nAula: "${t}"\nLink do vídeo: ${u}\n\n[TRANSCRIÇÃO]\n${trans}`;await navigator.clipboard.writeText(basePrompt);window.open(u,'_blank');})();
```
