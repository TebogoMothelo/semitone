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
  }

  selectNotes() {
    let x;
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
    ).innerHTML = this.selectedNotes);
  }

  checkAnswer() {
    var guess = document.getElementById("answer").value;
    let first = this.notes.indexOf(this.selectedNotes[0]);
    let second = this.notes.indexOf(this.selectedNotes[1]);

    if (first > second) {
      this.semitones = first - second;
    } else {
      this.semitones = second - first;
    }

    if (guess != this.semitones) {
      return (document.getElementById("win-lose").innerHTML =
        "Wrong answer! Try again");
    } else {
      return (document.getElementById("win-lose").innerHTML =
        "You got it right .Well Done!");
    }
  }
}

var buddy = new JamBuddy();
module.exports = JamBuddy;
