import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import './assets/fonts/fonts.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './store/store';

import MainPage from './components/pages/MainPage/MainPage';
import OrderPage from './components/pages/OrderPage/OrderPage';
import SuccessPage from './components/pages/SuccessPage/SuccessPage';
import TicketSelection from './components/blocks/TicketSelection/TicketSelection';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <MainPage />,
      },
      {
        path: "order",
        element: <OrderPage />,
        children: [
          {
            path: "ticket_selection",
            element: <TicketSelection />,
          },
        ],
      },
      {
        path: "success",
        element: <SuccessPage />,
      },
    ],
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
