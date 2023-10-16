import cron from 'node-cron';

// Función que devuelve un array (simulación)
async function callAPI(capitulo: number) {
    let api = "https://images-from-url.vercel.app/api/images";
    let body = {
      "url": "https://www.animeallstar20.com/2023/10/one-piece-manga-" + capitulo + "-espanol.html",
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

// Variable para almacenar el resultado actual
let currentResult: string[];

// Programar la tarea cron cada 1 minuto
cron.schedule('*/1 * * * *', async () => {
  let capitulo = 1093
  console.log('Ejecutando la tarea cron semanal...');
  currentResult = await callAPI(capitulo);
  capitulo++;
  console.log("Capitulo: " + capitulo);
});

// Función para obtener el resultado actual sin afectar el cron job
function getCurrentResult(): string[] {
  return currentResult;
}

export { getCurrentResult };
