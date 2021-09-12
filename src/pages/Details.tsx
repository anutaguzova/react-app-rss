import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../services/api';
import { Article } from '../types';

interface DetailsParams {
  title: string;
}

const Details = () => {
  const [article, setArticle] = useState<Article | undefined>();
  const params = useParams<DetailsParams>();

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(
          `v2/everything?qInTitle=${params.title}&apiKey=16b312231ce9476ea9b1b986a570563a`
        );
        setArticle(response.data.articles[0]);
      } catch (err) {
        console.error(e);
      }
    };
    fetchArticle();
    return () => {
      setArticle({});
    };
  }, [params.title]);

  return (
    <div className="search_content">
      <h1 className="title">Information about article</h1>
      <div>Title: {params.title}</div>
      <div className="link">
        Link:{' '}
        <a href={article?.url} target="_blank" rel="noreferrer">
          {article?.url}
        </a>
      </div>
      <div>Date: {article?.publishedAt}</div>
      <div> Author: {article?.author}</div>
      <div>
        <img src={article?.urlToImage} alt={article?.title} />
      </div>
      <div> Content: {article?.content}</div>
    </div>
  );
};

export default Details;
