/* global $ */

$(document).ready(function () {
  // - loop through nested object to cycle thru questions
  // -- on next button (when clicked)...
  // -- increment to next question

  function playGame () {
    $('#nextButton').hide('slow/400/fast')

    var score = 0
    $('#scoreDiv > p').html('Your score is ' + score)

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

    // $('#nextButton').on('click', function () {
    //   // console.log(myArray[arrayIndex])
    //   console.log($('#questionDiv > p').html(questionBank['q' + arrayIndex].t))
    //   if (arrayIndex === myArray.length) {
    //     console.log("You're done!")
    //     return true
    //   }
    //   arrayIndex = arrayIndex + 1
    // })

    var roundCounter = 0

    $('#resetButton').on('click', function () {
      console.log('Reset Button Clicked')
      $('#input-field').val('')
      $('#resultDiv > p').html('')
      score = 0
      $('#scoreDiv > p').html('Your score is ' + score)
      playGame()
    })

    $('#questionDiv > p').html(questionArray[roundCounter])
    $('#choiceDiv p:eq(0)').html(choiceArray1[roundCounter])
    $('#choiceDiv p:eq(1)').html(choiceArray2[roundCounter])
    $('#choiceDiv p:eq(2)').html(choiceArray3[roundCounter])

    $('#set-input').on('click', function checkAnswer () {
      var inputSubmitted = $('#input-field').val()
      if (inputSubmitted === answerArray[roundCounter]) {
        $('#resultDiv > p').html('Correct! Good Job')
        score += 1
        $('#scoreDiv > p').html('Your score is ' + score)
        roundCounter += 1
      } else {
        $('#resultDiv > p').html('Sorry! Try again...')
        score -= 1
        $('#scoreDiv > p').html('Your score is ' + score)
      }
      $('#nextButton').show('slow/400/fast')
      $('#nextButton').on('click', function () {
        console.log('Next button Clicked')
      })
    })
  }
  playGame()
})
