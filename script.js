/* global $ */

$(document).ready(function () {
  // console.log('JS works')
  // console.log($('h1'))
  // console.log(question.q1)

  function printQuestion () {
    var question = {
      q1: 'This is the text for q1',
      c1: 'choice 1',
      c2: 'choice 2',
      c3: 'choice 3',
      a: '1'
    }
    // console.log(question.q1)
    $('.questionDiv > p').html(question.q1)
    $('.choiceDiv p:eq(0)').html(question.c1)
    $('.choiceDiv p:eq(1)').html(question.c2)
    $('.choiceDiv p:eq(2)').html(question.c3)

    $('#set-input').on('click', function checkAnswer () {
      // console.log("button clicked");
      var inputSubmitted = $('#input-field').val()
      if (inputSubmitted === question.a) {
        // console.log('You chose correctly')
        $('.resultDiv > p').html('Correct! Good Job')
      } else {
        $('.resultDiv > p').html('Sorry! Try again...')
      }
      // console.log(inputSubmitted)
    })
  }

  printQuestion()
})

/* scrap
Question properties
- question has multiple possibleAnswers (1-3)
- question has an single correctAnswer (1-3)

Ask player for input
If input matches AnswerKey then show "correct" and go to next question

Optional
score
random questions
add questions

CSS
- div with blank card
- bootstrap

Deploy
- Github
*/
