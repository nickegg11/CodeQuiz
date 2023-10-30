// Questions that will be asked
const Questions = [{
    q: "What does API stand for?",
    a: [{ text: "Awarding Profitable Insurance", isCorrect: false },
    { text: "Artificial People Intelligence", isCorrect: false },
    { text: "Application Programming Interface", isCorrect: true },
    { text: "Awesome Planetary Interests", isCorrect: false }
    ]
 
},
{
    q: "What is the purpose of JavaScript?",
    a: [{ text: "To show that coffee and books are a great combo", isCorrect: false, isSelected: false },
    { text: "To create a static page", isCorrect: false },
    { text: "To add text to a web page", isCorrect: false },
    { text: "To create interactive and dynamic web pages", isCorrect: true }
    ]
 
},
{
    q: "Where is the script element stored?",
    a: [{ text: "In the README", isCorrect: false },
    { text: "In the body of the HTML", isCorrect: true },
    { text: "In the Cloud", isCorrect: false },
    { text: "In the CSS", isCorrect: false }
    ]
 
},
{
    q: "How is a function called?",
    a: [{ text: "function*", isCorrect: false },
    { text:"function()", isCorrect: true },
    { text: "function<>", isCorrect: false },
    { text: "function[]", isCorrect: false }
    ]
}
 
]
 
let currQuestion = 0
let score = 0
 
function loadQues() {
    const question = document.getElementById("question")
    const opt = document.getElementById("answer")
 
    question.textContent = Questions[currQuestion].q;
    opt.innerHTML = ""
 
    for (let i = 0; i < Questions[currQuestion].a.length; i++) {
        const choicesdiv = document.createElement("div");
        const choice = document.createElement("input");
        const choiceLabel = document.createElement("label");
 
        choice.type = "radio";
        choice.name = "answer";
        choice.value = i;
 
        choiceLabel.textContent = Questions[currQuestion].a[i].text;
 
        choicesdiv.appendChild(choice);
        choicesdiv.appendChild(choiceLabel);
        opt.appendChild(choicesdiv);
    }
}
 
loadQues();
 
function loadScore() {
    const totalScore = document.getElementById("score")
    totalScore.textContent = `You scored ${score} out of ${Questions.length}`
}
 
 
function nextQuestion() {
    if (currQuestion < Questions.length - 1) {
        currQuestion++;
        loadQues();
    } else {
        document.getElementById("answer").remove()
        document.getElementById("question").remove()
        document.getElementById("btn").remove()
        loadScore();
    }
}
 
function checkAns() {
    const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);
 
    if (Questions[currQuestion].a[selectedAns].isCorrect) {
        score++;
        console.log("Correct")
        nextQuestion();
    } else {
        nextQuestion();
    }
}