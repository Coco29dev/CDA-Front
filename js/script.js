document.addEventListener('DOMContentLoaded', () => {
  const BlagueTextElement = document.getElementById('blague-text');
  const BlagueBouton = document.getElementById('blague-btn');

  const API_URL = 'https://api-carambar.onrender.com/api/v1/blagues/random'

  async function fetchBlagueRandom() {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error('Une erreur est survenue');
      }

      const data = await response.json();

      BlagueTextElement.textContent = data.content;

    } catch (error) {
      console.error('Erreur:', error);
      BlagueTextElement.textContent = 'Impossible de charger une blague';
    }
  }

  BlagueBouton.addEventListener('click', fetchBlagueRandom);

});
