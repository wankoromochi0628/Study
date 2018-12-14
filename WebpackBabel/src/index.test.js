const {createGroup} = require('./index');

test('length test', () => {

    let array = [1, 2, 3, 4, 5, 6, 7, 8];
    expect(createGroup(array).length).toBe(4);
});
