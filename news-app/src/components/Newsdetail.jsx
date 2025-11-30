import React from "react";
import { useLocation } from "react-router-dom";

const NewsDetail = () => {
  const location = useLocation();
  const articleUrl = location.state?.url;

  if (!articleUrl) {
    return <h1 className="text-center text-2xl py-20">No Article URL Found!</h1>;
  }

  return (
    <div className="min-h-screen bg-black">
      <h1 className="text-3xl font-bold text-center text-white mb-6">Full Article</h1>

      <iframe
        src={articleUrl}
        className="w-full h-[90vh] bg-black "
        title="Article Viewer"
      ></iframe>
    </div>
  );
}
export default NewsDetail;