function Question(arrr){
    this.text = arrr[0];
    // this.choices = (arrr[1]).sort( function() { return 0.5 - Math.random() });
    this.choices = arrr[1];
    this.answer = arrr[2];
}

Question.prototype.correctAnswer = function(choice){
    return choice === this.answer;
}
