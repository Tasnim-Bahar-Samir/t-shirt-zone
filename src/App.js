
import { Children } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Main from './Components/Layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path : '/',
      element:<Main/>,
      children:[
        {
          path:'/',
          loader:()=>fetch('t-shirt.json'),
          element:<Home/>
        },
        {
          path:'about',
          element:<About/>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
