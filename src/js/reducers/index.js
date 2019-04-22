import { LIKE_ARTICLE, DISLIKE_ARTICLE, BOOKMARK_ARTICLE } from "../constants/action-types";

<<<<<<< HEAD
const desc = "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. \n  Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes. \n Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil. \n Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook again without stirring, until mussels have opened and rice is just tender, 5 to 7 minutes more. (Discard any mussels that don’t open.).\nSet aside off of the heat to let rest for 10 minutes, and then serve.";
const initialState = {
    articles: [
        { title: "Article1", id: 1, text: "sample text", like: false, dislike: false, bookmark: false, image: "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg", subtitle: "April 14, 2019", likec: 0, dislikec: 0, description: desc },
        { title: "Article2", id: 2, text: "sample text", like: false, dislike: false, bookmark: false, image: "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg", subtitle: "April 13, 2019", likec: 0, dislikec: 0, description: desc },
        { title: "Article3", id: 3, text: "sample text", like: false, dislike: false, bookmark: false, image: "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg", subtitle: "April 12, 2019", likec: 0, dislikec: 0, description: desc  }
=======
const initialState = {
    articles: [
        { title: "Article1", id: 1, text: "sample text", like: false, dislike: false, bookmark: false, image: "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg", subtitle: "April 14, 2019" },
        { title: "Article2", id: 2, text: "sample text", like: false, dislike: false, bookmark: false, image: "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg", subtitle: "April 13, 2019"},
        { title: "Article3", id: 3, text: "sample text", like: false, dislike: false, bookmark: false, image: "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg", subtitle: "April 12, 2019" }
>>>>>>> 0fb04462f943eba9c3b0cce245c9a60cd356753a
    ]
};
function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'LIKE_ARTICLE': return {
            ...state,
            articles: state.articles.map(article =>
<<<<<<< HEAD
                article.id === action.payload ? { ...article, like: !article.like , likec: article.like ? article.likec: article.likec+1 } : article
=======
                article.id === action.payload ? { ...article, like: !article.like } : article
>>>>>>> 0fb04462f943eba9c3b0cce245c9a60cd356753a
            )
        };
        break;
        case 'DISLIKE_ARTICLE': return {
            ...state,
            articles: state.articles.map(article =>
<<<<<<< HEAD
                article.id === action.payload ? { ...article, dislike: !article.dislike, dislikec: article.dislike? article.dislikec :article.dislikec+1 } : article
=======
                article.id === action.payload ? { ...article, dislike: !article.dislike } : article
>>>>>>> 0fb04462f943eba9c3b0cce245c9a60cd356753a
            )
        };
        break;
        case 'BOOKMARK_ARTICLE': return {
            ...state,
            articles: state.articles.map(article =>
                article.id === action.payload ? { ...article, bookmark: !article.bookmark } : article
            )
        };
        break;
        default: return state;
    }
};
export default rootReducer;