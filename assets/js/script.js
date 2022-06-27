// get current date
var current = moment().format('dddd, MMMM Do YYYY');
var textArea= $("textarea")

// input current day at top of page
$("#currentDay").append(current);


// create array with ids that will correspond to text that says the time
var timeArray = document.querySelectorAll("#nine, #ten, #eleven, #twelve, #thirteen, #fourteen, #fifteen, #sixteen, #seventeen");
var time = 9;

// this for loop works to put the times 9-5 in their correct place 
for ( i=0; i<timeArray.length; i++){
    $(timeArray[i]).attr('class','hour col-2');
    m = moment().set('hour',time).format('h a');
    $(timeArray[i]).append(m);
    time++
    console.log(m)

};




var whatTimeIsIt = function() {

    for ( i=0; i<timeArray.length; i++){
      
    // apply new class if depending on current time and listed times
        var timeText = timeArray[i].innerText
        var currentMoment = moment().startOf('hour').format('h a');
        // mCompare= moment().set('hour',time).format('h a');
        // time++
        momentCheck = moment().set('hour',24).format('h a');
        textArea = $("textarea")
        if (currentMoment===timeText ){
            $(textArea[i]).removeClass("future")
            $(textArea[i]).removeClass("past")
            $(textArea[i]).addClass("present")
        }   
        else if(currentMoment>timeText ){
            $(textArea[i]).removeClass("future")
            $(textArea[i]).removeClass("present")
            $(textArea[i]).addClass("past");
        } else if (currentMoment<timeText){
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