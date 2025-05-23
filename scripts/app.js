import { hydrate } from './uiRenderer.js';

const dataPromise = fetch('../phps/generator.php')
    .then(r => r.ok ? r.json() : Promise.reject(r.statusText))
    .catch(err => {
        console.error('Errore fetch CV:', err);
        return null;
    });
document.addEventListener('DOMContentLoaded', async () => {
    const data = await dataPromise;
    if (data) hydrate(data);
});