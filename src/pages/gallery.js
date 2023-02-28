import React, { useEffect, useState } from "react";
import axios from "axios";
import { ImageCard } from "@/components";

const gallery = () => {
  const fetchImages = async () => {
    try {
      const options = {
        method: "GET",
        url: "https://pexelsdimasv1.p.rapidapi.com/v1/search",
        params: { query: "lawn", locale: "en-US", per_page: "15", page: "1" },
        headers: {
          Authorization: process.env.NEXT_PUBLIC_PEXELS_API_KEY,
          "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_PROJECT_KEY,
          "X-RapidAPI-Host": "PexelsdimasV1.p.rapidapi.com",
        },
      };
      const data = await axios.request(options);
      return data.data.photos;
    } catch (err) {
      console.log(err);
    }
  };
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages().then((data) => {
      setImages(data);
    });
  }, []);
  console.log(images);

  return (
    <div className="mt-4">
      <div className="bg-slate-100 py-6">
        <h2 className="text-5xl font-thin">Gallery</h2>
      </div>

      <div className="grid grid-cols-1 max-w-6xl mx-auto px-auto sm:grid-cols-2 md:grid-cols-3 gap-3 2xl:gap-8 py-2 ">
        {images.map((image, i) => (
          <ImageCard
            imgUrl={image.src.original}
            imgAlt={image.alt}
            key={image.photographer_id + i}
          />
        ))}
      </div>
    </div>
  );
};

export default gallery;
