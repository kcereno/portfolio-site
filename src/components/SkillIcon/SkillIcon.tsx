import './SkillIcon.scss';

interface Props {
  icon: string;
  tooltip: string;
}

function SkillIcon({ icon, tooltip }: Props) {
  return (
    <div className="tooltip ">
      <img className="hvr-grow" src={icon} alt="" />
      <span className="tooltiptext">{tooltip}</span>
    </div>
  );
}

export default SkillIcon;
