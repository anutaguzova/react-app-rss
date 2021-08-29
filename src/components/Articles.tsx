import { ChangeEvent, FC, useState, useEffect } from 'react';
import { Article } from '../types';

interface ArticleProps {
  articles: Article[];
  page: number;
  onChangeP: (pageInput: number) => void;
}

const Articles: FC<ArticleProps> = ({ articles, page, onChangeP }) => {
  const [artPage, setArtPage] = useState<number | string>('');

  useEffect(() => {
    setArtPage(page);
  }, [page]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const regexp = /\d+/;
    const matchedValue = value.match(regexp);
    if (matchedValue) {
      const newValue = +matchedValue[0];
      onChangeP(newValue);
      setArtPage(newValue);
    } else {
      setArtPage('');
    }
  };

  return (
    <div>
      {articles.length ? (
        <div className="wrapper">
          <table className="table">
            <thead>
              <tr style={{ border: '1px solid #888' }}>
                <th>Title</th>
                <th>Author</th>
                <th>Content</th>
                <th>Published at</th>
                <th>Image</th>
                <th>URL</th>
              </tr>
            </thead>
            {articles.map(({ author, title, publishedAt, urlToImage, content, url }) => (
              <tbody key={content + Math.random()}>
                <tr>
                  <td>{title}</td>
                  <td>{author}</td>
                  <td>{content}</td>
                  <td>{publishedAt}</td>
                  <td>
                    <img width={200} src={urlToImage} alt={title} />
                  </td>
                  <td>
                    <a href={url} target="_blank" rel="noreferrer">
                      Link
                    </a>
                  </td>
                </tr>
              </tbody>
            ))}
            <tfoot />
          </table>
          <input type="text" value={artPage} onChange={handleChange} />
        </div>
      ) : null}
    </div>
  );
};

export default Articles;
