/* global $ */

$(document).ready(function () {
  var totalRounds = 5
  var roundCounter = 0

  var questionArray = [
    'Q1 - What is the definition of a "callback"?',
    'Q2 - What are the two ways to define a function in Javascript?',
    'Q3 - What is the syntax for declaring a function?',
    'Q4 - What is the syntax for expressing a function?',
    'Q5 - Which syntax could be used as a method in a function?'
  ]

  // All this might be good to put in a separate .js file. Remember that global variables are accessible across .js files!

  var choiceArray1 = [
    '1) A piece of executable code that is passed as an argument to other code, which is expected to invoke (or "call back") that executable code at some convenient time.',
    '1) Declaration & Method',
    '1) var multiply = function ( num1, num2 ) {return num1 * num2}',
    '1) function multiply( num1, num2 ) {return num1 * num2}',
    '1) gps: function (location) {console.log( "Beep boop, driving to " + location )}'
  ]

  var choiceArray2 = [
    '2) A function written with "call" in it.',
    '2) Declaration & Expression',
    '2) gps: function (location) {console.log( "Beep boop, driving to " + location )}',
    '2) var multiply = function ( num1, num2 ) {return num1 * num2}',
    '2) function multiply( num1, num2 ) {return num1 * num2}'
  ]

  var choiceArray3 = [
    '3) A function written to be used at a later time.',
    '3) Method & Expression',
    '3) function multiply( num1, num2 ) {return num1 * num2}',
    '3) gps: function (location) {console.log( "Beep boop, driving to " + location )}',
    '3) var multiply = function ( num1, num2 ) {return num1 * num2}'
  ]

  var answerArray = [
    '1',
    '2',
    '3',
    '2',
    '1'
  ]

  var score = 0
  $('#scoreDiv').html('Your score is ' + score)
  // I'd create an updateScore function:
  /*
  function updateScore(number){
    $("#scoreDiv").html('Your score is ' + number);
  }
  */

  function displayQuestion () {
    $('#set-input').show('slow/400/fast')
    $('#nextButton').hide('slow/400/fast')
    $('#questionDiv > p').html(questionArray[roundCounter])
    $('#choiceDiv p:eq(0)').html(choiceArray1[roundCounter])
    $('#choiceDiv p:eq(1)').html(choiceArray2[roundCounter])
    $('#choiceDiv p:eq(2)').html(choiceArray3[roundCounter])
  }
  displayQuestion()

  /*
  We didn't discuss this, but if you want to make things more efficient -- and more readable -- consider creating a global 'el' object and putting all of your elements inside it.
  Then, all of your jQuery elements will be loaded at the start, and you'll drastically reduce your browser load by not having to search through the DOM all the time.
  Plus, you can name the elements in a way that's more legible, and if you change the class or ID of the element, you only need to update it in your JS in one place.
  var el = {
    setInput: $("#set-input"),
    nextButton: $("#next-button")
  }
  */

  var setInput = function () {
    var inputSubmitted = $('#input-field').val()
    if (inputSubmitted === answerArray[roundCounter]) {
      $('#set-input').hide('slow/400/fast')
      $('#resultDiv > h2').html('Correct! Good Job')
      score += 10
      $('#scoreDiv').html('Your score is ' + score)
    } else {
      $('#resultDiv > h2').html('Sorry! Try again...')
      score -= 10
      $('#scoreDiv').html('Your score is ' + score)
    }
    $('#nextButton').show('slow/400/fast')
  }

  $('#set-input').on('click', setInput)

// If enter key pressed with html in input field, call setInput
  $('html').on('keydown', function (e) {
    if (e.keyCode === 13) {
      setInput()
    }
  })

  var onNext = function () {
    //I'd say stick to using either var functionName = function, or function functionName(). They do the same thing, but it's better for consistency's sake.
    console.log('Next button Clicked')
    console.log(roundCounter)
    roundCounter += 1
    $('#resultDiv > h2').html('')
    if (roundCounter < totalRounds) {
      displayQuestion()
    } else {
      $('#questionDiv').hide('slow/400/fast')
      $('#choiceDiv').hide('slow/400/fast')
      $('#inputDiv').hide('slow/400/fast')
      $('#nextButton').hide('slow/400/fast')
      $('#set-input').hide('slow/400/fast')
      $('#resultDiv > h2').html('All Done! Thanks for playing.')
    }
  }

  // Remember that you can put functions OUTSIDE the $(document).ready, thanks to hoisting, as long as you use the function functionName(){} syntax rather than var functionName = function(){}. I'd strongly encourage this: it makes it so the only stuff inside $(document).ready is the code where things are really "happening"

  $('#nextButton').on('click', onNext)
  // Some of your event handlers are anonymous functions, like for resetButton, and others have names, like nextButton. I'd say pick one -- preferably named functions. That way, you can keep all of your event functions in one place in your code.

  $('#resetButton').on('click', function () {
    console.log('Reset Button Clicked')
    roundCounter = 0
    console.log(roundCounter)
    $('#input-field').val('')
    $('#resultDiv > h2').html('')
    score = 0
    $('#scoreDiv').html('Your score is ' + score)
    $('#questionDiv').show('slow/400/fast')
    $('#choiceDiv').show('slow/400/fast')
    $('#inputDiv').show('slow/400/fast')
    $('#nextButton').hide('slow/400/fast')
    $('#set-input').show('slow/400/fast')
    // This isn't very DRY! Remember: if you find yourself repeating a particular line a lot, you can easily just plop it into its own function.
    displayQuestion()
  })
})
/*
If you're concerned about code readability, but you have a lot of stuff that only runs once, you might consider using greater use of IIFEs, or Immediately-Invoked Function Expressions.
For example:

(function greetMe(){
  console.log("Hi there")
}())

The extra parentheses mean this function will be called as soon as it's defined, and then can't be called again -- that is, it's single-use. The advantage of this is that it makes code look very tidy, and it also speeds things up: any variables created inside an IIFE will be garbage-collected after it has been called.
*/
