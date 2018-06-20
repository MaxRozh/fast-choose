
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './HomeApp.scss';

function HomeApp({banners, articles, news, isSearching, searchingElements, onChooseArticle, text}) {

    return (
        <div className="main-content">

            { !isSearching
                ? <div>

                    <div className="home-banner">
                        <h3>{text.common.banner}:</h3>

                        <div className="content-banner">
                            <p>{banners[0].name} {banners[0].ad ? <span className="ad">{text.common.ad}</span> : null}</p>
                            <Link to="/section">
                                <img src={banners[0].imgLink} alt={banners[0].name} />
                            </Link>
                            <p>{banners[0].description}</p>
                        </div>
                    </div>

                    <div className="home-articles">
                        <h3>{text.common.articles}:</h3>

                        <div className="content-articles">
                            {
                                articles.map((item) =>
                                    <div className="article" onClick={() => { onChooseArticle(item.link); }} key={item.id} >
                                        <h4>{item.display.article}</h4>
                                        <p>{item.display.description}</p>
                                    </div>
                                )
                            }
                        </div>
                    </div>

                    <div className="home-news">
                        <h3>{text.common.news}:</h3>

                        <div className="content-news">
                            <i>{news.date}</i>

                            {
                                news.newsArray.map((item) =>
                                    <div className="news" key={item.id}>
                                        <h4 onClick={() => { onChooseArticle(item.parentLink); }}>
                                            {item.article}
                                        </h4>
                                        {item.ad ? <span className="ad">{text.common.ad}</span> : null}
                                        <i>{item.display.date}</i>
                                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                                            <img src={item.display.imgLink} alt={item.article}/>
                                        </a>
                                        <p>{item.display.description}</p>
                                    </div>
                                )
                            }
                        </div>
                    </div>

                </div>
                : <div className="home-search">
                    <h3>{text.common.search}:</h3>

                    <div className="content-search">
                        {searchingElements.length !== 0
                            ? searchingElements.map((item) =>
                                <div className="article" onClick={() => { onChooseArticle(item.link); }} key={item.id} >
                                    <h4>{item.display.article}</h4>
                                    <p>{item.display.description}</p>
                                </div>
                            )
                            : <p>{text.common.noResults}</p>
                        }
                    </div>
                </div>
            }
        </div>
    );
}

if (process.env !== 'production') {

    HomeApp.propTypes = {
        banners: PropTypes.array.isRequired,
        articles: PropTypes.array.isRequired,
        news: PropTypes.object.isRequired,
        isSearching: PropTypes.bool.isRequired,
        searchingElements: PropTypes.array.isRequired,
        text: PropTypes.object.isRequired,
        onChooseArticle: PropTypes.func.isRequired
    };
}

export default HomeApp;
