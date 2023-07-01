const assert =  require('chai').assert;
const app = require('../app');

// const sayHello = require('../app').sayHello;
// const addNumber = require('../app').addNumber;

//Result
// sayHelloResult = app.sayHello();
// addNumberResult = app.addNumber(5,5);

addValuesResult = app.addValues();

describe('Post Unit Tests', function () {
  
  describe("Save User functionality", function () {
    it("should successfully add a user if the number of users in the DB with the same profiled is zero", async function () {
      const userId = 1;
      const firstName = "Akshay";
      const lastName = "Akshay";
      const dob = "2020-12-12";
      const experience = [{ years: 2, organizationName: "ABCD" }];
      const returnedUser = await createPost({
        userId,
      firstName,
      lastName,
      location,
      description,
      userPicturePath,
      picturePath,
      filePath,
      audioPath,
      likes: {},
      comments: [],
      });
      expect(returnedUser.firstName).to.equal(firstName);
      
    //   experience.map((exp, index) => {
    //     // expect(returnedUser.experience[index].years).to.equal(exp.years);
    //     // expect(returnedUser.experience[index].organizationName).to.equal(exp.organizationName);  
    //   })
    });
    it("should throw an error if the number of users with the same profileId is not zero", async function () {});
  });
});

describe('App', function () {
    
    describe('addValues', function(){
        it('app should return values', function(){
            assert.equal(addValuesResult, 'values');
        });
        it('addValues should return type string', function(){
            assert.typeOf(addValuesResult, 'string');
        });
    });

    // describe('sayHello', function(){
    //     it('app should return hello', function(){
    //         //let result = app.sayHello();
    //         assert.equal(sayHelloResult, 'hello');
    //     });
    //     it('sayHello should return type string', function(){
    //         //let result =app.sayHello();
    //         assert.typeOf(sayHelloResult, 'string');
    //     });
    // });

    // describe('addNumber', function(){
    //     it('addNumber should return be above 5', function(){
    //         //let result = app.addNumber(5,5);
    //         assert.isAbove(addNumberResult,5);
    //     });
    //     it('addNumber should return type number', function(){
    //         //let result = app.addNumber(5,5);
    //         assert.typeOf(addNumberResult,'number');
    //     });
    // })
    
});
 