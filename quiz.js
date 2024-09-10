const questions=[
    {
        question:"what is the maximum length of a python identifier?",
        answers:[
            { text:"16",correct:false },
            {text:"no fixed length",correct:true},
            { text:"32",correct:false},
            { text:"128",correct:false},
        ]
        },
        {
            question:"how is a code block indicated in python:",
        answers:[
            {  text:"brackets",correct:false },
            {text:"none",correct:false},
            { text:"key",correct:false},
            { text:"indentations",correct:true},

           ]
        
        },
        {
            question:"which is the loop is not supported in python:",
        answers:[
            {  text:"for",correct:false },
            {text:"while",correct:false},
            { text:"do_while",correct:true},
            { text:"none",correct:false},

           ]
        },
        {
            question:"what keyword is used in python to raise exceptions?:",
        answers:[
            {  text:"try",correct:false },
            {text:"goto",correct:false},
            { text:"except",correct:false},
            { text:"raise",correct:true},

           ]
        },

{
    question:"which of the following is not a part of python:",
    answers:[
        {  text:"loops",correct:false },
        {text:"none",correct:false},
        { text:"dynamic typing",correct:false},
        { text:"pointers",correct:true},
       ]
    },
];

const questionElement=document.getElementById("question")
const answersButton=document.getElementById("answer-buttons")
const nextButton=document.getElementById("next-btn");



let currentQuestionIndex=0;
let score=0;
function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next"
    showQuestion();

}

function showQuestion(){
    resetState();
    
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex +1;
    questionElement.innerHTML=questionNo +"." + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
      const button=document.createElement("button");
      button.innerHTML=answer.text;
      button.classList.add("btn");
    answersButton.appendChild(button);
    if(answer.correct){
        button.dataset.correct=answer.correct
    }
    button.addEventListener("click",selectanswer)


    });

}

function resetState(){
    nextButton.style.display="none";
    while(answersButton.firstChild){
        answersButton.removeChild(answersButton.firstChild)
    }
}

function selectanswer(e)
{
    const selectedBtn=e.target;
    const  iscorrect=selectedBtn.dataset.correct==="true";
    if(iscorrect){
        selectedBtn.classList.add("correct");
        score++;

    }
    else{
    
        selectedBtn.classList.add("incorrect");

    }
    Array.from(answersButton.children).forEach(button=>{
        if(button.dataset.correct==="true")
        {
            button.classList.add("correct");
        }
        button.disabled=true;
    })
     nextButton.style.display="block";
}
nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();

    }
    else{
        startQuiz();
    }
})
  function showscore(){
     resetState();
     questionElement.innerHTML=`your score ${score}  out of ${questions.length}!`;
     nextButton.innerHTML="play again";
      nextButton.style.display="block"
      }


function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length)
    {
        showQuestion()
    }
    else{
        showscore();
    }
}
startQuiz();