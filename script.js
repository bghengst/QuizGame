var questions = [
    {
        title: "What does DOM stand for?:",
        choices: ["Dirivative Objection Model", "Document Object Model", "Date Of Manufacture", "Depth of Market"],
        answer: "Document Object Model"

    },

    {
        title: "Which one of these git commands creates a note?:",
        choices: ["git clone", "git add", "git push", "git commit"],
        answer: "git commit"
    },

    {
        title: "Which one of these is NOT used as a container in html?:",
        choices: ["<p>", "<div>", "<br>", "<html>"],
        answer: "<br>"

    },

    {
        title: "What is the purpose of 'console.log'?:",
        choices: ["to display data in a browsers console", "to save your code", "to log your code into a repo", "to add functionality to code"],
        answer: "to display data in a browsers console"

    },

    {
        title: "If an array has 4 items in it, what is the index position of the first item?:",
        choices: ["0", "1", "3", "4"],
        answer: "0"
    },
]

    var timeEl = document.querySelector("#time")
    var startBtn = document.querySelector("#startbtn")
    var submitBtn = document.querySelector("#submit-button")
    var homepageScreen = document.querySelector("#homepage")
    var quizScreen = document.querySelector("#quiz")
    var finishScreen = document.querySelector("#finish")
    var nameEl = document.querySelector("#name")

    function startQuiz(){
        homepageScreen.setAttribute("class", "hide");
        quizScreen.setAttribute("class", "show");

        timerID = setInterval(tick, 1000);
        timeEl.textContent = time;
    }

