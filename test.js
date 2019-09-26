function x (y) {

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
for (let k = 0; k < this.notes.length; k++) {
      if(this.notes[k][0] == y)
      console.log(this.notes[k][0])
    }


}
x("C#");