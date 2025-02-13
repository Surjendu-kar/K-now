import SEO from "../common/seo";
import Gallery from "../components/gallery";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Gallery"} />
      <Gallery />
    </Wrapper>
  );
};

export default index;
