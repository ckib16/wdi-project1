/* global $ */

$(document).ready(function () {
  // - loop through nested object to cycle thru questions
  // -- on next button (when clicked)...
  // -- increment to next question

  function playGame () {
    $('#nextButton').hide('slow/400/fast')

    var score = 0
    $('#scoreDiv > p').html('Your score is ' + score)

    var questionBank = {
      q1: {
        t: 'What is the definition of a "callback"?',
        c1: '1) A piece of executable code that is passed as an argument to other code, which is expected to invoke (or "call back") that executable code at some convenient time.',
        c2: '2) A function written with "call" in it.',
        c3: '3) A function written to be used at a later time.',
        a: '1'
      },
      q2: {
        t: 'This is the question #2 text',
        c1: 'choice 1',
        c2: 'choice 2',
        c3: 'choice 3',
        a: '2'
      },
      q3: {
        t: 'This is the question #3 text',
        c1: 'choice 1',
        c2: 'choice 2',
        c3: 'choice 3',
        a: '3'
      }
    }

    for (key in questionBank) {
      console.log(key) // q1
      console.log(questionBank[key].t)
      console.log(questionBank[key].c1)
      console.log(questionBank[key].c2)
      console.log(questionBank[key].c3)
    }

    $('#resetButton').on('click', function () {
      console.log('Reset Button Clicked')
      $('#input-field').val('')
      $('#resultDiv > p').html('')
      score = 0
      $('#scoreDiv > p').html('Your score is ' + score)
      playGame()
    })

    $('#questionDiv > p').html(questionBank.q1.t)
    $('#choiceDiv p:eq(0)').html(questionBank.q1.c1)
    $('#choiceDiv p:eq(1)').html(questionBank.q1.c2)
    $('#choiceDiv p:eq(2)').html(questionBank.q1.c3)

    $('#set-input').on('click', function checkAnswer () {
      var inputSubmitted = $('#input-field').val()
      if (inputSubmitted === questionBank.q1.a) {
        $('#resultDiv > p').html('Correct! Good Job')
        score += 1
        $('#scoreDiv > p').html('Your score is ' + score)
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
