function Question(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.corrrect = correct;
}

Question.prototype.displayQuestion = function () {
    console.log();
    
        
    }
    

var q1 = new Question('huhu', ['y', 'n'], 0);
var q2 = new Question('hihi', ['a', 'b', 'c'], 1);
var q3 = new Question('haha', ['y', 'n'], 0);

Question.q1.displayQuestion();