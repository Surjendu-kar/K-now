
import React from "react";
import Breadcrumb from "../bredcrumb/breadcrumb";
import CounterArea from "../homes/home-3/counter-area";
import PostboxBlogDetails from "./postbox-blog-details";

const BlogDetails = () => {
  return (
    <>
      <Breadcrumb title="News Details" subtitle="News Details" isDbbl="News" />
      <PostboxBlogDetails />
      <CounterArea />
    </>
  );
};

export default BlogDetails;
