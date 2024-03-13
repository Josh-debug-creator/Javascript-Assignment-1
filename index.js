// Algorithms and codes


// Get your guess from the input value
const inputVal = document.querySelector("input");

// Get your button element
const myValue = document.getElementsByClassName("text")[0];

// Generate a guess
const actualGuess = 10;


 // Check if the guess is same with the user guess
function checkGuess(userGuess, actualGuess) {
// function body where implementation happens
// If guess is same, user wins
if (userGuess.length > 0) {
    if (userGuess == actualGuess){
        alert("correct guess, your head dey there")
    }
    // Else if guess isn't the same, user loses
    else if (userGuess !== actualGuess) {
        alert("Try get sense na, try again")
    }
    }

           else { alert("Input is empty")}
}
        
myValue.addEventListener("click", function() {checkGuess(inputVal.value,actualGuess)})

// Assignment
// Add a functionality to keep track of the number of times the user has guessed. the user has only 5 attempts. Once it is equal to 5, disable the button so it cannot work again.
// Hint: Use .innerHTML to make the improvement

// Number of guesses
let numberOfGuess = 0;


// Display number of guesses
function numberOfClicks() 
    {
        if(inputVal.value === ''){
        alert('Input a number')
    }
       else if
        (numberOfGuess < 5 )
       {
            numberOfGuess++;
            alert(`${numberOfGuess} attempts made`)
            document.getElementById("chances").innerHTML = `You have ${5 - numberOfGuess} more trials`;
        }
    //     else if
    //     (numberOfGuess = 4 )
    //    {
    //         numberOfGuess++;
    //         alert(`${numberOfGuess} attempts made`)
    //         document.getElementById("chances").innerHTML = `You have ${5 - numberOfGuess} more trial`;
    //    }
    else if (numberOfGuess = 5){
        document.getElementById("chances").innerHTML = `You have exhauseted your trials, try again later`;
    }
     }




function disableButton () {if (numberOfGuess == 5 || inputVal == '')
    {myValue.disabled = true}
    else {myValue.disabled = false;}
}

   
myValue.addEventListener("click",function () {numberOfClicks ()
    disableButton () 
checkGuess()
})



    


    
 

