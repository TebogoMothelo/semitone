const JamBuddy = require('../semitone.js');

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
})

describe("jamBuddy", () => {
    let buddy;

        beforeAll(() => {
            buddy = new JamBuddy();     
    });

    it("countSemitones(), should return something", () =>{
        expect(buddy.countSemitones()).not.toBeNull();
    } )

    it("countSemitones(), should a number", () => {
        expect(buddy.countSemitones()).toMatch(/\d/)
    });
})

describe("jamBuddy", () => {
    let buddy;

        beforeAll(() => {
            buddy = new JamBuddy();     
    });

    it("checkAnswer(), should some value", () => {
        expect(buddy.checkAnswer()).toBeDefined();
    });

    // it("checkAnswer should return a boolean", () => {
    //     expect(buddy.checkAnswer()).toBeBoolean();

    // })
});

