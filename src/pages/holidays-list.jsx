import React from "react";
import SEO from "../common/seo";
import Wrapper from "../layout/wrapper";
import HolidaysList from "../components/holidays-list";
const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"holidays-list"} />
      <HolidaysList />
    </Wrapper>
  );
};

export default index;
