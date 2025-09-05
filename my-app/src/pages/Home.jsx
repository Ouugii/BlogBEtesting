import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
const Home = () => {
  const [data, setData] = useState();
  useEffect(() => {
    const fetchPostData = async () => {
      try {
        const responce = await axios.get(`http://localhost:5000/api/posts`);
        setData(responce.data);
      } catch (err) {
        console.log("Lỗi: ", err);
      }
    };
    fetchPostData();
  }, []);
  console.log(data);
  return (
    <div className="text-3xl font-bold underline">
      {data && data.length > 2 && (
        <div className="p-4 border rounded shadow">
          <h2 className="text-xl font-bold">{data[2].title}</h2>
          <p className="text-gray-700">{data[2].content}</p>
          {data[2].image && (
            <img
              src={`http://localhost:5000${data[2].image}`}
              alt={data[2].title}
              className="mt-2 w-64 h-auto rounded"
            />
          )}
          <p className="text-sm text-gray-500">
            Tác giả: {data[2].author} | Ngày:{" "}
            {new Date(data[2].createdAt).toLocaleDateString()}
          </p>
        </div>
      )}
    </div>
  );
};

export default Home;
