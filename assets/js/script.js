// get current date
var current = moment().format('dddd, MMMM Do YYYY');

// input current day at top of page
$("#currentDay").append(current);


// create array with ids that will correspond to text that says the time
var timeArray = document.querySelectorAll("#nine, #ten, #eleven, #twelve, #thirteen, #fourteen, #fifteen, #sixteen, #seventeen");
var time = 9;

// this for loop works to put the times 9-5 in their correct place 
for ( i=0; i<timeArray.length; i++){
    $(timeArray[i]).attr('class','hour col-2')
    m = moment().set('hour',time).format('h a');
    $(timeArray[i]).append(m);
    time++
    console.log(m)
    console.log(timeArray)
};



