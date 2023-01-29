/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/require-default-props */
import './FeaturedProject.scss';

interface Props {
  title: string;
  description: string;
  techStack: string[];
  liveSite?: string;
  code?: string;
  image?: string;
}

function FeaturedProject({
  title,
  description,
  techStack,
  liveSite,
  code,
  image,
}: Props) {
  // eslint-disable-next-line react/self-closing-comp
  return (
    <div className="rounded-lg w-2/5 min-w-[30rem] project1:w-full  rop-shadow-lg border-slate-600 tablet:w-full ">
      <a href={liveSite}>
        <img src={image} alt={title} className="rounded-t-lg " />
      </a>
      <div className="p-md project1:p-sm border-x border-b rounded-b-lg border-gray-600 ">
        <h2 className="text-xl mb-xs font-display">{title}</h2>
        <p className="mb-sm text-gray-300">{description}</p>
        <ul className="flex gap-xs text-gray-500 mb-md">
          {techStack.map((tech) => (
            <li className="text-sm">{tech}</li>
          ))}
        </ul>
        <div className="flex gap-xxs  mb-sm">
          <a href={liveSite}>
            <button type="submit" className="css-button-rounded--rose text-sm">
              Demo
            </button>
          </a>
          <a href={code}>
            <button
              type="submit"
              className="css-button-sliding-to-left--rose text-sm"
            >
              Code
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProject;
