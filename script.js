/* global $ */

$(document).ready(function () {
  // console.log('JS works')
  // console.log($('h1'))
  // console.log(question.q1)

  // Question bank
  // - object/hash of question numbers with choices and an answer
  // - loop through bank to cycle thru questions
  // - pass question to the printQuestion function

  function printQuestion () {
    var questionBank = {
      q1: {
        t: 'This is the question #1 text',
        c1: 'choice 1',
        c2: 'choice 2',
        c3: 'choice 3',
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

    // var question = {
    //   t: 'This is the text for the question',
    //   c1: 'choice 1',
    //   c2: 'choice 2',
    //   c3: 'choice 3',
    //   a: '1'
    // }

    $('.questionDiv > p').html(questionBank.q1.t)
    $('.choiceDiv p:eq(0)').html(questionBank.q1.c1)
    $('.choiceDiv p:eq(1)').html(questionBank.q1.c2)
    $('.choiceDiv p:eq(2)').html(questionBank.q1.c3)

    $('#set-input').on('click', function checkAnswer () {
      var inputSubmitted = $('#input-field').val()
      if (inputSubmitted === questionBank.q1.a) {
        $('.resultDiv > p').html('Correct! Good Job')
      } else {
        $('.resultDiv > p').html('Sorry! Try again...')
      }
    })
  }

  printQuestion()
})

/* TRIVIA GAME
TO DO

CORE
- question bank with multiple questions
- reset input screen to blank
- allow input submission with enter key (not clicking on button)
- score increments for correct answer, decrements for wrong answer

CSS & bootstrap

Deploy to Github

*Bonus:*
  * Add time-based scoring
  * Track scores across games (even if the page is reloaded)
  * Allow users to compete against each other on a high-score board.

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
*/
