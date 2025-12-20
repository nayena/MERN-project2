import {Link} from 'react-router-dom'; 
import ArticlesList from '../ArticleListPage';
import articles from '../article-content';

export default function ArticlesListPage(){
    return(
    <>
    
    <h1> Articles</h1>
    <ArticlesList articles={articles}/>
    </>
    ); 
}