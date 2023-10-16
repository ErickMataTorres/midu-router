import './App.css';
import HomePage from './pages/Home.jsx';
import AboutPage from './pages/About.jsx';
import {Router} from './Router';
import Page404 from './pages/404';
import SearchPage from './pages/Search';

const appRoutes=[
  [
    {
      path:"/",
      Component:HomePage
    },
    {
      path:"/About",
      Component:AboutPage
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
      <Router routes={appRoutes} defaultComponent={Page404}></Router>
    </main>
      
  )
}

export default App
