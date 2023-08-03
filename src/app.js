import API_URL from './api.js';

const scoreListElement = document.getElementById('scores');

const addScoreToList = async (score) => {
  await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(score),
  });
};

const displayScores = (scores) => {
  scoreListElement.innerHTML = '';
  scores.forEach((score) => {
    const listItem = `<li class="list">${score.user}: ${score.score}</li>`;
    scoreListElement.insertAdjacentHTML('beforeend', listItem);
  });
};

export { addScoreToList, displayScores };
