/* ==========================================================================
   FRS GENERAL KNOWLEDGE QUIZ — QUESTION BANK
   Digital Values | 10 Questions | Topic 2: Personal Hygiene
   Layout: 2 Identification · 2 Application · 3 Comprehension · 3 Analysis
   ========================================================================== */

const QUIZ_QUESTIONS = [
  /* ---------- IDENTIFICATION (2) ---------- */
  {
    id: 1,
    grade: 'Digital Values',
    subject: 'Identification',
    question: 'Who is the main character in the story?',
    choices: { a: 'Cloudy', b: 'Ash', c: 'Coco', d: 'Sunny' },
    correct: 'b'
  },
  {
    id: 2,
    grade: 'Digital Values',
    subject: 'Identification',
    question: 'What did Cloudy give Ash?',
    choices: { a: 'A new nest', b: 'A map', c: 'A smart hygiene helper', d: 'A bag of food' },
    correct: 'c'
  },

  /* ---------- APPLICATION (2) ---------- */
  {
    id: 3,
    grade: 'Digital Values',
    subject: 'Application',
    question: 'You wake up late and only have a few minutes before school. Which habit shows you are taking care of your personal hygiene?',
    choices: {
      a: 'Skip washing your face and brushing your teeth to save time.',
      b: 'Quickly brush your teeth, wash your face, and change into clean clothes.',
      c: 'Wear yesterday\'s dirty shirt because it is faster.',
      d: 'Ask a friend to bring your toothbrush to school.'
    },
    correct: 'b'
  },
  {
    id: 4,
    grade: 'Digital Values',
    subject: 'Application',
    question: 'Your smart watch reminds you to drink water and rest. You are in the middle of a game. Based on Ash\'s experience, what is the best thing to do?',
    choices: {
      a: 'Ignore the reminder until the game is over.',
      b: 'Turn off the reminder so it stops bothering you.',
      c: 'Pause the game, follow the reminder, and take care of yourself.',
      d: 'Ask a friend to follow the reminder for you.'
    },
    correct: 'c'
  },

  /* ---------- COMPREHENSION (3) ---------- */
  {
    id: 5,
    grade: 'Digital Values',
    subject: 'Comprehension',
    question: 'What happened to Ash\'s feathers after exploring?',
    choices: { a: 'they became colorful.', b: 'they became wet.', c: 'they became dusty.', d: 'they disappeared.' },
    correct: 'c'
  },
  {
    id: 6,
    grade: 'Digital Values',
    subject: 'Comprehension',
    question: 'Why did Ash decide to check her smart hygiene helper?',
    choices: {
      a: 'Her feathers felt dirty and uncomfortable.',
      b: 'She wanted to play a game.',
      c: 'She wanted to find food.',
      d: 'She wanted to call Cloudy.'
    },
    correct: 'a'
  },
  {
    id: 7,
    grade: 'Digital Values',
    subject: 'Comprehension',
    question: 'Where did Ash clean her feathers, and how did she feel afterward?',
    choices: {
      a: 'In her nest — sleepy',
      b: 'Under a tree — angry',
      c: 'At the clean stream — fresh and happy',
      d: 'On a mountain — scared'
    },
    correct: 'c'
  },

  /* ---------- ANALYSIS (3) ---------- */
  {
    id: 8,
    grade: 'Digital Values',
    subject: 'Analysis',
    question: 'What hygiene reminder did Ash\'s helper show?',
    choices: {
      a: '"Play all day."',
      b: '"Stay clean. Wash regularly. Take care of yourself."',
      c: '"Never go outside."',
      d: '"Fly higher every day."'
    },
    correct: 'b'
  },
  {
    id: 9,
    grade: 'Digital Values',
    subject: 'Analysis',
    question: 'Why is it significant that Ash ignored the reminder the first time?',
    choices: {
      a: 'It shows that reminders alone do not build good habits — we must act on them.',
      b: 'It shows that the helper was broken.',
      c: 'It shows that Ash never learned her lesson.',
      d: 'It shows that reminders are useless.'
    },
    correct: 'a'
  },
  {
    id: 10,
    grade: 'Digital Values',
    subject: 'Analysis',
    question: 'What is the main lesson of the story?',
    choices: {
      a: 'Technology can do everything for us.',
      b: 'We should never explore the forest.',
      c: 'Technology can remind us, but taking care of our hygiene is our own responsibility.',
      d: 'We only need to clean ourselves when technology tells us to.'
    },
    correct: 'c'
  }
];

/* Utility: get questions filtered by grade range (inclusive) */
function getQuestionsForGrades(minGrade, maxGrade) {
  return QUIZ_QUESTIONS.filter(
    q => q.grade >= minGrade && q.grade <= maxGrade
  );
}

/* Utility: find a question by id */
function getQuestionById(id) {
  return QUIZ_QUESTIONS.find(q => q.id === id) || null;
}

/* Utility: check if an answer is correct */
function isAnswerCorrect(questionId, answerKey) {
  const q = getQuestionById(questionId);
  if (!q || !answerKey) return false;
  return q.correct === answerKey.toLowerCase();
}

/* Export for use in other scripts (global scope) */
window.QUIZ_QUESTIONS = QUIZ_QUESTIONS;
window.getQuestionsForGrades = getQuestionsForGrades;
window.getQuestionById = getQuestionById;
window.isAnswerCorrect = isAnswerCorrect;
