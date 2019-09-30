const jsdom = require("jsdom");
const fs = require("fs");
const index = fs.readFileSync("./index.html", "utf-8");
const { JSDOM } = jsdom;

const { document } = new JSDOM(index).window;
global.document = document;
const JamBuddy = require("../semitone2.js");

describe("jamBuddy", () => {
  let buddy;

  beforeAll(() => {
    buddy = new JamBuddy();
  });

  it("selectNotes(), should return a value that is defined", () => {
    expect(buddy.selectNotes()).toBeDefined();
  });

  it("selectNotes(), should return an array", () => {
    expect(buddy.selectNotes()).toEqual(jasmine.any(Array));
  });

  it("checkAnswer(), should some value", () => {
    expect(buddy.checkAnswer()).not.toBeNull();
  });

  it("checkAnswer(), should return a string", () => {
    expect(buddy.checkAnswer(1)).toEqual(jasmine.any(String));
  });

  it("should print the result of selectNotes() in a paragraph element on the gui", () => {
    let result = buddy.selectNotes();
    expect(document.getElementById("chosen-notes").innerHTML).toEqual(
      (document.getElementById("chosen-notes").innerHTML = result.join(","))
    );
  });

  it("should have an h1 that says guess the semitones", () => {
    expect(document.getElementById("name").innerHTML).toEqual(
      " Guess the semitones"
    );
  });

  it("revealAnswer(), should return a string with the correct answer", () => {
    let result = buddy.revealAnswer(buddy.printsFinalAnswer());

    expect(result).toEqual(jasmine.any(String));
  });

  it("revealNotes(), should return the array of notes with the selected notes highlighted", () => {
    buddy.revealNotesIfRight()
    let result = buddy.revealNotes();
    expect(result).toEqual(jasmine.any(Array));
  });
});
