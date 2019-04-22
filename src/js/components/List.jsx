import React from "react";
import { connect } from "react-redux";
import { LikeArticle, DislikeArticle, BookmarkArticle } from '../actions/index';
import { withRouter } from "react-router-dom";

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import ThumbUp from '@material-ui/icons/ThumbUp';
import ThumbDown from '@material-ui/icons/ThumbDown';
import Bookmark from '@material-ui/icons/Bookmark';
const styles = theme => ({
    card: {
        maxWidth: 400,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    actions: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    }
});



class List extends React.Component {

    constructor(props) {
        super(props);
    }
    handleOnArticleClick(event) {
        console.log("clicked", event);
        //this.props.onArticleClick(event.id)
        this.props.history.push('details', { id: event});
    }

    handleLike(event) {
        console.log("like clicked", event);
        this.props.onLikeClick(event)
    }

    handleDislike(event) {
        console.log("dislike clicked", event);
        this.props.onDislikeClick(event)
    }

    handleBookmark(event) {
        console.log("bokmark clicked", event);
        this.props.onBookmarkClick(event)
    }

    render() {
        const { articles } = this.props;
        console.log(articles);


        return (
            <ul className="list-group list-group-flush">
                {articles.map(el => (
                    <li className="list-group-item" key={el.id}  >
                        <Card className={articles.card}>
                            <div className={articles.details}>
                            <CardHeader
                                title={el.title}
                                subheader={el.subtitle}
                                onClick={() => this.handleOnArticleClick(el.id)}
                            />
                            
                            <CardContent>
                                <Typography component="p">
                                    {el.description.substring(0, 120)}
                                </Typography>
                                
                                </CardContent>
                            </div>
                            <CardMedia
                                className={articles.cover}
                                image={el.image}
                                style={{ height: 0, paddingTop: '20%' }}
                                title="Paella dish"
                            />
                            
                            <CardActions className={articles.actions} disableActionSpacing>
                                <IconButton aria-label="Liked">
                                    
                                </IconButton>
                                <IconButton aria-label="Like" onClick={() => this.handleLike(el.id)}>
                                    {el.likec}<ThumbUp style={{ fill: el.like ? 'rgba(1, 104, 254, 0.54)' : 'rgba(0, 0, 0, 0.54)' }} />
                                </IconButton>

                                <IconButton aria-label="Disliked">

                                </IconButton>
                                <IconButton aria-label="Dislike" onClick={() => this.handleDislike(el.id)}>
                                    {el.dislikec}<ThumbDown style={{ fill: el.dislike ? 'rgba(1, 104, 254, 0.54)' : 'rgba(0, 0, 0, 0.54)' }} />
                                </IconButton>

                                <IconButton aria-label="Add to favorites">

                                </IconButton>
                                <IconButton aria-label="Bookmark" onClick={() => this.handleBookmark(el.id)}>
                                    <Bookmark style={{ fill: el.bookmark ? 'rgba(255, 124, 0, 0.6)' : 'rgba(0, 0, 0, 0.54)' }} />
                                </IconButton>

                                
                            </CardActions>
                            
                        </Card>
                    </li>
                ))}
            </ul>
        );
    }
}

const mapStateToProps = state => {
    return { articles: state.articles };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onLikeClick: (id) => {
            dispatch(LikeArticle(id))
        },
        onDislikeClick: (id) => {
            dispatch(DislikeArticle(id))
        },
        onBookmarkClick: (id) => {
            dispatch(BookmarkArticle(id))
        }
    }
}

List.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(withRouter(connect(mapStateToProps, mapDispatchToProps)(List))); 
