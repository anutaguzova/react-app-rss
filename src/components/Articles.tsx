import { ChangeEvent, FC, useState, useEffect } from 'react';
import { Article } from '../types';

interface ArticleProps {
  articles: Article[];
  page: number;
  pageSize: string;
  onChangePage: (pageInput: number) => void;
  onChangeSize: (a: string) => void;
  totalRes: string;
}

const Articles: FC<ArticleProps> = ({ articles, page, onChangePage, pageSize, onChangeSize, totalRes }) => {
  const [artPage, setArtPage] = useState<number | string>('');
  const [size, setSize] = useState<string>('5');

  useEffect(() => {
    setArtPage(page);
  }, [page]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const regexp = /\d+/;
    const matchedValue = value.match(regexp);
    if (matchedValue) {
      const newValue = +matchedValue[0];
      onChangePage(newValue);
      setArtPage(newValue);
    } else {
      setArtPage('');
    }
  };

  useEffect(() => {
    setSize(pageSize);
  }, [pageSize]);

  const handleChoose = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    if (value === '20') {
      onChangeSize('20');
      setSize('20');
    } else if (value === '10') {
      onChangeSize('10');
      setSize('10');
    } else {
      onChangeSize('5');
      setSize('5');
    }
  };

  return (
    <div>
      {articles.length ? (
        <div className="wrapper">
          <div className="pagination">
            <label className="item" htmlFor="pageSize">
              <select name="pageSize" value={size} onChange={handleChoose} onBlur={handleChoose}>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
              </select>
            </label>
            <label htmlFor="input__page">
              <input
                name="input__page "
                className="input__page"
                type="text"
                value={artPage}
                onChange={handleChange}
              />
            </label>

            <p className="total"> Total pages: {totalRes}</p>
          </div>

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
                      link
                    </a>
                  </td>
                </tr>
              </tbody>
            ))}
            <tfoot />
          </table>
        </div>
      ) : null}
    </div>
  );
};

export default Articles;
