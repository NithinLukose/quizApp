let quiz = (function(){
    let questions = [
        {
            id:1,
            question:'Who is the current prime minister of India?',
            a:'Rahul Gandhi',
            b:'Amit Shah',
            c: 'Yogi ji',
            d: 'Narendra Modi',
            correct: 4
        },
        {
            id:2,
            question:'Who is the most powerful?',
            a:'Superman',
            b:'Saitama',
            c: 'Goku',
            d: 'Thanos',
            correct: 2
        },
        {
            id:3,
            question:'What is my age?',
            a:23,
            b:24,
            c:25,
            d:26,
            correct: 3
        },
        {
            id:4,
            question:'Which is the most popular programming language?',
            a:'JavaScript',
            b:'Java',
            c: 'Python',
            d: 'C',
            correct: 1
        },
    ]

    let seletcedAnswers = new Array(questions.length)
    seletcedAnswers.fill(-1)
    let currentQuestion = 1;
    let submit = false;
    let score = 0;
    //cacheDom
    let questionNumberHeader = document.querySelector('.question-number')
    let nextBtn = document.querySelector('.next-btn')
    let prevBtn = document.querySelector('.previous-btn')
    let questionText = document.querySelector('.question-text')
    let a_text = document.querySelector('#a_text')
    let b_text = document.querySelector('#b_text')
    let c_text = document.querySelector('#c_text')
    let d_text = document.querySelector('#d_text')
    let radioButtons = document.querySelectorAll('.answer')

    //render
    const render = () => {
        if(submit){
            alert(`score:${score}`)
        }
        else{
            questionNumberHeader.innerText = `Question ${currentQuestion}`
            if(currentQuestion === 1){
                prevBtn.disabled  = true
            }
            else{
                prevBtn.disabled  = false
            }
            if(currentQuestion === questions.length){
                nextBtn.innerText='Submit'
            }
            questionText.innerText = questions[currentQuestion-1].question;
            for(let i = 0;i<radioButtons.length;i++){
                if(seletcedAnswers[currentQuestion-1]===i){
                    radioButtons[i].checked = true;
                }
                else{
                    radioButtons[i].checked = false;
                }
            }
            a_text.innerText = questions[currentQuestion-1].a
            b_text.innerText = questions[currentQuestion-1].b
            c_text.innerText = questions[currentQuestion-1].c
            d_text.innerText = questions[currentQuestion-1].d
        }
        
    }

    const calculateScore = () => {
        for(let i = 0;i<questions.length;i++){
            if(questions[i].correct === seletcedAnswers[i]+1){
                score++;
            }
        }
    }

    //event  handlers
    const handleNextBtnClick = (e) => {

        let selected = false;
        for(let i = 0;i<radioButtons.length;i++){
            if(radioButtons[i].checked){
                selected=true
                seletcedAnswers[currentQuestion-1] = i
            }
        }
        if(selected){
            if(currentQuestion<questions.length){
                currentQuestion++;
            }
            else{
                submit = true;
                calculateScore()
            }
            render()
        }
        
        
    };

    const handlePrevBtnClick = (e) => {
        if(currentQuestion!==1){
            currentQuestion--;
        }
        render()
    }

    //event binding
    nextBtn.addEventListener('click',handleNextBtnClick)
    prevBtn.addEventListener('click',handlePrevBtnClick)
    render()
})()