# Plan-your-day-C5

### Daily Planner ###

**PURPOSE**

Take a starter code and make it so that a user is given the current date at the top of the page, and a list of times that occur during regular business hours. They are then able to add text into different text boxes corresponding to those times, and this text stays upon page refresh. If the hour has past, the box shows gray, if the hour is happening the box is red, and if its in the future it shows green. 

**Summary**

I first got the current day to appear, and then set an array that corresponded to time id's that were the blocks of my class, and append that text into the html. 

I then established a function that would determine the current relavent time, and compare to all of the time ids to determine which classes should be added or removed, and thus change the color of the textarea. 

<img width="1840" alt="Screen Shot 2022-06-29 at 11 55 38 AM" src="https://user-images.githubusercontent.com/103079401/176342246-04f8fe7c-6fb8-4d43-9c3c-aa32c145b465.png">

I set this function up to happen in a time interval, so that it would run more than once, and keep the page updated as the time changes thorughout the day. 

I saved my items using an object that contained the text value as well as the id that was next to it upon a button press. This way I could use that id later, and call upon that specific text to return to that specific text area. 

<img width="1840" alt="Screen Shot 2022-06-29 at 11 55 49 AM" src="https://user-images.githubusercontent.com/103079401/176342494-b40e094f-3517-4418-aa6c-edba7be7038c.png">

I utilized a switch case to look into the local storage array and determine the text input that should go in the appropriate box, depending on the id that it was called with. 

<img width="1840" alt="Screen Shot 2022-06-29 at 11 55 59 AM" src="https://user-images.githubusercontent.com/103079401/176342598-1574ff29-c3e5-4155-a49a-afc937365a78.png">

**Screen Capture of Webpage**

<img width="1839" alt="Screen Shot 2022-06-29 at 11 57 41 AM" src="https://user-images.githubusercontent.com/103079401/176342690-2ed58634-479c-4565-a89c-d7efe64ad615.png">

**LINK TO DEPLOYED APPLICATION**

https://morgan1317.github.io/Plan-your-day-C5/

