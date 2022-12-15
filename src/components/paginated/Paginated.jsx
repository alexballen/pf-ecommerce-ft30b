import React from "react";
import { Link } from "react-router-dom";

const Paginated = ({ productsByPage, products, paginated }) => {
  const numPages = [];

  for (let i = 1; i <= Math.ceil(products / productsByPage); i++) {
    numPages.push(i);
  }

  return (
    <>
      <nav className="btn-group">
        <ul className="">
          {numPages &&
            numPages.map((num) => (
              <li key={num} className="btn btn-sm px-1">
                <Link
                  className="w-7 p-0 hover:bg-teal-400 active:bg-teal-700 focus:outline-none focus:ring focus:ring-teal-400 text-xl "
                  to="/home/#"
                  onClick={() => paginated(num)}
                >
                  {num}
                </Link>
              </li>
            ))}
        </ul>
      </nav>
    </>
  );
};

export default Paginated;
