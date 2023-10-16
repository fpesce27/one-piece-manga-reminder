import cron from 'node-cron';
import { getChapterNumber, postChapter, getChapterImages } from './dbFunctions';

let weeklyCronJob:any = null;

// cada miercoles de la semana
let tiempoPrimerTarea = '0 0 12 * * 3';

// cada 1 hora
let tiempoSegundaTarea = '0 0 * * * *';

export async function callAPI(capitulo: number): Promise<string[]> {
  let api = "https://images-from-url.vercel.app/api/images";
  let body = {
    "url": "https://www.animeallstar20.com/2023/10/one-piece-manga-" + (capitulo + 1) + "-espanol.html",
    "filters": ".separator",
  };
  let options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  };
  let response = await fetch(api, options);
  let data = await response.json();

  return data;
}


cron.schedule(tiempoPrimerTarea, async () => {
  console.log('Running cron job');
  let capitulo = await getChapterNumber();
  let response = await callAPI(capitulo);
  if (response.length !== 0) {
    await postChapter(response, capitulo + 1);
    console.log('Se ha encontrado un capítulo nuevo, se ha actualizado la base de datos en el primer cron');
  } else {
    console.log('No hay capítulo nuevo, se ejecutará la actualizacion constante');
    weeklyCronJob = cron.schedule(tiempoSegundaTarea, async () => {
      console.log('Running cron job 2');
      let capitulo = await getChapterNumber();
      let data = await callAPI(capitulo);
      if (data.length !== 0) {
        await postChapter(data, capitulo);
        console.log('Se ha encontrado un capítulo nuevo, se ha actualizado la base de datos');
        // Destruir la tarea semanal  
        weeklyCronJob.destroy();
      }
    });
  }
});

async function getCurrentResult() {
  console.log('Getting current result');
  return await getChapterImages();
}

export { getCurrentResult };
