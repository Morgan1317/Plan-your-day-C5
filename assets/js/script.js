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
    
    // push object into local storage
    userArray = JSON.parse(localStorage.getItem('input'));
    if(!userArray){
        userArray = [];
    };
    userArray.push(userInput);
    localStorage.setItem('input',JSON.stringify(userArray));
          
        
   

     

}); 
// userArray = JSON.parse(window.localStorage.getItem('input'));
    

// load previously stored data onto screen when page is loaded. 
var loadInputs = function() {
    debugger; 
    userArray = JSON.parse(localStorage.getItem("input"));
    // if there is no user input yet, set to empty string
    if(!userArray){
        userArray = {
            input:'',
            id: ''
        };
    };

    // $.each(userArray, function(input, id) {
        
    //     // then loop over sub-array to determine input based on id and return text to rightful place
    //     userArray.forEach(function(userInput) {
            
        for (i = 0; i<userArray.length; i++){
     
 
            switch(userArray[i].id){
                case 'nine':
                    // userArray = userArray.slice(-1);
                    console.log(userArray[i].input);
                    $('#nine').next().text(userArray[i].input)
                    break;
                case 'ten':
                    // userArray = userArray.slice(-1);
                    console.log(userArray);
                    console.log(userArray[i].input)
                    $('#ten').next().text(userArray[i].input)
                    break;
                case 'eleven': 
                    // userArray = userArray.slice(-1);
                    console.log(userArray);
                    console.log(userArray[i].input)
                    $('#eleven').next().text(userArray[i].input)
                    break;
                case 'twelve':
                    // userArray = userArray.slice(-1);
                    console.log(userArray);
                    console.log(userArray[i].input)
                    $('#twelve').next().text(userArray[i].input)
                    break;
                case 'thirteen':
                    // userArray = userArray.slice(-1);
                    console.log(userArray);
                    console.log(userArray[i].input)
                    $('#thirteen').next().text(userArray[i].input)
                    break;
                case 'fourteen':
                    // userArray = userArray.slice(-1);
                    console.log(userArray);
                    console.log(userArray[i].input)
                    $('#fourteen').next().text(userArray[i].input)
                    break;
                case 'fifteen':
                    // userArray = userArray.slice(-1);
                    $('#fifteen').next().text(userArray[i].input)
                    break;
                case 'sixteen': 
                    // userArray = userArray.slice(-1);
                    console.log(userArray);
                    console.log(userArray[i].input)
                    $('#sixteen').next().text(userArray[i].input)
                    break;
                case 'seventeen':
                    // userArray = userArray.slice(-1);
                    console.log(userArray[i].input)
                    $('#seventeen').next().text(userArray[i].input)
                    break;
            
            };
        }
      
    }    


loadInputs();