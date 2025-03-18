const quizData = [
    {
        question: "JavaScript nima?",
        a: "Dasturlash tili",
        b: "Avtomobil markasi",
        c: "O'yin",
        d: "Musiqa turi",
        correct: "a"
    },
    {
        question: "CSS nima uchun ishlatiladi?",
        a: "Ma'lumotlarni saqlash",
        b: "Veb-sahifa dizayni",
        c: "Dasturlar yozish",
        d: "Kino montaji",
        correct: "b"
    },
    {
        question: "HTML qanday ishlaydi?",
        a: "Fayllarni saqlash",
        b: "Brauzerda veb-sahifa yaratish",
        c: "Mobil ilova yaratish",
        d: "Rasmlar tahrirlash",
        correct: "b"
    },
    {
        question: "JavaScript dasturlash tilimi?",
        a: "Ha",
        b: "Yo'q",
        c: "Balki",
        d: "Ishonchim komil emas",
        correct: "a"
    }
];

const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const answerEls = document.querySelectorAll(".answer");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

// 🚀 Dastlabki savolni yuklash
loadQuiz();

function loadQuiz() {
    deselectAnswers(); // ✅ Avvalgi javobni olib tashlash

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

// ❌ Avvalgi javobni olib tashlash
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

// ✅ Foydalanuvchi tanlagan javobni olish
function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

// ✅ "Keyingi savol" tugmasi bosilganda
submitBtn.addEventListener("click", () => {
    const answer = getSelected();
    
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz(); // ✅ Keyingi savolni yuklash
        } else {
            // ✅ Test natijasini chiqarish
            quiz.innerHTML = `
                <h2>Siz ${quizData.length} savoldan ${score} tasiga to'g'ri javob berdingiz!</h2>
                <button onclick="location.reload()">Testni qayta boshlash</button>
            `;
        }
    } else {
        alert("Iltimos, javobni tanlang!");
    }
});
