import { LIKE_ARTICLE, DISLIKE_ARTICLE, BOOKMARK_ARTICLE } from "../constants/action-types";

export function LikeArticle(payload) {
    console.log(payload);
    return { type: "LIKE_ARTICLE", payload }
};

export function DislikeArticle(payload) {
    return { type: "DISLIKE_ARTICLE", payload }
};

export function BookmarkArticle(payload) {
    return { type: "BOOKMARK_ARTICLE", payload }
};