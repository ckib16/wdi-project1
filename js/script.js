/* global $ */

$(document).ready(function () {
  var totalRounds = 5
  var roundCounter = 0

  function playGame () {
    var questionArray = [
      'What is the definition of a "callback"?',
      'This is the question #2 text',
      'This is the question #3 text',
      'This is the question #4 text',
      'This is the question #5 text'
    ]

    var choiceArray1 = [
      '1) A piece of executable code that is passed as an argument to other code, which is expected to invoke (or "call back") that executable code at some convenient time.',
      '1) Choice 1',
      '1) Choice 1',
      '1) Choice 1',
      '1) Choice 1'
    ]

    var choiceArray2 = [
      '2) A function written with "call" in it.',
      '2) Choice 2',
      '2) Choice 2',
      '2) Choice 2',
      '2) Choice 2'
    ]

    var choiceArray3 = [
      '3) A function written to be used at a later time.',
      '3) Choice 3',
      '3) Choice 3',
      '3) Choice 3',
      '3) Choice 3'
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

    $('#set-input').on('click', function () {
      var inputSubmitted = $('#input-field').val()
      if (inputSubmitted === answerArray[roundCounter]) {
        $('#resultDiv > p').html('Correct! Good Job')
        score += 1
        $('#scoreDiv > p').html('Your score is ' + score)
      } else {
        $('#resultDiv > p').html('Sorry! Try again...')
        score -= 1
        $('#scoreDiv > p').html('Your score is ' + score)
      }
      $('#nextButton').show('slow/400/fast')
    })

    $('#nextButton').on('click', function () {
      console.log('Next button Clicked')
      console.log(roundCounter)
      roundCounter += 1
      if (roundCounter < totalRounds) {
        playGame()
      }
    })

    $('#resetButton').on('click', function () {
      console.log('Reset Button Clicked')
      $('#input-field').val('')
      $('#resultDiv > p').html('')
      score = 0
      $('#scoreDiv > p').html('Your score is ' + score)
    })
    displayQuestion()
  }
  playGame()
})

// Get rid of playGame, so can call displayQuestion at beginning
// Trying to get rid of over-incrementing loop (skip Q#3, etc)
