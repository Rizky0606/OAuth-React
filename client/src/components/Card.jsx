import { Link } from "react-router-dom";

const Card = ({ post }) => {
  return (
    <div className="card">
      <Link className="link" to={`/post/${post.id}`}>
        <span className="title">{post.name}</span>
        <img src={post.pictured} alt={post.name} className="img" />
        <p className="desc">{post.description}</p>
        <button className="cardButton">Read More</button>
      </Link>
    </div>
  );
};

export default Card;
