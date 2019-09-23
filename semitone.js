class JamBuddy {
  constructor() {
    this.notes = [
      "A",
      "A#",
      "B",
      "C",
      "C#",
      "D",
      "D#",
      "E",
      "F",
      "F#",
      "G",
      "G#",
      "Ab",
      "Bb",
      "Bb",
      "Db",
      "Db",
      "Db",
      "Eb",
      "Eb",
      "Gb",
      "Gb",
      "Ab",
      "Ab"
    ];
    this.flatNotes = [
      "Ab",
      "Bb",
      "Bb",
      "Db",
      "Db",
      "Db",
      "Eb",
      "Eb",
      "Gb",
      "Gb",
      "Ab",
      "Ab"
    ];
    this.selectedNotes = [];
    this.semitones;
  }

  selectNotes() {
    let note;
    for (let i = 0; i <= 1; i++) {
      note = this.notes[Math.floor(Math.random() * this.notes.length)];
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

    if (this.notes.indexOf(first) == this.flatNotes.indexOf(second)) {
      this.semitones = 0;
    }

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
