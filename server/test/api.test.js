import chai from "chai";
const expect = chai.expect;
import supertest from "supertest";
import app from "../index.js";
const request = supertest(app);

let token = "";

describe("POST /api/login and register", () => {
  it("should return a valid JWT token upon successful login", async () => {
    const credentials = {
      email: "ukashanoor@gmail.com",
      password: "1234",
    };

    const response = await request.post("/auth/login").send(credentials);

    expect(response.status).to.equal(200);
    expect(response.body).to.have.property("token");
    expect(response.body.token).to.be.a("string");
    token = response.body.token;
  });

    it("should return an error for invalid credentials", async () => {
      const credentials = {
        email: "ukashanoor@gmail.com",
        password: "wrongpassword",
      };

      const response = await request.post("/auth/login").send(credentials);

      expect(response.status).to.equal(400);
      expect(response.body).to.have.property("msg");
      expect(response.body.msg).to.equal("Invalid credentials. ");
    });

    // it("should test register API", async () => {
    //   const response = await request
    //   .post('/auth/register')
    //   .send({
    //     firstName: 'John',
    //     lastName: 'Doe',
    //     email: 'johndoe@example.com',
    //     password: 'password',
    //     friends: [],
    //     location: 'New York',
    //     occupation: 'Engineer'
    //   });
    //   expect(response.status).to.equal(201);
    // });
});

// describe("GET /api/users", () => {
//   it("should return a list of users", async () => {
//     const response = await request
//       .get("/users/6498726982cda654ceed598a")
//       .set("Authorization", `Bearer ${token}`);
//     expect(response.status).to.equal(200);
//     expect(response.body).to.have.property("_id");
//   });
// });

// describe("GET /api/friends", () => {
//   it("should return a list of user's friends", async () => {
//     const response = await request
//       .get("/users/6498726982cda654ceed598a/friends")
//       .set("Authorization", `Bearer ${token}`);
//     expect(response.status).to.equal(200);
//     expect(response.body).to.be.an('array');
//   });
// });

// describe("GET /api/posts", () => {
//   it("should return a list of posts", async () => {
//     const response = await request
//       .get("/posts")
//       .set("Authorization", `Bearer ${token}`);
//     expect(response.status).to.equal(200);
//     expect(response.body).to.be.an('array');
//   });
// });

// describe("GET /api/posts/:userId/posts", () => {
//   it("should return a list of user's posts", async () => {
//     const response = await request
//       .get("/posts/6498726982cda654ceed598a/posts")
//       .set("Authorization", `Bearer ${token}`);
//     expect(response.status).to.equal(200);
//     expect(response.body).to.be.an('array');
//   });
// });

describe('PATCH /:id/like', () => {
  it('should return a 200 status code and increment the like count', async () => {
    const postId = '6498758ccb06dd290e9d14a9'; 
    const userId = '6498726982cda654ceed598a';
   
    const response = await request.patch(`/posts/${postId}/like`)
      .set('Authorization', `Bearer ${token}`)
      .send({ userId }); 

    expect(response.status).to.equal(200);
    
  
    expect(response.body).to.have.property('likes');
    expect(response.body.likes).to.be.a('object');
  });

  it('should return a 401 status code for unauthorized requests', async () => {
    const postId = '6498758ccb06dd290e9d14a9'; 
    const userId = '6498726982cda654ceed598a';

    const response = await request.patch(`/posts/${postId}/like`)
    .set('Authorization', `Bearer `)
    .send({ userId });
    
    expect(response.status).to.equal(401);
  });
});

describe("GET /api/donations", () => {
  it("should return a list of donations", async () => {
    const response = await request
      .get("/donations")
      .set("Authorization", `Bearer ${token}`);
    expect(response.status).to.equal(200);
    expect(response.body).to.be.an('array');
  });
});

describe("GET /api/events", () => {
  it("should return a list of events", async () => {
    const response = await request
      .get("/events")
      .set("Authorization", `Bearer ${token}`);
    expect(response.status).to.equal(200);
    expect(response.body).to.be.an('array');
  });
});

describe("GET /api/events", () => {
  it("should return a list of events", async () => {
    let body = {
      userId: "6477a55739237ceca38a9a5e",
      donorFullName: "Ukasha Noor 1",
      donorLocation: "Coventry",
      donorEmail: "ukasha@example.com",
      donationCategory: "Food and Beverages",
      donationType: "Sponsorship",
      donationDescription: "Willing to donate",
      pickupRequired: false,
      pickupDate: "06/23/2023",
      additionalDetails: "additionalDetails",
    };
    const response = await request
      .post("/donations/add")
      .set("Authorization", `Bearer ${token}`)
      .send(body);
    expect(response.status).to.equal(201);
    // expect(response.body).to.be.an("array");
  });
});
