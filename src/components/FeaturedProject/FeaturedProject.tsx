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
    <div className="rounded-lg max-w-[40rem] drop-shadow-lg border border-slate-600">
      <a href={liveSite}>
        <img src={image} alt={title} className="rounded-t-lg" />
      </a>
      <div className="p-sm">
        <h2 className="text-xl font-display mb-xs">{title}</h2>
        <p className="text-sm mb-sm">{description}</p>
        <ul className="flex gap-sm text-gray-500 mb-md">
          {techStack.map((tech) => (
            <li className="text-xs">{tech}</li>
          ))}
        </ul>
        <div className="flex gap-xxs small-mobile:gap-0">
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
              GitHub
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProject;
