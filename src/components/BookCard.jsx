/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom';

const BookCard = ({ _id, title, genre, image, publicationDate }) => {
  return (
    <Link to={`/book-details/${_id}`}>
      <div className="w-72 h-[450px] border-2">
        <img src={image} className="w-72 h-80" />
        <div className="p-3">
          <p className="font-bold">{title.slice(0, 30)}...</p>
          <p>{publicationDate}</p>
          <p>{genre}</p>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
