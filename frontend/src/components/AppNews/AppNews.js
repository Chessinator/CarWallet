import { useState, useEffect } from 'react';
import './AppNews.css';

const AppNews = () => {

    const [news, setNews] = useState([])
    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch(`${process.env.REACT_APP_API_URL}/api/news/app`, requestOptions)
            .then(response => {
                if (response.status !== 200) {
                    return;
                }
                response.json()
                .then(json => setNews(json))
            })
            .catch(error => console.log('ERROR FETCHING APP NEWS: ', error));
    }, [])

    return news && (
        <div className="news news-app">
            <h1>App News</h1>
            <ul>
                {news.map((n, i) => <li key={i}>{n.message}</li>)}
            </ul>
        </div>
    )
}

export default AppNews;