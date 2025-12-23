import {useState} from  'react'; 
import {useParams , useLoaderData} from 'react-router-dom' ;
import articles from '../article-content';
import axios from 'axios';
import AddCommentForm from '../AddCommentForm';
import {CommentsList} from '../CommentsList';
export default function ArticlePage(){
    
    const {name}   = useParams() ;
    const {upvotes: initialUpvotes , comments: initialComments} = useLoaderData(); 
    const [upvotes, setUpvotes] = useState(initialUpvotes) ;
    const article  = articles.find(a => a.name === name ) ; 
    const [comments , setComments] = useState(initialComments) ; 

    async function onUpvotedClicked(){
        const response  = await axios.post('/api/articles/' + name + '/upvote');
        const updatedArticleData = response.data ; 
        setUpvotes(updatedArticleData.upvotes); 
         
    }

    async function onAddComment({nameText, commentText}){
        const response  = await axios.post('/api/articles/' + name + '/comments' , {
            postedBy : nameText ,
            text : commentText , 
        });
        const updatedArticleData = response.data ; 
        setComments(updatedArticleData.comments); 
    }

    return( 
    <>
    <h1> {article.title}</h1>
    <button onClick={onUpvotedClicked} >Upvoted</button>
    <p> This  article has {upvotes} upvotes! </p>
    {article.content.map(p => <p key={p}> {p} </p>)}
    <AddCommentForm onAddComment={onAddComment}/>
    <CommentsList comments={comments}/>
    </>
    ); 
}

export async function Loader ({params}) {
    const response = await axios.get('/api/articles/' + params.name); 
    const { upvotes, comments} = response.data;
    return {upvotes, comments} ; 
  } 