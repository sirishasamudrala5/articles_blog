import { SHOW_ARTICLE } from "../constants/action-types";

export function showArticle(payload) {
    return { type: "SHOW_ARTICLE", payload }
};