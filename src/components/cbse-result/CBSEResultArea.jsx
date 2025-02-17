import React from "react";
import { cbseResults } from "@/src/data/cbse_results.json";
import { cbseActivities } from "@/src/data/cbse_activities.json";
import { CbseActivityCard } from "../cbse-activities/CbseActivityCard";
import ActivityPageTemplate from "@/src/common/ActivityPageTemplate";

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
