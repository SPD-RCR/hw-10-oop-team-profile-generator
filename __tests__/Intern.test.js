const Intern = require('../lib/Intern.js');

test('Can create a Intern instance.', () => {
    const e = new Intern;
    expect(typeof(e)).toBe('object');
});

test('Can create a Intern instance by confirming the Role.', () => {
    const e = new Intern;
    expect(e.getRole()).toBe('Intern');
});

test('Can create a Intern that is attending a School.', () => {
    const i = new Intern("Bob", 123, "robertgeorge2@gmail.com", "UNC");
    expect(i.getSchool()).toBe("UNC");
});