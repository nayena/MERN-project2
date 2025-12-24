import {createBrowserRouter , 
  RouterProvider, 
} from 'react-router-dom';    
import './App.css'
import axios from 'axios';
import HomePage from './pages/HomePage'
import ArticlesListPage from './pages/ArticlesList';
import ArticlePage, { Loader as articleLoader } from './pages/ArticlePage';
import AboutPage from './pages/AboutPage';
import Layout from './pages/Layout';
import PageNotFound from './pages/PageNotFound';
import LoginPage from './pages/LoginPage';
import CreateAccountPage from './pages/CreateAccountPage';

const routes= [{
  path: '/',
  element: <Layout/>, 
  errorElement: <PageNotFound/>,
  children: [{  
  path: '/',
  element : <HomePage/>
}, 
{
  path: '/articles',
  element: <ArticlesListPage/>
},
{
  path: '/articles/:name',   //route parameters
  element: <ArticlePage/>,
  loader: articleLoader , 
},
{
  path: '/about',
  element: <AboutPage/>
},
{
  path: '/login',
  element: <LoginPage/>
},
{
  path: 'signup',
  element: <CreateAccountPage/>
}
]

}]



const router =  createBrowserRouter(routes);
function App() {  

  return (
    <RouterProvider router={router}/>
  );
}

export default App
