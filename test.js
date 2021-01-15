
let position = 0, correct = 0;  // variable declare

const questions = [          // array , all the questions ,options,answer declare
    [ "Question 1: What is 10 + 4?", "12", "14", "16", "B" ],
    [ "Question 2: What is 20 - 9?", "7", "13", "11", "C" ],
    [ "Question 3: What is 7 x 3?", "21", "24", "25", "A" ],
    [ "Question 4: What is 8 / 2?", "10", "12", "4", "C" ],
    [ "Question 5: What is 10 + 2?", "12", "14", "16", "A" ],
    [ "Question 6: What is 20 - 2?", "7", "13", "18", "C" ],
    [ "Question 7: What is 7 x 2?", "14", "24", "25", "A" ],
    [ "Question 8: What is 8 / 8?", "10", "2", "1", "C" ],
    [ "Question 9: What is 10 + 10?", "12", "20", "16", "B" ],
    [ "Question 10: What is 20 - 10?", "7", "13", "10", "C" ]
   
];

let get = (x) => document.getElementById(x);

let quetions1by1 = () => {   
    let test = get("test");
        if (position >= questions.length){   
            test.innerHTML = "<h3>You got "+correct+" of "+questions.length+" questions correct<h3><br>";  // produce the result
            get("status").innerHTML = "Test Completed";    // message display
            position = 0;
            correct = 0;
            return false;
      }
    let question = questions[position][0];
    let aA = questions[position][1];
    let aB = questions[position][2];
    let aC = questions[position][3];
    test.innerHTML = "<h3>"+question+"</h3>";
    test.innerHTML += "<input type='radio' name='choices' value='A'> "+aA+"<br>";
    test.innerHTML += "<input type='radio' name='choices' value='B'> "+aB+"<br>";
    test.innerHTML += "<input type='radio' name='choices' value='C'> "+aC+"<br><br>";
    test.innerHTML += "<button type='button' class='welcome_text' onclick='checkAnswer()'>Submit  Answer</button>";  // submit button
};

const checkAnswer = () => {
    var choices = document.getElementsByName("choices");
    for(var i=0;i<choices.length; i++){
        if(choices[i].checked){
            var choice = choices[i].value;
        }
    }
    if(choice==questions[position][4]){
        correct++;     //the score will increase
    }
    position++;    //next question
    quetions1by1();
}
window.addEventListener("load",quetions1by1,false);