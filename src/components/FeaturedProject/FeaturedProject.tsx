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
  return (
    <div className="featured-project__container mt-md">
      <div className="featured-project__img-cell">
        <img
          className="feautured-project__img object-scale-down  rounded-xl"
          src={image}
          alt=""
        />
      </div>

      <div className="featured-project__description-cell">
        <h1 className="mb-xxs featured-project__title text-xl">{title}</h1>
        <p className="mb-sm featured-project__description text-sm text-gray-400">
          {description}
        </p>
        <ul className="flex gap-5 mb-md featured-project__tech-stack ">
          {techStack.map((tech) => (
            <li className="uppercase text-xs text-gray-500">{tech}</li>
          ))}
        </ul>
        <div className="btn-group">
          <a href={liveSite}>
            <button
              type="button"
              className="css-button-rounded--rose mr-xxs text-sm"
            >
              View Site
            </button>
          </a>
          <a href={code}>
            <button
              type="button"
              className="css-button-sliding-to-left--rose text-sm"
            >
              See Code
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProject;
