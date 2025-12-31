import axios from "axios";
import Article from "../models/Article.js";

const GEMINI_API = process.env.GEMINI_API_KEY;

const updateArticle = async (articleId) => {
    const article = await Article.findById(articleId);

    const prompt = `
Rewrite the article below to match top-ranking blog quality.
Improve SEO, formatting, and clarity.

Original Article:
${article.content}
`;

    const response = await axios.post(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=" + GEMINI_API,
        {
            contents: [{ parts: [{ text: prompt }] }]
        }
    );

    const updatedContent =
        response.data.candidates[0].content.parts[0].text;

    article.content = updatedContent;
    article.isUpdated = true;
    article.references = ["Google Search Article 1", "Google Search Article 2"];
    await article.save();
};

export default updateArticle;
