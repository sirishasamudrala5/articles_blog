import React from "react";
import { connect } from "react-redux";
import { showArticle } from '../actions/index';
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

    render() {
        const { articles } = this.props;
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
                                    This impressive paella is a perfect party dish and a fun meal to cook together with your
                                    guests. 
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
                                <IconButton aria-label="Like">
                                    <ThumbUp />
                                </IconButton>

                                <IconButton aria-label="Disliked">

                                </IconButton>
                                <IconButton aria-label="Dislike">
                                    <ThumbDown />
                                </IconButton>

                                <IconButton aria-label="Add to favorites">

                                </IconButton>
                                <IconButton aria-label="Bookmark">
                                    <Bookmark />
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
        onArticleClick: (id) => {
            dispatch(showArticle(id))
        }
    }
}

List.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(withRouter(connect(mapStateToProps, mapDispatchToProps)(List))); 
