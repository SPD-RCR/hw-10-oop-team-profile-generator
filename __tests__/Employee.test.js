const { hasUncaughtExceptionCaptureCallback } = require('process');
const Employee = require('../lib/Employee.js');

test('Can create an Employee instance.', () => {
    const e = new Employee;
    expect(typeof(e)).toBe('object');
})

test('Can create an Employee instance.', () => {
    const e = new Employee;
    expect(e.getRole()).toBe('Employee');
})