const assert =  require('chai').assert;
// const sayHello = require('../app').sayHello;
// const addNumber = require('../app').addNumber;
const app = require('../app');

//Result
sayHelloResult = app.sayHello();
addNumberResult = app.addNumber(5,5);

addValuesResult = app.addValues();


describe('App', function () {

    describe('GET /users/647df828b2377a22ff718198/friends', () => {
        it('returns a json response containing ', () => request(app)
            .get('/users/647df828b2377a22ff718198/friends')
            .set('Accept','application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                expect(response.body.shipping).toBe(400);
                expect(response.body.total).toBe(2400);
            }));
});

    describe('addValues', function(){
        it('app should return values', function(){
            assert.equal(addValuesResult, 'values');
        });
        it('addValues should return type string', function(){
            assert.typeOf(addValuesResult, 'string');
        });
    });

    describe('sayHello', function(){
        it('app should return hello', function(){
            //let result = app.sayHello();
            assert.equal(sayHelloResult, 'hello');
        });
        it('sayHello should return type string', function(){
            //let result =app.sayHello();
            assert.typeOf(sayHelloResult, 'string');
        });
    });

    describe('addNumber', function(){
        it('addNumber should return be above 5', function(){
            //let result = app.addNumber(5,5);
            assert.isAbove(addNumberResult,5);
        });
        it('addNumber should return type number', function(){
            //let result = app.addNumber(5,5);
            assert.typeOf(addNumberResult,'number');
        });
    })
    
});
 