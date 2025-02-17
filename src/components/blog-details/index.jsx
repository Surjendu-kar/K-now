
import React from "react";
import Breadcrumb from "../bredcrumb/breadcrumb";
import PostboxBlogDetails from "./postbox-blog-details";

const BlogDetails = () => {
  return (
    <>
      <Breadcrumb title="News Details" subtitle="News Details" isDbbl="News" />
      <PostboxBlogDetails />
    </>
  );
};

export default BlogDetails;
