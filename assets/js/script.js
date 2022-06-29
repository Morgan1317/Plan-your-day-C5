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

  // runs time check every minute so colors can be updated accordingly 
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

    

// load previously stored data onto screen when page is loaded. 
var loadInputs = function() {
    userArray = JSON.parse(localStorage.getItem("input"));
    // if there is no user input yet, set to empty string
    if(!userArray){
        userArray = {
            input:'',
            id: ''
        };
    };


   // looks at what is in storage and assigns it to the appropriate text area depending on the ID that is assigned to it.  
    for (i = 0; i<userArray.length; i++){
    

        switch(userArray[i].id){
            case 'nine':
                $('#nine').next().text(userArray[i].input)
                break;
            case 'ten':
                $('#ten').next().text(userArray[i].input)
                break;
            case 'eleven': 
                $('#eleven').next().text(userArray[i].input)
                break;
            case 'twelve':
                $('#twelve').next().text(userArray[i].input)
                break;
            case 'thirteen':
                $('#thirteen').next().text(userArray[i].input)
                break;
            case 'fourteen':
                $('#fourteen').next().text(userArray[i].input)
                break;
            case 'fifteen':
                $('#fifteen').next().text(userArray[i].input)
                break;
            case 'sixteen': 
                $('#sixteen').next().text(userArray[i].input)
                break;
            case 'seventeen':
                $('#seventeen').next().text(userArray[i].input)
                break;
        
        };
    }
    
    }    


loadInputs();