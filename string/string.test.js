const {
    uppercase,
    lowercase
} = require("./string");

describe("Testing the string module", () => {

    test("Should uppercase a string input", () => {
        //const result = uppercase("bob"); - added to line below instead
        expect(uppercase("bob")).toBe("BOB");
    });

    test("Should lowercase a string input", () => {
        expect(lowercase("FULL SaiL")).toBe("full sail");
    })
});