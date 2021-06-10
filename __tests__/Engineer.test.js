const Engineer = require('../lib/Engineer.js');

test('Can create a Engineer instance.', () => {
    const e = new Engineer;
    expect(typeof(e)).toBe('object');
});

test('Can create a Engineer instance by confirming the Role.', () => {
    const e = new Engineer;
    expect(e.getRole()).toBe('Engineer');
});

test('Can create a Engineer that has a GitHub username.', () => {
    const e = new Engineer("Bob", 123, "robertgeorge2@gmail.com", "SPD-RCR");
    expect(e.getGitHub().toLowerCase()).toBe("spd-rcr");
});