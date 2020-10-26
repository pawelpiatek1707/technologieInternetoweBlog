import React from 'react';
import styled from 'styled-components';
import TopNav from '../components/topNav';
import {articles} from '../assets/articles';
import Article from '../components/article';
import video from '../assets/videos/blogMovie.mp4'

const BlogWrapper = styled.div`
    position: relative;
`;

const TopNavWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
    width: 100%;
  
`;

const Articles = styled.div`
    position: absolute;
    top: 15rem;
    left: 0;
    z-index: 2;
   
`;

const Video = styled.video`
 
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  opacity: .15;
  z-index: -1;
`;


const Blog = () => {
    return (
        <BlogWrapper>
               <Video autoPlay muted loop>
                <source src={video} type="video/mp4"/>
            </Video>
            <TopNavWrapper>
                <TopNav/>
            </TopNavWrapper>
            <Articles>
                {articles.map(article => (
                    <Article header={article.title} content={article.content} key={article.id} image={article.id}/>
                ))}
            </Articles>
        </BlogWrapper>
    )
};

export default Blog;