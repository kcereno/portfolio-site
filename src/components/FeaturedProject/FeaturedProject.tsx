/* eslint-disable react/require-default-props */
import './FeaturedProject.scss';

interface Props {
  title: string;
  description: string;
  reverse?: boolean;
}

function FeaturedProject({ title, description, reverse = false }: Props) {
  let imgContainerClass;
  let descriptionContainerClass;

  if (reverse) {
    imgContainerClass = 'featured-project-img-cell-reverse';
    descriptionContainerClass = 'featured-project-description-reverse';
  }

  return (
    <div className="featured-project my-md">
      <div className={`${imgContainerClass}`}>
        <img
          className="feautured-project-img"
          src="https://via.placeholder.com/540x320"
          alt=""
        />
      </div>

      <div className={`${descriptionContainerClass}`}>
        <h1 className="mb-xs featured-project-title">{title}</h1>
        <p className="mb-sm featured-project-description">{description}</p>
        <div className="btn-group">
          <button type="button" className="button-8 mr-xxs">
            Visit Site
          </button>
          <button type="button" className="button-8">
            Checkout GitHub
          </button>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProject;
