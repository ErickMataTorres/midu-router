import './App.css';

import {Router} from './Router';
import Page404 from './pages/404';
import SearchPage from './pages/Search';
import {Route} from "./Route.jsx";

import {lazy} from "react";
import { Suspense } from 'react';

const LazyHomePage=lazy(()=>import('./pages/Home.jsx'));
const LazyAboutPage = lazy(()=>import("./pages/About.jsx"));




const appRoutes=[
  [
    {
      path:"/:lang/about",
      Component:LazyAboutPage
    },
    {
      path:"/search/:query",
      Component:SearchPage
    }
  ]
]

function App() {

  return (
    <main>
      <Suspense fallback={null}>
      <Router routes={appRoutes} defaultComponent={Page404}>
        <Route path="/" Component={LazyHomePage}></Route>
        <Route path="/about" Component={LazyAboutPage}></Route>
      </Router>
      </Suspense>
    </main>
      
  )
}

export default App
