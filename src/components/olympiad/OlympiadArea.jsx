import olympiads from "@/src/data/olympiads.json";
import ActivityPageTemplate from "@/src/common/ActivityPageTemplate";
import { OlympiadCard } from "./OlympiadCard";

const OlympiadArea = () => {
  const olympiadsData = Array.isArray(olympiads)
    ? olympiads
    : olympiads.olympiads || [];

  return (
    <ActivityPageTemplate
      data={olympiadsData}
      title="Olympiad"
      CardComponent={OlympiadCard}
    />
  );
};

export default OlympiadArea;
