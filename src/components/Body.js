import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Browse from './Browse';
import Login from './Login';
import MovieDetail from './MovieDetail'; // Movie detail page

const appRouter = createBrowserRouter([
  { path: '/', element: <Login /> },
  { path: '/browse', element: <Browse /> },
  { path: '/movie/:id', element: <MovieDetail /> }, // Route now uses movie ID
]);

const App = () => {
  return <RouterProvider router={appRouter} />;
};

export default App;
