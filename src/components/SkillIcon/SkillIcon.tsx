interface Props {
  icon: string;
  tooltip: string;
}

function SkillIcon({ icon, tooltip }: Props) {
  return (
    <div className="mx-md my-xxs grayscale hover:filter-none transition ease-in-out hover:scale-110 duration-300">
      <img
        className="m w-[6rem] h-[6rem] grayscale hover:filter-none transition ease-in-out hover:scale-110 duration-300 mb-0 "
        src={icon}
        alt={tooltip}
      />
    </div>
  );
}

export default SkillIcon;
