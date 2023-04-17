/** @format */

import "./team.scss";
import { FormattedMessage } from "react-intl";
const Team = () => {
  return (
    <div class="team section">
      <h2 className="team__title title about__left-title">
        <FormattedMessage id="team-title-desktop"></FormattedMessage>
        <span> team</span>
      </h2>
      <div className="team__inner">
        <div className="team__photo team__photo-first"></div>
        <div className="team__photo team__photo-second"></div>
      </div>
    </div>
  );
};

export default Team;
