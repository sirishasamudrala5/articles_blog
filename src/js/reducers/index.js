import { SHOW_ARTICLE } from "../constants/action-types";

const initialState = {
    articles: [
        { title: "article1", id: 1, text: "sample text", like: false, dislike: false, bookmark: false, image: "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg", subtitle: "April 14, 2019" },
        { title: "article2", id: 2, text: "sample text", like: false, dislike: false, bookmark: false, image: "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg", subtitle: "April 13, 2019"},
        { title: "article3", id: 3, text: "sample text", like: false, dislike: false, bookmark: false, image: "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg", subtitle: "April 12, 2019" }
    ]
};
function rootReducer(state = initialState, action) {
    if (action.type === SHOW_ARTICLE) {
        state.articles.push(action.payload);
    }
    return state;
};
export default rootReducer;