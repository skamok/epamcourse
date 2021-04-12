import PropTypes from 'prop-types';

function Card({card}) {
  return (
    <div>
      
    </div>
  )
};

Card.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number,
    imageUrl: PropTypes.string
  })
};

export default Card;