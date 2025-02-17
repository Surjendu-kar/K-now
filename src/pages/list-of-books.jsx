import React from "react";
import SEO from "../common/seo";
import Wrapper from "../layout/wrapper";
import ListOfBooks from "../components/list-of-books";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"List of Books"} />
      <ListOfBooks />
    </Wrapper>
  );
};

export default index;
