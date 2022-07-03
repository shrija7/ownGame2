class Security {

    constructor(){

        this.access1 = createInput("your ans")
        this.access1.position(100,240);
        this.access1.style('background', 'white');  

        this.button1 = createButton('Check');
        this.button1.position(100,270);
        this.button1.style('background', 'lightgrey');    

        this.access2 = createInput("your ans")
        this.access2.position(650,240);
        this.access2.style('background', 'white');  

        this.button2 = createButton('Check');
        this.button2.position(650,270);
        this.button2.style('background', 'lightgrey');

        this.access3 = createInput("your ans")
        this.access3.position(100,440);
        this.access3.style('background', 'white');  

         this.button3 = createButton('Check');
         this.button3.position(100,470);
         this.button3.style('background', 'lightgrey');
        
         this.button5 = createButton('reset');
         this.button5.position(700,550);
         this.button5.style('background', 'pink');

         this.access4 = createInput("your ans")
         this.access4.position(650,440);
         this.access4.style('background', 'white');  
 
          this.button4 = createButton('Check');
          this.button4.position(650,470);
          this.button4.style('background', 'lightgrey');
      
    }

    display(){

        this.button1.mousePressed(() => {
            if(system.authenticate(accessCode1,this.access1.value())){
                this.button1.hide();
                this.access1.hide();
                score++;
            }
        });

        this.button2.mousePressed(() => {
            if(system.authenticate(accessCode2,this.access2.value())){
                this.button2.hide();
                this.access2.hide();
                score++;
            }
        });
        this.button5.mousePressed(() => {
            this.button1.show();
            this.access1.show();
            this.button2.show();
            this.access2.show();
            this.button3.show();
            this.access3.show();
            this.button4.show();
            this.access4.show();  
                score=0;
            
        });

        this.button4.mousePressed(() => {
            if(system.authenticate(accessCode4,this.access4.value())){
                this.button4.hide();
                this.access4.hide();
                score++;
            }
        });


        // this.button3(() => {
        //     if(system.authenticate(accessCode3,this.access3.value())){
        //         this.button3.hide();
        //         this.access3.hide();
        //         score++;
        //     }
        // });

        // this.mousePressed(() => {
        //     if(system.authenticate(accessCode3,this.access3.value())){
        //         this.button3.hide();
        //         this.access3.hide();
        //         score++;
        //     }
        // });

        this.button3.mousePressed(() => {
           if(system.authenticate(accessCode3,this.access3.value())){
              this.button3.hide();
              this.access3.hide();
               score++;
            }
         });

       //  this.button3.mousePressed({
         //    if(system.authenticate(accessCode3,this.access3.value())){
          //    this.button3.hide();
          //       this.access3.hide();
        //       score++;
        //   }
      //   });
    }
}