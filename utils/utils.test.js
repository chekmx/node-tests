const expect = require('expect');

const utils = require('./utils');


describe('Utils', ( )=>{

    describe('add', () => {
        it('should add two numbers', () => {
            var res = utils.add(33, 11);
            expect(res)
                .toBe(44)
                .toBeA('number');
        });
        
        it('should async add two numbers', (done) => {
            utils.asyncAdd(4, 3, (sum) => {
                expect(sum).toBe(7).toBeA('number'); 
                done();
            });
        });
    })

    it('should square a numbers', () => {
        var res = utils.square(3);
        expect(res)
            .toBe(9)
            .toBeA('number');
    });
    
    it('should async square a number', (done) => {
        utils.asyncSquare(3, (res) => {
            expect(res).toBe(9).toBeA('number');
            done();
        })
    });
});


// it('should expect somevalues', () => {
//     expect(12).toNotBe(11);
//     expect({name: 'Andrew'}).toEqual({name: 'Andrew'});
//     expect([2,3,4]).toInclude(2);
//     expect([2,3,4]).toExclude(1);
//     expect ({
//         name: 'Andrew',
//         age: 25,
//         location: 'Wetzikon'
//     }).toInclude({ age: 25});
// });

it('should verify first and last name are set', () => {
    var user = {
        names: 'Stephen Richards',
        age: 25,
        location: 'Wetzikon'};
    var res = utils.setName(user, user.names);
    expect(res).toBe(user);
    expect(res).toInclude({ 
        firstName: 'Stephen', 
        lastName: 'Richards'
    });
});