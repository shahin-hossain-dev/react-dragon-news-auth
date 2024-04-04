import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const NewsCard = ({ news }) => {
  const { _id, image_url, title, details } = news;
  console.log(news);
  return (
    <div className="mb-5">
      <div className="card rounded-none">
        <figure>
          <img src={image_url} alt="Shoes" />
        </figure>
        <div className="card-body px-0">
          <h2 className="card-title">{title}</h2>
          <p>
            {details.length > 200 ? (
              <>
                {details.slice(0, 300)}...
                <Link to={`/news/${_id}`} className="text-rose-500">
                  Read More
                </Link>
              </>
            ) : (
              details
            )}
          </p>
        </div>
      </div>
    </div>
  );
};
NewsCard.propTypes = {
  news: PropTypes.object,
};
export default NewsCard;
