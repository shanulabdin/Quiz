let currentQ = 38;
let score = 0;
let answered = false;

function loadQuestion() {
  const q = questions[currentQ];
  answered = false;

  document.getElementById('q-category').textContent = q.cat;
  document.getElementById('q-number').textContent = String(currentQ + 1).padStart(2, '0');
  document.getElementById('q-text').innerHTML = q.q;
  document.getElementById('explanation-box').style.display = 'none';
  document.getElementById('next-btn').style.display = 'none';

  const pct = ((currentQ) / questions.length) * 100;
  document.getElementById('progress-fill').style.width = pct + '%';
  document.getElementById('progress-label').textContent = `Question ${currentQ + 1} of ${questions.length}`;
  document.getElementById('total-count').textContent = questions.length;

  const grid = document.getElementById('options-grid');
  grid.innerHTML = '';
  const letters = ['A', 'B', 'C', 'D'];
  q.opts.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerHTML = `<span class="option-letter">${letters[i]}</span><span>${opt}</span>`;
    btn.onclick = () => selectAnswer(i, btn);
    grid.appendChild(btn);
  });
}

function selectAnswer(idx, btn) {
  if (answered) return;
  answered = true;

  const q = questions[currentQ];
  const btns = document.querySelectorAll('.option-btn');

  btns.forEach(b => b.disabled = true);

  if (idx === q.ans) {
    btn.classList.add('correct');
    score++;
  } else {
    btn.classList.add('wrong');
    btns[q.ans].classList.add('correct');
  }

  document.getElementById('score-display').textContent = `Score: ${score}`;

  const expBox = document.getElementById('explanation-box');
  expBox.innerHTML = '💡 ' + q.exp;
  expBox.style.display = 'block';

  const nextBtn = document.getElementById('next-btn');
  nextBtn.style.display = 'inline-block';
  if (currentQ === questions.length - 1) {
    nextBtn.textContent = 'See Results →';
  } else {
    nextBtn.textContent = 'Next Question →';
  }
}

function nextQuestion() {
  currentQ++;
  if (currentQ >= questions.length) {
    showResults();
  } else {
    loadQuestion();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function showResults() {
  document.getElementById('quiz-screen').style.display = 'none';
  const rs = document.getElementById('results-screen');
  rs.style.display = 'flex';

  const pct = Math.round((score / questions.length) * 100);
  document.getElementById('score-pct').textContent = pct + '%';
  document.getElementById('correct-count').textContent = score;
  document.getElementById('wrong-count').textContent = questions.length - score;

  // Animate ring
  const ring = document.getElementById('score-ring');
  ring.style.background = `conic-gradient(var(--accent) ${pct * 3.6}deg, var(--border) ${pct * 3.6}deg)`;

  let title, sub;
  if (pct >= 90) { title = "Outstanding! 🎉"; sub = ""; }
<<<<<<< HEAD
  else if (pct >= 75) { title = "Great Work! 👏"; sub = ""; }
=======
  else if (pct >= 75) { title = "Great Work! 👏"; sub = " "; }
>>>>>>> a118a2637668613172d2a420b1f14d259aa1669f
  else if (pct >= 60) { title = "Good Effort! 📚"; sub = ""; }
  else if (pct >= 40) { title = "Keep Studying! 💪"; sub = ""; }
  else { title = "Need More Review 📖"; sub = ""; }

  document.getElementById('results-title').textContent = title;
  document.getElementById('results-sub').textContent = sub;
}

function restartQuiz() {
  currentQ = 0;
  score = 0;
  document.getElementById('results-screen').style.display = 'none';
  document.getElementById('score-display').textContent = 'Score: 0';
  document.getElementById('quiz-screen').style.display = 'block';
  loadQuestion();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Load the first question on page load
loadQuestion();
