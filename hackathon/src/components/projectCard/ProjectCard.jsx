import "./ProjectCard.scss";

function ProjectCard(/*{ card }*/) {
  return (
    <div className="projectCard">
      <img src={/*card.img*/'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400'} alt="" />
      <div className="info">
        <img src={/*card.pp*/'https://images.pexels.com/photos/392018/pexels-photo-392018.jpeg?auto=compress&cs=tinysrgb&w=400'} alt="" />
        <div className="texts">
          <h2>{/*card.cat*/}</h2>
          <span>{/*card.username*/}</span>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;