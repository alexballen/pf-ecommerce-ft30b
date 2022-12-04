import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import UserCart from "../Cart/UserCart";
import { useSelector } from "react-redux";
const Nav = () => {
  const [loged, setloged] = React.useState(false);
  const { loggedUser } = useSelector((state) => state.user);
  const { isAuthenticated, logout, loginWithPopup, user } = useAuth0();
  console.log(user);
  return (
    <>
      <div className="navbar bg-white " style={{ width: "100%" }}>
        <div style={{ width: "fit-content" }}>
          <Link to={"/"} style={{ width: "fit-content" }}>
            <img
              className="ml-4"
              style={{
                width: "14em",
                height: "fit-content",
                objectFit: "cover",
              }}
              src="/assets/images/HCoutureLogo.png"
              alt=""
            />
          </Link>
        </div>
        <div className="w-full justify-end mr-5 mt-2">
          {!isAuthenticated && (
            <span
              className="btn btn-ghost normal-case text-base   text-white  bg-stone-400 hover:bg-stone-500"
              onClick={loginWithPopup}
            >
              Iniciar Sesión
            </span>
          )}
        </div>
        {isAuthenticated && <UserCart />}
        {isAuthenticated && (
          <div className="flex-none mr-8 m-2 ">
            <div className="dropdown dropdown-end   ">
              <label
                tabIndex={0}
                className="  btn btn-ghost btn-circle  avatar"
              >
                {loggedUser.photo ? (
                  <div className="w-10 rounded-full">
                    <img src={loggedUser.photo.url} alt="profilepicture" />
                  </div>
                ) : (
                  <div className="w-10 rounded-full">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUemgh2Unk-2K8MrXuSRmawDNdccYPxRcCCQ&usqp=CAU"
                      alt="profilepicture"
                    />
                  </div>
                )}

                <span className="justify-between text-black">
                  {user.name ? user.name : user.nickname}
                </span>
              </label>
              {/* active mediante log in o inactivemediante log out */}
              <ul className="menu    menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <Link to={"/Profile"}>
                  <li>
                    <span className="justify-between text-xl  ">Perfil</span>
                  </li>
                </Link>

                <Link to={"/favorites"}>
                  <li>
                    <span className="justify-between text-xl  ">
                      Mis favoritos
                    </span>
                  </li>
                </Link>

                <Link to={"/Historial"}>
                  <li>
                    <span className="justify-between text-xl  ">
                      Mis compras
                    </span>
                  </li>
                </Link>
                <Link to={"/Settings"}>
                  <li>
                    <span className="justify-between text-xl  ">
                      Editar perfil
                    </span>
                  </li>
                </Link>
                <li>
                  <button className="text-xl" onClick={logout}>
                    Cerrar Sesión
                  </button>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
      <Outlet />
    </>
  );
};

export default Nav;
