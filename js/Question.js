class Question {

    constructor(){
        this.title =  createElement('h1')
        this.input1 =  createInput('Enter Your Name Here...')
        this.input2 =  createInput('Enter Correct Option...')
        this.question = createElement('h3');
        this.option1 = createElement('h4');
        this.option2 = createElement('h4');
        this.option3 = createElement('h4');
        this.option4 = createElement('h4');


      this.button = createButton('Submit');

    }

    hide(){
        this.title.hide();
        this.input1.hide();
        this.input2.hide();
        this.button.hide();
    }

    display(){

        this.title.html("MyQuiz Game");
        this.title.position(350, 0);
    
        this.question.html("Question: Which of the following 4 spheres of the Earth contains all living things?" );
        this.question.position(120, 80);

        this.option1.html("1: Lithosphere" );
        this.option1.position(120, 100);

        this.option2.html("2: Hydrosphere" );
        this.option2.position(120, 120);

        this.option3.html("3: Biosphere" );
        this.option3.position(120, 140);

        this.option4.html("4: Atmosphere" );
        this.option4.position(120, 160);
    
        this.input1.position(120, 230);
        this.input2.position(350, 230);
        this.button.position(280, 300);

        
        this.button.mousePressed(()=>{
            this.input1.hide();
            this.input2.hide();
            this.button.hide();
            
            contestant.name = this.input1.value();
            contestant.answer = this.input2.value();
            contestantCount+=1;
            contestant.index = contestantCount;
            contestant.update();
            contestant.updateCount(contestantCount);
        });
        
    }




}