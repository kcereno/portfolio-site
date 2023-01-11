import './SkillIcon.scss';

interface Props {
  icon: string;
  tooltip: string;
}

function SkillIcon({ icon, tooltip }: Props) {
  return (
    <div className="mx-md">
      <img className="mx-auto w-[6rem] h-[6rem] mb-xxs" src={icon} alt="" />
      <p className="text-center">{tooltip}</p>
    </div>
  );
}

export default SkillIcon;
