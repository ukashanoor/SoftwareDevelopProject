import React from "react";
import { render, screen } from "@testing-library/react";
import { toBeInTheDocument } from "@testing-library/jest-dom/extend-expect";
import App from "../App";
import Login from "../scenes/loginPage/index"
import PostsWidget from "scenes/widgets/PostsWidget";
import { Provider } from "react-redux"; // Import Provider from react-redux
import configureStore from "redux-mock-store"; // Import configureStore from redux-mock-store
import { handlers } from './mockServiceWorker';
import { setupServer } from 'msw/node';


test("render when lek equal to Folk in unit testing ", () =>{
    render(<div> Folk </div>);
    expect(screen.getByText(/Folk/)).toBeInTheDocument();
});


const mockStore = configureStore([]);
test("renders PostsWidget component with 'Folk' name", () => {
    const store = mockStore({
      posts: [
        // Add sample posts data here if needed
      ],
      // Other necessary state properties
    });
  
    render(
      <Provider store={store}>
        <PostsWidget userId="123" isProfile={false} />
      </Provider>
    );
  
    expect(screen.getByText(/Folk/)).toBeInTheDocument();
  });




// Create a mock server
const server = setupServer(...handlers);

beforeAll(() => {
  // Start the mock server before running the tests
  server.listen();
});

afterEach(() => {
  // Reset the request handlers after each test
  server.resetHandlers();
});

afterAll(() => {
  // Close the mock server after all tests
  server.close();
});

test('renders PostsWidget component with mocked posts data', async () => {
  const store = mockStore({
    // Mock the necessary Redux state if needed
  });

  render(
    <Provider store={store}>
      <PostsWidget userId="123" isProfile={false} />
    </Provider>
  );

  // Assert the expected behavior based on the mocked data
  // For example, you can check if the rendered posts are present on the screen
  expect(await screen.findByText(/Folk/)).toBeInTheDocument();
});
