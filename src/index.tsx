/* eslint-disable prettier/prettier */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

// import AboutUs from 'pages/AboutUs';
// import Basket from 'pages/Basket';
// import Catalog from 'pages/Catalog';
// import Contacts from 'pages/Contacts';
// import CopperAccessories from 'pages/CopperAccessories';
// import CopperDistillers from 'pages/CopperDistillers';
// import CopperUtensils from 'pages/CopperUtensils';
// import Delivery from 'pages/Delivery';
// import Error from 'pages/Error';
// import ForEssentialOils from 'pages/ForEssentialOils';
// import Home from 'pages/Home';
// import LogIn from 'pages/LogIn';
// import News from 'pages/News';
// import NewsDetails from 'pages/NewsDetails';
// import OrderPlacing from 'pages/OrderPlacing';
// import OrderThanks from 'pages/OrderThanks';
// import Orders from 'pages/Orders';
// import Payment from 'pages/Payment';
// import PersonalArea from 'pages/PersonalArea';
// import Product from 'pages/Product';
// import ProfileDetails from 'pages/ProfileDetails';
// import Register from 'pages/Register';
// import Root from 'pages/Root';
// import WishList from 'pages/WishList';
import GlobalStyles from 'styles/GlobalStyles';

import App from './App';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Root />,
//     errorElement: <Error />,
//     children: [
//       {
//         path: 'home',
//         element: <Home />,
//       },
//       {
//         path: 'catalog',
//         element: <Catalog />,
//         children: [
//           {
//             path: 'сopper-accessories',
//             element: <CopperAccessories />,
//           },
//           {
//             path: 'copper-utensils',
//             element: <CopperUtensils />,
//           },
//           {
//             path: 'for-essential-oils',
//             element: <ForEssentialOils />,
//           },
//           {
//             path: 'copper-distillers',
//             element: <CopperDistillers />,
//           },
//         ],
//       },
//       {
//         path: '/catalog/:productId',
//         element: <Product />,
//       },
//       {
//         path: 'news',
//         element: <News />,
//       },
//       {
//         path: '/news/:newsId',
//         element: <NewsDetails />,
//       },
//       {
//         path: 'delivery',
//         element: <Delivery />,
//       },
//       {
//         path: 'payment',
//         element: <Payment />,
//       },
//       {
//         path: 'about-us',
//         element: <AboutUs />,
//       },
//       {
//         path: 'contacts',
//         element: <Contacts />,
//       },
//       {
//         path: 'basket',
//         element: <Basket />,
//       },
//       {
//         path: 'order-placing',
//         element: <OrderPlacing />,
//       },
//       {
//         path: 'order-thanks',
//         element: <OrderThanks />,
//       },
//       {
//         path: 'login',
//         element: <LogIn />,
//       },
//       {
//         path: 'register',
//         element: <Register />,
//       },
//       {
//         path: 'personal-area',
//         element: <PersonalArea />,
//         children: [
//           {
//             path: 'profile-details',
//             element: <ProfileDetails />,
//           },
//           {
//             path: 'orders',
//             element: <Orders />,
//           },
//           {
//             path: 'wish-list',
//             element: <WishList />,
//           },
//         ],
//       },
//     ],
//   },
// ]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement);
root.render(
  <React.StrictMode>
    <GlobalStyles />
    {/* <RouterProvider router={router} /> */}
    <App />
  </React.StrictMode>,
);
