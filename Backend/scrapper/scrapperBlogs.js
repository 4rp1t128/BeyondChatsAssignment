import axios from "axios";
import cheerio from "cheerio";
import Article from "../models/Article.js";

const scrapeBlogs = async () => {
    const { data } = await axios.get("https://beyondchats.com/blogs/");
    const $ = cheerio.load(data);

    const articles = $(".blog-item").slice(-5);

    for (let el of articles) {
        const title = $(el).find("h3").text();
        const link = $(el).find("a").attr("href");

        const articlePage = await axios.get(link);
        const $$ = cheerio.load(articlePage.data);

        const content = $$(".blog-content").text();

        await Article.create({
            title,
            content,
            sourceUrl: link
        });
    }
};

export default scrapeBlogs;
