// mockServiceWorker.js
import { rest } from 'msw';

// Mock the GET /posts endpoint
const mockGetPosts = rest.get('http://localhost:3001/posts', (req, res, ctx) => {
  const data = [
    // Mocked posts data
  ];
  return res(ctx.json(data));
});

// Mock the GET /posts/{userId}/posts endpoint
const mockGetUserPosts = rest.get(
  'http://localhost:3001/posts/:userId/posts',
  (req, res, ctx) => {
    const { userId } = req.params;
    const data = [
      // Mocked user posts data
    ];
    return res(ctx.json(data));
  }
);

// Export the mocked handlers
export const handlers = [mockGetPosts, mockGetUserPosts];
