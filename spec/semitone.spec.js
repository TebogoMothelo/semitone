const JamBuddy = require("../semitone.js");
const jsdom = require("jsdom");
const fs = require("fs")
// const dom = require("../index.html");
const index = fs.readFileSync('../index.html', 'utf-8')
const document = (new JSDOM(index)).window;
global.document = document

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

  it("checkAnswer(), should return a string", ()=>{
      expect(buddy.checkAnswer(1)).toEqual(jasmine.any(String))
  });


});
