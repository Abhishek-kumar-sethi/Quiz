        let Score =0
        var int = document.querySelectorAll('input')
        function hello1(){
        var selectedOption = document.querySelector('input[name="q1"]:checked');
            if(selectedOption.value=='jquery'){
                Score++ 
            }
        }
        function hello2(){
        var selectedOption = document.querySelector('input[name="q2"]:checked');
            if(selectedOption.value=='Bootstrap'){
                Score++ 
            }
        }
        function hello3(){
        var selectedOption = document.querySelector('input[name="q3"]:checked');
            if(selectedOption.value=='local area network'){
                Score++ 
            }
        }
        function hello4(){
        var selectedOption = document.querySelector('input[name="q4"]:checked');
            if(selectedOption.value=='SQL'){
                Score++ 
            }
        }
        function hello5(){
        var selectedOption = document.querySelector('input[name="q5"]:checked');
            if(selectedOption.value=='facebook'){
                Score++ 
            }
        }
        // ANSWER PART ...
         function ans1 (){
            var selectedOption = document.querySelector('input[name="q1"]:checked');
        if(selectedOption){
            var span = document.getElementById('answer1')
            span.style.display = "block"
        }
        else{
            alert("select the option")
        }
       }
       function ans2 (){
        var selectedOption = document.querySelector('input[name="q2"]:checked');
        if(selectedOption){
            var span = document.getElementById('answer2')
            span.style.display = "block" 
        }
        else{
            alert("select the option")
        }
       }
       function ans3 (){
        var selectedOption = document.querySelector('input[name="q3"]:checked');
        if(selectedOption){
            var span = document.getElementById('answer3')
            span.style.display = "block"   
        }
        else{
            alert("select the option")
        }
       }  
       function ans4 (){
        var selectedOption = document.querySelector('input[name="q4"]:checked');
        if(selectedOption){
            var span = document.getElementById('answer4')
            span.style.display = "block"
        }
        else{
            alert("select the option")
        }
       }
       function ans5 (){
        var selectedOption = document.querySelector('input[name="q5"]:checked');
        if(selectedOption){
            var span = document.getElementById('answer5')
            span.style.display = "block"
        }
        else{
            alert("select the option")
        }
       }
    function Submit(){
        var final = document.getElementById('Score')
        final.innerHTML = "Your Score : "+Score
    }