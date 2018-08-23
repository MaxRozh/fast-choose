
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Hidden from '@material-ui/core/Hidden';
import CardMedia from '@material-ui/core/CardMedia';

import './HomeApp.scss';

function HomeApp({banners, articles, news, isSearching, searchingElements, onChooseArticle, text}) {

    return (
        <div className="main-content">

            { !isSearching
                ? <div>

                    <Paper className="home__banner" style={{backgroundImage: `url(${banners[0].imgLink})`}}>
                        <Grid container style={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
                            <Grid item md={6}>Image
                                <Link to="/section">
                                    <Typography variant="display2" color="textPrimary" gutterBottom>
                                        {banners[0].name}
                                    </Typography>

                                    { banners[0].ad
                                        ? <Typography variant="subheading" color="textPrimary">text.common.ad</Typography>
                                        : null
                                    }

                                    <Typography variant="headline" color="textPrimary" paragraph>
                                        {banners[0].description}
                                    </Typography>

                                    <Typography variant="title" color="inherit">
                                       Make your choose
                                    </Typography>
                                </Link>
                            </Grid>
                        </Grid>
                    </Paper>

                    <div className="home-articles">
                        <Typography variant="headline">{text.common.articles}</Typography>

                        <Grid container spacing={40}>
                            { articles.map(item => (
                                <Grid item key={item.id} xs={6} md={3}>
                                    <Card onClick={() => { onChooseArticle(item.link); }}>
                                        <div>
                                            <CardContent>
                                                <Typography variant="headline">{item.display.article}</Typography>
                                                <Typography variant="subheading" paragraph>
                                                    {item.display.description}
                                                </Typography>
                                            </CardContent>
                                        </div>
                                        <Hidden xsDown>
                                            <CardMedia
                                                image="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22288%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20288%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_164edaf95ee%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_164edaf95ee%22%3E%3Crect%20width%3D%22288%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2296.32500076293945%22%20y%3D%22118.8%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" // eslint-disable-line max-len
                                                title="Image title"
                                            />
                                        </Hidden>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </div>

                    <div className="home-news">

                        <Typography variant="headline">{text.common.news}</Typography>

                        <Grid container spacing={40}>
                            { news.newsArray.map(item => (
                                <Grid item key={item.id} xs={6} md={4}>
                                    <Card onClick={() => onChooseArticle(item.parentLink)}>
                                        <div>
                                            <CardContent>
                                                <Typography variant="headline">
                                                    {item.article}
                                                </Typography>
                                                <Typography variant="subheading" color="textSecondary">
                                                    {item.display.date}
                                                </Typography>
                                                <Typography variant="subheading" paragraph>
                                                    {item.display.description}
                                                </Typography>
                                            </CardContent>
                                        </div>
                                        <Hidden xsDown>
                                            <a href={item.link} target="_blank" rel="noopener noreferrer">
                                                <CardMedia
                                                    image={item.display.imgLink}
                                                    title={item.article}
                                                />
                                            </a>
                                        </Hidden>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>

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
