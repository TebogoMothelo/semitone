class JamBuddy {
  constructor() {
    this.notes = [
      "A",
      ["A#", "Bb"],
      "B",
      "C",
      ["C#", "Db"],
      "D",
      ["D#", "Eb"],
      "E",
      "F",
      ["F#", "Gb"],
      "G",
      ["G#", "Ab"]
    ];

    this.selectedNotes = [];
    this.semitones;
    this.answer = document.getElementById("explanation");
    this.ar = [];
    this.streak = 0;
    this.guess;
    document.getElementById("streak").innerHTML = `Streak: ${this.streak}`;
  }

  selectNotes() {
    let note;
    let flatNotes = this.notes.map(function(val) {
      if (val.length == 2) {
        for (let i = 0; i == 0; i++) {
          val = val[Math.floor(Math.random() * val.length)];
        }
      }
      return val;
    });

    for (let i = 0; i <= 1; i++) {
      note = flatNotes[Math.floor(Math.random() * flatNotes.length)];
      this.selectedNotes.push(note);
    }
    return (document.getElementById(
      "chosen-notes"
    ).innerHTML = this.selectedNotes.slice(-2));
  }

  checkAnswer() {
    var first, second;

    this.guess = document.getElementById("answer").value;
    for (let i = 0; i < this.notes.length; i++) {
      if (
        this.notes[i][0] ===
          this.selectedNotes[this.selectedNotes.length - 2] ||
        this.notes[i][1] === this.selectedNotes[this.selectedNotes.length - 2]
      ) {
        var first = i;
      }
      if (
        this.notes[i][0] ===
          this.selectedNotes[this.selectedNotes.length - 1] ||
        this.notes[i][1] === this.selectedNotes[this.selectedNotes.length - 1]
      ) {
        var second = i;
      }

      if (first > second) {
        this.semitones = first - second;
      } else {
        this.semitones = second - first;
      }
    }
    if (this.guess != this.semitones) {
      document.getElementById("win-lose").innerHTML = "Wrong answer! Try again";
    } else {
      (document.getElementById(
        "win-lose"
      ).innerHTML = `You got it right .Well Done!`),
        this.streak++;
    }
    return (document.getElementById(
      "streak"
    ).innerHTML = `Streak: ${this.streak}`);
  }

  revealNotesIfRight() {
    let arr1 = document.getElementById("chosen-notes").innerHTML.split(",");
    for (let k = 0; k < this.notes.length; k++) {
      if (arr1[0] == this.notes[k][0]) {
        this.ar.push(this.notes[k][0].fontcolor("red").fontsize(5));
      } else if (arr1[1] == this.notes[k][0]) {
        this.ar.push(this.notes[k][0].fontcolor("red").fontsize(5));
      } else if (arr1[1] == this.notes[k][1]) {
        this.ar.push(this.notes[k][1].fontcolor("red").fontsize(5));
      } else if (arr1[0] == this.notes[k][1]) {
        this.ar.push(this.notes[k][1].fontcolor("red").fontsize(5));
      } else if (arr1[0] == this.notes[k]) {
        this.ar.push(this.notes[k].fontcolor("red").fontsize(5));
      } else if (arr1[1] == this.notes[k]) {
        this.ar.push(this.notes[k].fontcolor("red").fontsize(5));
      } else {
        this.ar.push(this.notes[k]);
      }
    }
    if (this.guess != this.semitones) {
      document.getElementById("explanation").innerHTML = "";
    } else {
      document.getElementById("explanation").innerHTML = this.ar;
    }
  }

  revealAnswer() {
    this.printsFinalAnswer();
    return (document.getElementById(
      "final-answer"
    ).innerHTML = `The correct answer is ${this.semitones}`);
  }
  revealNotes() {
    this.revealNotesIfRight();
    return (document.getElementById("final-answer").innerHTML = this.ar);
  }

  printsFinalAnswer() {
    var first, second;
    for (let i = 0; i < this.notes.length; i++) {
      if (
        this.notes[i][0] ===
          this.selectedNotes[this.selectedNotes.length - 2] ||
        this.notes[i][1] === this.selectedNotes[this.selectedNotes.length - 2]
      ) {
        var first = i;
      }
      if (
        this.notes[i][0] ===
          this.selectedNotes[this.selectedNotes.length - 1] ||
        this.notes[i][1] === this.selectedNotes[this.selectedNotes.length - 1]
      ) {
        var second = i;
      }

      if (first > second) {
        this.semitones = first - second;
      } else {
        this.semitones = second - first;
      }
    }
    if (this.guess != this.semitones) {
      document.getElementById("final-answer").innerHTML = "";
    } else if ((this.guess = this.semitones)) {
      document.getElementById(
        "final-answer"
      ).innerHTML = `The correct answer is ${this.semitones}`;
    }
  }

  removeAnswer() {
    document.getElementById("explanation").style.display = "none";
    document.getElementById("final-answer").style.display = "none";
    document.getElementById("win-lose").style.display = "none";
  }
}

var buddy = new JamBuddy();
module.exports = JamBuddy;
