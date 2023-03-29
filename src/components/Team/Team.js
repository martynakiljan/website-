import "./team.scss";

const Team = () => {
  return (
    <div class="team section">
      <h2 className="team__title title about__left-title mobile">
        Meet the <span>team</span>{" "}
      </h2>
      <div className="team__inner">
        <h2 className="team__title title about__left-title desktop">
          Meet the <span>team</span>{" "}
        </h2>
        <div className="team__photo team__photo-first"></div>
        <div className="team__photo team__photo-second"></div>
      </div>
    </div>
  );
};

export default Team;
