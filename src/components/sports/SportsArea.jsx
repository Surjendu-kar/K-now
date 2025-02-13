import sports from "@/src/data/sports.json";
import ActivityPageTemplate from "@/src/common/ActivityPageTemplate";
import { SportsCard } from "./SportsCard";

const SportsArea = () => {
  const sportsData = Array.isArray(sports) ? sports : sports.sports || [];

  return (
    <ActivityPageTemplate
      data={sportsData}
      title="Sports"
      CardComponent={SportsCard}
    />
  );
};

export default SportsArea;
