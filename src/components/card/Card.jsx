import React from "react";
import { Link } from "react-router-dom";

const Card = ({ name, description, image, unitPrice, id }) => {
  return (
    <div className="card card-compact w-96 h-96 bg-base-100 shadow-xl m-8">
      <figure className="mt-5">
        <Link to={`/products/${id}`}>
          <img src={image} alt="Not found" width={350} height={300} />
        </Link>
      </figure>
      <div className="card-body">
        <Link to={`/products/${id}`}>
          <h2 className="card-title">{name}</h2>
        </Link>
        <h3 className="card-title">{`$ ${unitPrice}`}</h3>
        <Link to={`/products/${id}`}>
          <p>{description}</p>
        </Link>

        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
