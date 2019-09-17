
 module.exports = class JamBuddy {
    constructor () {
        this.notes = ["A", "A#", "B", "C", "C#", "D", "D#","E", "F", "F#", "G","G#"];
        this.selectedNotes = [];
        this.semitones;
    }

    selectNotes(){
        let note;
        for(let i = 0; i <= 1; i++){
            note = this.notes[Math.floor(Math.random()* this.notes.length)];
                this.selectedNotes.push(note);         
        }
         return document.getElementById("chosen-notes").innerHTML = this.selectedNotes;
    }
   
    checkAnswer(){

        var guess = document.getElementById("answer").value
        let first = this.notes.indexOf(this.selectedNotes[0]);
        let second = this.notes.indexOf(this.selectedNotes[1]);

        if(first > second){
            this.semitones = first - second;
        } else {
            this.semitones = second - first;
        }

        if(guess != this.semitones) {
            return document.getElementById("win-lose").innerHTML="Wrong answer! Try again";
        } else {
       
        return document.getElementById("win-lose").innerHTML= "You got it right .Well Done!";
    }
}
}


// var buddy = new JamBuddy();
// console.log(buddy.selectNotes());
// // console.log(buddy.countSemitones());
// console.log(buddy.checkAnswer(7));
