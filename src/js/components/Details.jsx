import React from "react";
import { connect } from "react-redux";

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



class Details extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        let artid = this.props.location.state.id;
        const artrow  = this.props.articles.find((element) => {
            return element.id === artid;
        });

        return (
            <div className="row mt-5">
                <div className="col-md-9 offset-md-1">
                    <h2>Details - {artrow.title}</h2>
                    <Card className={artrow.card}>
                        <div className={artrow.details}>
                            <CardHeader
                                title={artrow.title}
                                subheader={artrow.subtitle}

                            />
                               <CardActions className={artrow.actions} disableActionSpacing>
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


                            
                        </div>
                        <CardMedia
                            className={artrow.cover}
                            image={artrow.image}
                            style={{ height: 0, paddingTop: '50%' }}
                            title="Paella dish"
                        />
                        <CardContent>
                            <Typography component="p">
                                This impressive paella is a perfect party dish and a fun meal to cook together with your
                                guests.
                                </Typography>
                            <Typography paragraph>
                                Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                                minutes.
            </Typography>
                            <Typography paragraph>
                                Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                                heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                                browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving
                                chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion,
                                salt and pepper, and cook, stirring often until thickened and fragrant, about 10
                                minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
            </Typography>
                            <Typography paragraph>
                                Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                                without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat
                                to medium-low, add reserved shrimp and mussels, tucking them down into the rice, and
                                cook again without stirring, until mussels have opened and rice is just tender, 5 to 7
                                minutes more. (Discard any mussels that don’t open.)
            </Typography>
                            <Typography>
                                Set aside off of the heat to let rest for 10 minutes, and then serve.
            </Typography>

                        </CardContent>

                     
                    </Card>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { articles: state.articles };
};

Details.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
}; 

export default withStyles(styles, { withTheme: true })(connect(mapStateToProps, null)(Details)); 