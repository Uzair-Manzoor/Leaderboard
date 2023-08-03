import './index.css';
import { displayScores, addScoreToList } from './app.js';
import API_URL from './api.js';

const formElement = document.getElementById('form');
const nameInput = document.getElementById('user');
const scoreInput = document.getElementById('score');
const refreshButton = document.getElementById('refresh-button');

const addScore = async (event) => {
  event.preventDefault();
  if (!nameInput.value || !scoreInput.value) return;
  await addScoreToList({ user: nameInput.value, score: scoreInput.value });
  nameInput.value = '';
  scoreInput.value = '';
};

const fetchAndDisplayScores = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  displayScores(data.result);
};

formElement.addEventListener('submit', addScore);
refreshButton.addEventListener('click', fetchAndDisplayScores);
