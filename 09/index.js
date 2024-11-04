const questions =[
    {
        question:"Which is the largest animal in the world?",
        answer:[
            {text:"Shark",correct:false},
            {text:"Blue Whale",correct:true},
            {text:"Elephant",correct:false},
            {text:"Giraffe",correct:false},
        ]
    },
    {
        question:"Which is the smallest country in the world?",
        answer:[
            {text:"Vatican City",correct:true},
            {text:"Bhutan",correct:true},
            {text:"Nepal",correct:false},
            {text:"Sri Lanka",correct:false},
        ]
    },
    {
        question:"Which is the smallest continent in the world?",
        answer:[
            {text:"Asia",correct:false},
            {text:"Australia",correct:true},
            {text:"Arctic",correct:false},
            {text:"Africa",correct:false},
        ]
    },
    {
        question:"Which is the largest desert in the world?",
        answer:[
            {text:"Kalahari",correct:false},
            {text:"Gobi",correct:true},
            {text:"Sahara",correct:false},
            {text:"Antarctica",correct:true},
        ]
    }
];
const quesEl=document.getElementById("ques")
const ansBtn=document.getElementById("ansbtn")
const nextBtn=document.getElementById("next-btn")

let currentQuesIndex=0;
let score=0;

function startQuiz(){
    currentQuesIndex=0
    score=0;
    nextBtn.innerHTML="Next"
    showQues()
}

function showQues(){
    let currentQues=questions[currentQuesIndex]
    let quesNum= currentQuesIndex+1
    quesEl.innerHTML=quesNum+ ". " +currentQues.question

    currentQues.answer.forEach(answer=>{
       const button=document.createElement("btn")
       button.innerHTML=answer.text
       button.classList.add("btn")
       ansBtn.appendChild(button)
       

    });
}
startQuiz()