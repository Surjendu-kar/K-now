import React from "react";
import { cbseResults } from "@/src/data/cbse_results.json";
import { CbseActivityCard } from "../cbse-activities/CbseActivityCard";
import ActivityPageTemplate from "@/src/common/ActivityPageTemplate";
import cbseData from "@/src/data/cbse_activities.json";
const { cbseActivities } = cbseData;

function CBSEResultArea() {
  return (
    <ActivityPageTemplate
      data={cbseActivities}
      title="CBSE Results"
      CardComponent={CbseActivityCard}
    />
  );
}

export default CBSEResultArea;
