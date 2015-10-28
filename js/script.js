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
  $('#scoreDiv > p').html('Your score is ' + score)

  function displayQuestion () {
    $('#nextButton').hide('slow/400/fast')
    $('#questionDiv > p').html(questionArray[roundCounter])
    $('#choiceDiv p:eq(0)').html(choiceArray1[roundCounter])
    $('#choiceDiv p:eq(1)').html(choiceArray2[roundCounter])
    $('#choiceDiv p:eq(2)').html(choiceArray3[roundCounter])
  }
  displayQuestion()

  $('#set-input').on('click', function () {
    var inputSubmitted = $('#input-field').val()
    if (inputSubmitted === answerArray[roundCounter]) {
      $('#resultDiv > h2').html('Correct! Good Job')
      score += 10
      $('#scoreDiv > p').html('Your score is ' + score)
    } else {
      $('#resultDiv > h2').html('Sorry! Try again...')
      score -= 10
      $('#scoreDiv > p').html('Your score is ' + score)
    }
    $('#nextButton').show('slow/400/fast')
  })

  $('#nextButton').on('click', function () {
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
  })

  $('#resetButton').on('click', function () {
    console.log('Reset Button Clicked')
    roundCounter = 0
    console.log(roundCounter)
    $('#input-field').val('')
    $('#resultDiv > h2').html('')
    score = 0
    $('#scoreDiv > p').html('Your score is ' + score)
    $('#questionDiv').show('slow/400/fast')
    $('#choiceDiv').show('slow/400/fast')
    $('#inputDiv').show('slow/400/fast')
    $('#nextButton').hide('slow/400/fast')
    $('#set-input').show('slow/400/fast')
    displayQuestion()
  })
})

// Get rid of playGame, so can call displayQuestion at beginning
// Trying to get rid of over-incrementing loop (skip Q#3, etc)
