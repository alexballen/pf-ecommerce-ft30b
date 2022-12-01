import React, { useEffect } from "react";
import { getUserFavorites } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import Card from "../card/Card";

const Favorites = () =>
{
    const dispatch = useDispatch();
    const { favorites, loggedUser, isAuthenticated } = useSelector((state) => state.user);


    useEffect(() =>
    {
        if (isAuthenticated)
            dispatch(getUserFavorites(loggedUser.id));
    }, [isAuthenticated]);

    return (

        <div>
            {favorites.map((e, i) =>
            {
                return (
                    <div key={i}>
                        <Card
                            id={e.id}
                            image={e.photos[0].url}
                            brand={e.brand.name}
                            name={e.name}
                            unitPrice={e.unitPrice}
                        />
                    </div>
                )
            })}
        </div>
    )



};

export default Favorites;
