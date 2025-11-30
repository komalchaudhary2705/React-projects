import React, { useEffect, useState } from "react";

import NewsCard from "../components/NewsCard";
const Home = () => {
  const [news, setNews] = useState([]);
  const url = `https://newsapi.org/v2/everything?q=tesla&from=2025-10-29&sortBy=publishedAt&apiKey=202a1d984b7242dcb43a8939317c801c`;

  // fetch new api
  // by using fetchApiData function
  const fetchApiData = async () => {
    const res = await fetch(url);
    const data = await res.json();

    setNews(data.articles);
  };
  useEffect(() => {
    fetchApiData();
  }, []);

  return (
    <div className="min-h-screen bg-black pt-10 py-4 px-16">
 

     
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6  p-4">
        {news.slice(5,10).map((item, index) => (
          <NewsCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
}
