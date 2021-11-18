const quizdata = [
    {
        question: 'what is my name?',
        a: 'Rameshchandra',
        b: 'Umeshchandra',
        c: 'Srinivas',
        d: 'Dont know',
        correct: 'a'
    }, {
        question: 'what is my age?',
        a: '12',
        b: '14',
        c: '18',
        d: '22',
        correct: 'c'
    }, {
        question: 'What is my lucky number',
        a: '8',
        b: '5',
        c: '2',
        d: '4',
        correct: 'c'
    }
]

const quiz = document.getElementById('quiz');
const questionele = document.getElementById('question');
const answerele = document.querySelectorAll('.answer');
const a_text = document.getElementById('a-text');
const b_text = document.getElementById('b-text');
const c_text = document.getElementById('c-text');
const d_text = document.getElementById('d-text');
const submit = document.getElementById('submit');

let currentquiz = 0;
let score = 0;
loadquiz();

function loadquiz() {
    dselectanswers();
    const currentquizdata = quizdata[currentquiz];

    questionele.innerText = currentquizdata.question;
    a_text.innerText = currentquizdata.a;
    b_text.innerText = currentquizdata.b;
    c_text.innerText = currentquizdata.c;
    d_text.innerText = currentquizdata.d;

}

function dselectanswers() {
    answerele.forEach((answerel) => {
        answerel.checked = false;
    });
}

function getselected() {
    let answer = undefined;
    answerele.forEach((answerel )=> {
        if (answerel.checked) {
            answer = answerel.id;
        }
    })
    return answer;
}
submit.addEventListener('click', () => {
    const answer = getselected();
    if (answer) {
        if (answer === quizdata[currentquiz].correct) {
            score++;
        }
        currentquiz++;
        if(currentquiz<quizdata.length){
            loadquiz();
        }else{
            console.log(score);
            quiz.innerHTML = `
            <h2>You answered correctly at ${score}/${quizdata.length} questions.</h2>
            
            <button onclick="location.reload()">Reload</button>
        `;
        }
    }

})