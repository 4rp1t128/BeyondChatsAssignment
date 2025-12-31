import { useEffect, useState } from "react";

export default function Home() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/articles")
            .then(res => res.json())
            .then(setArticles);
    }, []);

    return (
        <div className="p-6 grid md:grid-cols-3 gap-6">
            {articles.map(a => (
                <div key={a._id} className="border p-4 rounded">
                    <h2 className="font-bold">{a.title}</h2>
                    <span className="text-sm">
                        {a.isUpdated ? "AI Updated" : "Original"}
                    </span>
                </div>
            ))}
        </div>
    );
}
