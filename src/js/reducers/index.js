import { LIKE_ARTICLE, DISLIKE_ARTICLE, BOOKMARK_ARTICLE } from "../constants/action-types";

const initialState = {
    articles: [
        { title: "Article1", id: 1, text: "sample text", like: false, dislike: false, bookmark: false, image: "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg", subtitle: "April 14, 2019" },
        { title: "Article2", id: 2, text: "sample text", like: false, dislike: false, bookmark: false, image: "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg", subtitle: "April 13, 2019"},
        { title: "Article3", id: 3, text: "sample text", like: false, dislike: false, bookmark: false, image: "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg", subtitle: "April 12, 2019" }
    ]
};
function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'LIKE_ARTICLE': return {
            ...state,
            articles: state.articles.map(article =>
                article.id === action.payload ? { ...article, like: !article.like } : article
            )
        };
        break;
        case 'DISLIKE_ARTICLE': return {
            ...state,
            articles: state.articles.map(article =>
                article.id === action.payload ? { ...article, dislike: !article.dislike } : article
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