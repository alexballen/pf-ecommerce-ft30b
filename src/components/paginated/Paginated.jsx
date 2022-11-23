import React from "react";

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
                <a
                  className="w-7 p-0 hover:bg-teal-400 active:bg-teal-700 focus:outline-none focus:ring focus:ring-teal-400 text-xl "
                  href="/#"
                  onClick={() => paginated(num)}
                >
                  {num}
                </a>
              </li>
            ))}
        </ul>
      </nav>
    </>
  );

  /* return (
    <>
      <nav className="m-2 bg-base-100 pt-5 pr-1 pb-0 pl-5">
        <ul className="text-center list-none">
          {numPages &&
            numPages.map((num) => (
              <li key={num} className="inline-block mr-2 p-0 h-8 w-8">
                <a
                  className="block p-2 rounded-md bg-red-600 mb-5 no-underline text-lime-500"
                  href="#"
                  onClick={() => paginated(num)}
                >
                  {num}
                </a>
              </li>
            ))}
        </ul>
      </nav>
    </>
  ); */
};

export default Paginated;
