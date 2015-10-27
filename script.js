/* global $ */

$(document).ready(function () {
  // - loop through bank to cycle thru questions
  // -- on next button (when clicked)...
  // -- increment to next question

  function playGame () {
    $('#nextButton').hide('slow/400/fast')

    var score = 0
    $('.scoreDiv > p').html('Your score is ' + score)
        
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

    $('#resetButton').on('click', function () {
      console.log('Reset Button Clicked')
      $('#input-field').val('')
      $('.resultDiv > p').html('')
      score = 0
      $('.scoreDiv > p').html('Your score is ' + score)
      playGame()
    })

    $('.questionDiv > p').html(questionBank.q1.t)
    $('.choiceDiv p:eq(0)').html(questionBank.q1.c1)
    $('.choiceDiv p:eq(1)').html(questionBank.q1.c2)
    $('.choiceDiv p:eq(2)').html(questionBank.q1.c3)

    $('#set-input').on('click', function checkAnswer () {
      var inputSubmitted = $('#input-field').val()
      if (inputSubmitted === questionBank.q1.a) {
        $('.resultDiv > p').html('Correct! Good Job')
        score += 1
        $('.scoreDiv > p').html('Your score is ' + score)
      } else {
        $('.resultDiv > p').html('Sorry! Try again...')
        score -= 1
        $('.scoreDiv > p').html('Your score is ' + score)
      }
      $('#nextButton').show('slow/400/fast')
      $('#nextButton').on('click', function () {
        console.log('Next button Clicked')
      })
    })
  }
  playGame()
})

/* TRIVIA GAME TO DO

Deliverables
[x] 5 user stories
[x] hosted on GH Pages
[ ] HTML/CSS validated
[x] lots of commits
[ ] readme with explanations of the technologies used, the approach taken, installation instructions, unsolved problems, etc

CORE
- allow input submission with enter key (not clicking on button)
- actual questions in bank

CSS & bootstrap

Deploy to Github

*Bonus:*
  * Allow users to compete against each other on a high-score board.
  * Add time-based scoring
  * Track scores across games (even if the page is reloaded)

Optional
  randomize questions
  user can add questions

-------------------------
DONE
Question properties
- question has multiple possibleAnswers (1-3)
- question has an single correctAnswer (1-3)
Ask player for input
If input matches AnswerKey then show "correct" and go to next question
- reset input screen to blank
- score increments for correct answer, decrements for wrong answer
*/
