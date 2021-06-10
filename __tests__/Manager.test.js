const Manager = require('../lib/Manager.js');

test('Can create a Manager instance.', () => {
    const e = new Manager;
    expect(typeof(e)).toBe('object');
});

test('Can create a Manager instance by confirming the Role.', () => {
    const e = new Manager;
    expect(e.getRole()).toBe('Manager');
});

test('Can create a Manager that has an Office Number.', () => {
    const e = new Manager("Bob", 123, "robertgeorge2@gmail.com", 4804);
    expect(e.getOfficeNumber()).toBe(4804);
});