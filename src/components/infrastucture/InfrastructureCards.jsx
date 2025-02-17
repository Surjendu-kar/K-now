import React, { useState } from 'react';
import Link from "next/link";
import Image from "next/image";

const ImageLoader = () => (
  <div className="animate-pulse">
    <div className="bg-gray-200 rounded-lg h-64 w-full"></div>
  </div>
);

const BigCard = ({ image, category, title }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="blog__post-item-two shine__animate-item">
      <div className="blog__post-thumb-two relative">
        <Link href="#" className="shine__animate-link">
          {isLoading && <ImageLoader />}
          <Image
            src={image}
            alt={title}
            width={800}
            height={500}
            quality={75}
            priority={false}
            onLoadingComplete={() => setIsLoading(false)}
            className={`transition-opacity duration-300 ${
              isLoading ? "opacity-0" : "opacity-100"
            }`}
          />
        </Link>
      </div>
      <div className="blog__post-content-two">
        <Link href="#" className="cat">
          {category}
        </Link>
        <h4 className="title">
          <Link href="#">{title}</Link>
        </h4>
      </div>
    </div>
  );
};

const SmallCard = ({ image, category, title }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="blog__post-item-three shine__animate-item">
      <div className="blog__post-thumb-three relative">
        <Link href="#" className="shine__animate-link">
          {isLoading && <ImageLoader />}
          <Image
            src={image}
            alt={title}
            width={600}
            height={400}
            quality={75}
            priority={false}
            onLoadingComplete={() => setIsLoading(false)}
            className={`transition-opacity duration-300 ${
              isLoading ? "opacity-0" : "opacity-100"
            }`}
          />
        </Link>
      </div>
      <div className="blog__post-content-three">
        <Link href="#" className="cat">
          {category}
        </Link>
        <h4 className="title">
          <Link href="#">{title}</Link>
        </h4>
      </div>
    </div>
  );
};

export { BigCard, SmallCard };