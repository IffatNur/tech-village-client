import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
  return (
    <div>
      <QueryClientProvider client={QueryClient}>
        <RouterProvider router={router}></RouterProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
