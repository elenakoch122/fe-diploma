import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './assets/fonts/fonts.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';

import MainPage from './components/pages/MainPage/MainPage';
import TicketSelectionPage from './components/pages/TicketSelectionPage/TicketSelectionPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/ticket_selection",
        element: <TicketSelectionPage />,
      },
    ],
    // path: "/",
    // element: <MainPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
