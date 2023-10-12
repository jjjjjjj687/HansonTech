




var number = Math.floor(Math. random() * 100) + 1;

console.log(number)

var x = parseInt("2");

console.log(x);

$("#rev").fadeOut(1,function(){
})

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

var name
var id

// function createNewCheckboxt(name, id){
//     var checkbox = document.createElement('input'); 
//     checkbox.type= 'checkbox';
//     checkbox.name = name;
//     checkbox.id = id;
//     return checkbox;
// }

// $("#checkboxes").append(createNewCheckboxt('theName', 'theID'));

var textid = "";
textid = (document.getElementById("toodo").value); 

var checkid = "";
var spanid = "";

spanid += 'b';
checkid += 'a';



function newCheckbox(){
    textid = (document.getElementById("toodo").value); 
    $("#checkboxes").append('<input type = "checkbox" id ="' + checkid + '"/><span id = "'+spanid+'">'+textid+'</span>')
    spanid += 'b';
    checkid += 'a';
}

console.log(checkid)
console.log(spanid)

$(function(){

$(document).on('click', "[type=checkbox]", function(event){  /* looks for a click on a button with an id of my-button */
    if($(event.target).is(':checked')) {
        alert("Good job! You have completed one! Now do the rest. ");
        $(event.target).fadeOut(1000,function(){    //theres also slideDown and slideUp.//
        })
        $(event.target).next().fadeOut(1000,function(){    //theres also slideDown and slideUp.//
        })
}
});

$('checkbox').siblings();
})


$(function(){
    $("#boxcool").on('click',function(event) {  /* looks for a click on a button with an id of my-button */


    $("#id").css({
        'font-size' : '10px',
        'width' : '30px',
        'height' : '10px',
        'animation-name': 'example',
        'animation-duration': '4s'
     });

        
    });
    });


$(function(){
    $("#go").on('click',function(event) {  /* looks for a click on a button with an id of my-button */

      newCheckbox()
      console.log(checkid)
      console.log(spanid)
      execute()

        
    });
    });





$(function() {
    $('.greeting').animate(
        {backgroundColor: 'red'},
        500,
        function() {
            alert("its red mo");

        }

    );
});






$(function() {

$(document).on("click", "[type=checkbox]", function(event){
$('#checkbox').click(function(event){
    if($(event.target).is(':checked')) {
        alert("Good job! You have completed one!");
        $(event.target).fadeOut(100,function(){
        })
        
}
});

$('#checkbox').siblings();
})
});




var count

count = 0

$(function(){
    $("#guess").on('click',function(event) {  /* looks for a click on a button with an id of my-button */
        num = parseInt(document.getElementById("num").value); 
    if(num > number) { 
            alert("Too big, try again");  
            count += 1
    }
    
    if(num < number) {
            alert("Too small, try again")
            count += 1

    }

    if(num == number) {
        alert("YOU GOT IT YAY")
        alert("You got it in "+count+" attemps!")
        count = 0

    }

        
    });
    });








    $(function(){
        $('#second-parent').click(function(){
            e1 = $('#first-child');
            e1.addClass('animate');
            e1.one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
            function (e) {
                e1.removeClass('animate');
            });
        });
    });


    function calculate() {
        var firstnum = parseInt(document.getElementById("firstnum").value);
        var secondnum = parseInt(document.getElementById("secondnum").value);
        var operation = document.getElementById("operation").value;
        var result;
    
        switch (operation) {
            case "add":
                result = firstnum + secondnum;
                break;
            case "subtract":
                result = firstnum - secondnum;
                break;
            case "multiply":
                result = firstnum * secondnum;
                break;
            case "divide":
                if (secondnum !== 0) {
                    result = firstnum / secondnum;
                } else {
                    result = "Cannot divide by zero";
                }
                break;
            default:
                result = "Invalid operation";
        }
    
        var answerElement = document.getElementById("answer");
        answerElement.textContent = result;
    }
    
    



document.getElementById("add").addEventListener("click", calculate) /* listens for a click from the add button with the add id. */


var story = "";

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("madlibs").addEventListener('click', function(event) {
        var adjective = document.getElementById("adjective").value;
        var emotion = document.getElementById("emotion").value;
        var verb = document.getElementById("verb").value;
        var noun = document.getElementById("noun").value;
        var time = document.getElementById("time").value;
        var adverb = document.getElementById("adverb").value;
        var place = document.getElementById("place").value;
        var noun2 = document.getElementById("noun2").value;
        var adjective2 = document.getElementById("adjective2").value;
        var adjective3 = document.getElementById("adjective3").value;
        var noun3 = document.getElementById("noun3").value;
        var food = document.getElementById("food").value;
        var food2 = document.getElementById("food2").value;
        var veacle = document.getElementById("veacle").value;

        story = `One ${adjective} morning, Bob woke up feeling ${emotion}. He quickly ${verb}ed out of bed and grabbed his ${noun} to check the time only to realize it was ${time}! In a ${adverb} frenzy, he rushed to the ${place} and barely caught his ${noun2} just in ${noun3}. Throughout the day, Bob dealt with ${adjective2} coworkers and ${adjective3} meetings that seemed to ${verb} on forever. His computer crashed at the most ${adjective2} moments, and he spilled ${food} on important ${noun3}. Lunch was a ${adjective3} disaster; he ordered a ${food} but received a ${food2} instead. As he ${verb}ed back home, riding his ${veacle}, he couldn't help but laugh at the ${adjective2} series of ${noun2} that had filled his day.`;

        var answer = document.createElement('p');
        var text = document.createTextNode(story);
        answer.appendChild(text);

        var element = document.getElementById("story");
        element.innerHTML = '';
        element.appendChild(answer);
    });
});

