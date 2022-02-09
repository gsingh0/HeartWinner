some edge cases to consider
 - when one button is pressed, disable it so user can't press it multiple times
    - when action is done executing, re-enable the button
 - when button 1 is pressed with action 1, and user presses button 2 to trigger 
   action 2, first stop action 1, wait 2-3 seconds, then start action 2
 - have a settings screen with only logout option
 - login screen
 - home screen just going to be a scroll view of buttons
    - with each button pressed, will change the color of background


- put light on in the bottom of the screen
- make button the same shade as the background color when pressed
    - try to add animations to background color
- when light is off
    -> disable all other buttons but make it in view

- when light is on
    -> enable all other buttons

- type of buttons
    - misc.
        - *scare gurnoor (toggle off and on repeatedly)
        - *dim the light (so gurnoor can't see)
        - *change the color to yellow (gurnoor hates that color)
        - choose custom color
    - mood
        - pink - jeetu wants attention
        - green - jeetu wants to talk
        - orange - jeetu wants to vent


color transition -> click button color should be target color
    - prev: current, target: clicked color, can do transition css from there inside
    onBackGroundColorChange method

- explore effects


- missing you button

- missing you - pink - heart
- company - orange - person-person
- talk - blue
- happy - green
- low - red
- hungry - yellow
- annoy - purple 
- confuse - black


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyAElgnqkQO8-W7IznjfsQZQAZTxxOcBs",
  authDomain: "heartwinner-caa70.firebaseapp.com",
  projectId: "heartwinner-caa70",
  storageBucket: "heartwinner-caa70.appspot.com",
  messagingSenderId: "126541759464",
  appId: "1:126541759464:web:a16b780f575a86266e1a5d",
  measurementId: "G-LJ60J4GJ8G"
};