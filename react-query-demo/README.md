1. Advanced Data Handling with React Query
mandatory
Objective: Implement advanced data fetching and management in a React application using React Query, focusing on handling API interactions efficiently and improving user interface responsiveness.

Task Description:
This task involves integrating React Query into a React project to fetch, cache, and update data from a public API. You’ll build a component that handles these data operations smoothly, demonstrating the capabilities of React Query in optimizing data interactions in React applications.

API Details:
API Usage:
For this task, use the JSONPlaceholder API to fetch posts. This simple, free online REST API is perfect for practice and demonstration purposes.
API Endpoint for fetching posts:
    https://jsonplaceholder.typicode.com/posts
Step 1: Set Up React Query in the Project
Project Setup:

Ensure your React project is prepared for fetching data:
npm create vite@latest react-query-demo -- --template react
cd react-query-demo
npm install react-query
React Query Integration:

Set up React Query by integrating it into your application’s main component (e.g., App.js) using the QueryClient and QueryClientProvider.
  import { QueryClient, QueryClientProvider } from 'react-query';

  const queryClient = new QueryClient();

  function App() {
    return (
      <QueryClientProvider client={queryClient}>
        <PostsComponent />
      </QueryClientProvider>
    );
  }
Step 2: Create a Component to Fetch Data
Data Fetching Component:
Develop a component named PostsComponent that uses React Query to fetch data from the JSONPlaceholder API.
Use the useQuery hook to manage the fetching process, handle loading states, error handling, and data caching.
Step 3: Implement Features for Caching and Updating Data
Advanced React Query Features:
Demonstrate how React Query handles caching by navigating away and returning to the PostsComponent, observing that data loads from cache if recently fetched.
Implement a button or interaction that triggers a refetch of the data to show how React Query can update data on demand.
Step 4: Testing and Evaluation
Ensure Robust Functionality:
Test the application to ensure that data fetching, caching, and updating work as expected. Use tools like React Developer Tools to inspect the React Query cache and watch how it behaves across component mounts and unmounts.
Check the network requests in browser dev tools to confirm that caching effectively reduces the number of API calls.
Repo:

GitHub repository: alx-fe-reactjs
Directory: react-query-demo
