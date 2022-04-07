import { useState, useEffect } from 'react';
import './ImportantNews.css';

const ImportantNews = () => {

    const [news, setNews] = useState([])
    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch(`${process.env.REACT_APP_API_URL}/api/news/important`, requestOptions)
            .then(response => {
                if (response.status !== 200) {
                    return;
                }
                response.json()
                .then(json => setNews(json))
            })
            .catch(error => console.log('ERROR FETCHING IMPORTANT NEWS: ', error));
    }, [])

    return news && (
        <div className="news news-important">
            <h1>Important News</h1>
            <ul>
                {news.map((n, i) => <li key={i}>{n.message}</li>)}
            </ul>
        </div>
    )
}

export default ImportantNews;