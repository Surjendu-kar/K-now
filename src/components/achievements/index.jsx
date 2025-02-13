import Breadcrumb from "../bredcrumb/breadcrumb";
import AchievementsArea from "./AchievementsArea";

const Achievements = () => {
  return (
    <>
      <Breadcrumb
        title="achievements"
        subtitle="achievements"
        isDbbl="More"
      />
      <AchievementsArea />
    </>
  );
};

export default Achievements;
