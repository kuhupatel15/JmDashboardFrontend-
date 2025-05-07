import React, { useEffect, useState } from "react";
import REACT_APP_BASE_URL from "./utils/config"; // ✅ Base URL import kiya

const News = () => {
  const [newsData, setNewsData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(`${REACT_APP_BASE_URL}/api/news`);
        
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Fetched News Data:", data);
        setNewsData(data);
      } catch (error) {
        console.error("Error fetching news:", error);
        setError("Failed to load news. Please try again.");
      }
    };

    fetchNews();
  }, []);

  const latestNews = newsData.slice(0, 2);

  return (
    <div className="container mx-auto pb-5">
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : latestNews.length > 0 ? (
        latestNews.map((news) => (
          <div key={news._id} className="border-b-2 border-red-500 py-5">
            <h1 className="text-5xl font-bold text-red-500 leading-snug">{news.title}</h1>
            <div className="w-full min-h-fit flex flex-col">
              <div className="w-full max-h-[30vh] gap-3 py-1 flex justify-between">
                {news.images && news.images.length > 0 ? (
                  news.images.map((img, idx) => (
                    <div key={idx} className="w-1/3  bg-cyan-800">
                      <img className="w-full h-full object-cover" src={img} alt={`news-${idx}`} />
                    </div>
                  ))
                ) : (
                  <p>No images available</p>
                )}
              </div>

              <div className="w-full min-h-[2vw] py-2 text-justify">
                <p className="text-xl font-semibold">{news.details}</p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>Loading News...</p>
      )}
    </div>
  );
};

export default News;
