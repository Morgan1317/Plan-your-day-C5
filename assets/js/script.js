// get current date
var current = moment().format('dddd, MMMM Do YYYY');

var textArea= $("textarea")
   

// input current day at top of page
$("#currentDay").append(current);


// create array with ids that will correspond to text that says the time
var timeArray = document.querySelectorAll("#nine, #ten, #eleven, #twelve, #thirteen, #fourteen, #fifteen, #sixteen, #seventeen");
var time = [9, 10, 11, 12, 13, 14, 15, 16, 17];

// this for loop works to put the times 9-5 in their correct place 
for ( i=0; i<timeArray.length; i++){
    $(timeArray[i]).attr('class','hour col-2');
    m = moment().set('hour',time[i]).format('h a');
    $(timeArray[i]).append(m);

};




var whatTimeIsIt = function() {

    for ( i=0; i<timeArray.length; i++){
      
    // apply new class to determine the color the text area should be  if depending on current time and listed times
        
        var currentMoment = new Date();
        textArea = $("textarea")
        if (currentMoment.getHours()==time[i] ){
            $(textArea[i]).removeClass("future")
            $(textArea[i]).removeClass("past")
            $(textArea[i]).addClass("present")
        }   
        else if(currentMoment.getHours()>time[i] ){
            $(textArea[i]).removeClass("future")
            $(textArea[i]).removeClass("present")
            $(textArea[i]).addClass("past");
        } else if (currentMoment.getHours()<time[i]){
            $(textArea[i]).removeClass("past")
            $(textArea[i]).removeClass("present")
            $(textArea[i]).addClass("future")
        }

    }

  };

  // runs time check every minute
    setInterval(function() {
    $("textArea").each(function() {
      whatTimeIsIt($(this));
    });
  }, 1000);

  whatTimeIsIt();
 
//   save into storage, local
// when click on this save button, the collect both the user input and the id attached to the button that was clicked

$('.saveBtn').on('click',function(){
    var userInput = {
        input: $(this).prev().val(),
        id: $(this).prev().prev().attr('id')
        
    };
    // depending on the corresponding id, switch to save the input, with the corresponding time box
    switch(userInput.id){
        case 'nine':
            arrayNine = JSON.parse(localStorage.getItem('input'));
            if(!arrayNine){
                arrayNine = [];
            };
            arrayNine.push(userInput);
            localStorage.setItem('input',JSON.stringify(arrayNine));
            console.log(arrayNine);
            break;
        case 'ten':
            arrayTen = JSON.parse(localStorage.getItem('input'));
            if(!arrayTen){
                arrayTen = [];
            };

            arrayTen.push(userInput);
            localStorage.setItem('input',JSON.stringify(arrayTen));
            console.log(arrayTen);
            break;
        case 'eleven': 
            arrayEleven = JSON.parse(localStorage.getItem('input'));
            if(!arrayEleven){
                arrayEleven = [];
            };

            arrayEleven.push(userInput);
            localStorage.setItem('input',JSON.stringify(arrayEleven));
            console.log(arrayEleven);
            break;
        case 'twelve':
            arrayTwelve = JSON.parse(localStorage.getItem('input'));
            if(!arrayTwelve){
                arrayTwelve = [];
            };

            arrayTwelve.push(userInput);
            localStorage.setItem('input',JSON.stringify(arrayTwelve));
            console.log(arrayTwelve);
            break;
        case 'thirteen':
            arrayThirteen = JSON.parse(localStorage.getItem('input'));
            if(!arrayThirteen){
                arrayThirteen = [];
            };

            arrayThirteen.push(userInput);
            localStorage.setItem('input',JSON.stringify(arrayThirteen));
            console.log(arrayThirteen);
            break;
        case 'fourteen':
            arrayFourteen = JSON.parse(localStorage.getItem('input'));
            if(!arrayFourteen){
                arrayFourteen = [];
            };

            arrayFourteen.push(userInput);
            localStorage.setItem('input',JSON.stringify(arrayFourteen));
            console.log(arrayFourteen);
            break;
        case 'fifteen':
            arrayFifteen = JSON.parse(localStorage.getItem('input'));
            if(!arrayFifteen){
                arrayFifteen = [];
            };

            arrayFifteen.push(userInput);
            localStorage.setItem('input',JSON.stringify(arrayFifteen));
            console.log(arrayFifteen);
            break;
        case 'sixteen': 
            arraySixteen = JSON.parse(localStorage.getItem('input'));
            if(!arraySixteen){
                arraySixteen = [];
            };

            arraySixteen.push(userInput);
            localStorage.setItem('input',JSON.stringify(arraySixteen));
            console.log(arraySixteen);
            break;
        case 'seventeen':
            arraySeventeen = JSON.parse(localStorage.getItem('input'));
            if(!arraySeventeen){
                arraySeventeen = [];
            };

            arraySeventeen.push(userInput);
            localStorage.setItem('input',JSON.stringify(arraySeventeen));
            console.log(arraySeventeen);
            break;
    }
}); 

// load previously stored data onto screen when page is loaded. 
var loadInputs = function() {
    userInput = JSON.parse(localStorage.getItem("input"));
    if(!userInput){
        userInput = {
            input:'',
            id: ''
        };
    };
    userInput = JSON.parse(window.localStorage.getItem('input'));
};
    
loadInputs();




    






    



