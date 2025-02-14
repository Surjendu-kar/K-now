import React from "react";
import SEO from "../common/seo";
import Wrapper from "../layout/wrapper";
import SchoolComitte from "../components/school-comitte";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"School Comitte"} />
      <SchoolComitte />
    </Wrapper>
  );
};

export default index;
