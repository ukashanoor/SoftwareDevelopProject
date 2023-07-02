// mockServiceWorker.js
import { rest } from 'msw';

// Mock the GET /posts endpoint
const mockGetPosts = rest.get('http://localhost:3001/posts', (req, res, ctx) => {
  const data = [
    {
      "_id": "64987aa8b4c479132a32874e",
      "userId": "6498785cb4c479132a328740",
      "firstName": "Rutvik",
      "lastName": "Patel",
      "location": "India",
      "description": "Lend a hand with your donation",
      "filePath": "Donation_ppt.pptx",
      "userPicturePath": "DP3.jpg",
      "likes": {
          "649876bdb4c479132a3286f9": true
      },
      "comments": [],
      "createdAt": "2023-06-25T17:34:32.552Z",
      "updatedAt": "2023-06-25T21:57:40.924Z",
      "__v": 0
  }, {
      "_id": "6498780cb4c479132a328723",
      "userId": "649876bdb4c479132a3286f9",
      "firstName": "Folk",
      "lastName": "Jarmekon",
      "location": "Birmingham",
      "description": "Park cleaning was fun",
      "picturePath": "Post4.JPG",
      "userPicturePath": "DP1.jpg",
      "likes": {
          "6498726deb4c27f4cc278089": true
      },
      "comments": [],
      "createdAt": "2023-06-25T17:23:24.514Z",
      "updatedAt": "2023-06-25T17:23:45.200Z",
      "__v": 0
  }, {
      "_id": "6498778db4c479132a328714",
      "userId": "649876f8b4c479132a328706",
      "firstName": "Naval",
      "lastName": "Chawan",
      "location": "Coventry",
      "description": "Volunteered in a Donation event",
      "picturePath": "Post3.jpg",
      "userPicturePath": "DP2.jpg",
      "likes": {
          "6498726deb4c27f4cc278089": true
      },
      "comments": [],
      "createdAt": "2023-06-25T17:21:17.805Z",
      "updatedAt": "2023-06-25T17:23:46.972Z",
      "__v": 0
  }, {
      "_id": "6498758ccb06dd290e9d14a9",
      "userId": "6498726deb4c27f4cc278089",
      "firstName": "Ukasha",
      "lastName": "Noor",
      "location": "Coventry",
      "description": "I took part in donating PPE kits",
      "picturePath": "Post2.jpg",
      "userPicturePath": "CG4B2591.JPG",
      "likes": {},
      "comments": [],
      "createdAt": "2023-06-25T17:12:44.997Z",
      "updatedAt": "2023-06-25T17:12:44.997Z",
      "__v": 0
  }, {
      "_id": "649872dceb4c27f4cc278097",
      "userId": "6498726deb4c27f4cc278089",
      "firstName": "Ukasha",
      "lastName": "Noor",
      "location": "Coventry",
      "description": "Donating Clothes",
      "picturePath": "Post1.jpg",
      "userPicturePath": "CG4B2591.JPG",
      "likes": {},
      "comments": [],
      "createdAt": "2023-06-25T17:01:16.026Z",
      "updatedAt": "2023-06-25T17:01:16.026Z",
      "__v": 0
  }
  
  ];
  return res(ctx.json(data));
});

// Mock the GET /posts/{userId}/posts endpoint
const mockGetUserPosts = rest.get(
  'http://localhost:3001/posts/:userId/posts',
  (req, res, ctx) => {
    const { userId } = req.params;
    const data = [
      {
        "_id": "64987aa8b4c479132a32874e",
        "userId": "6498785cb4c479132a328740",
        "firstName": "Rutvik",
        "lastName": "Patel",
        "location": "India",
        "description": "Lend a hand with your donation",
        "filePath": "Donation_ppt.pptx",
        "userPicturePath": "DP3.jpg",
        "likes": {
            "649876bdb4c479132a3286f9": true
        },
        "comments": [],
        "createdAt": "2023-06-25T17:34:32.552Z",
        "updatedAt": "2023-06-25T21:57:40.924Z",
        "__v": 0
    }, {
        "_id": "6498780cb4c479132a328723",
        "userId": "649876bdb4c479132a3286f9",
        "firstName": "Folk",
        "lastName": "Jarmekon",
        "location": "Birmingham",
        "description": "Park cleaning was fun",
        "picturePath": "Post4.JPG",
        "userPicturePath": "DP1.jpg",
        "likes": {
            "6498726deb4c27f4cc278089": true
        },
        "comments": [],
        "createdAt": "2023-06-25T17:23:24.514Z",
        "updatedAt": "2023-06-25T17:23:45.200Z",
        "__v": 0
    }, {
        "_id": "6498778db4c479132a328714",
        "userId": "649876f8b4c479132a328706",
        "firstName": "Naval",
        "lastName": "Chawan",
        "location": "Coventry",
        "description": "Volunteered in a Donation event",
        "picturePath": "Post3.jpg",
        "userPicturePath": "DP2.jpg",
        "likes": {
            "6498726deb4c27f4cc278089": true
        },
        "comments": [],
        "createdAt": "2023-06-25T17:21:17.805Z",
        "updatedAt": "2023-06-25T17:23:46.972Z",
        "__v": 0
    }, {
        "_id": "6498758ccb06dd290e9d14a9",
        "userId": "6498726deb4c27f4cc278089",
        "firstName": "Ukasha",
        "lastName": "Noor",
        "location": "Coventry",
        "description": "I took part in donating PPE kits",
        "picturePath": "Post2.jpg",
        "userPicturePath": "CG4B2591.JPG",
        "likes": {},
        "comments": [],
        "createdAt": "2023-06-25T17:12:44.997Z",
        "updatedAt": "2023-06-25T17:12:44.997Z",
        "__v": 0
    }, {
        "_id": "649872dceb4c27f4cc278097",
        "userId": "6498726deb4c27f4cc278089",
        "firstName": "Ukasha",
        "lastName": "Noor",
        "location": "Coventry",
        "description": "Donating Clothes",
        "picturePath": "Post1.jpg",
        "userPicturePath": "CG4B2591.JPG",
        "likes": {},
        "comments": [],
        "createdAt": "2023-06-25T17:01:16.026Z",
        "updatedAt": "2023-06-25T17:01:16.026Z",
        "__v": 0
    }
    
    ];
    return res(ctx.json(data));
  }
);

// Export the mocked handlers
export const handlers = [mockGetPosts, mockGetUserPosts];
