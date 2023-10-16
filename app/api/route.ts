import { getCurrentResult } from './cron-job'; // Asegúrate de proporcionar la ruta correcta al archivo de cron-job.ts

export async function GET(request: Request) {
  // Obtén el valor actual de currentResult
  const result = getCurrentResult();
  console.log(result);
  return new Response(JSON.stringify(result), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
