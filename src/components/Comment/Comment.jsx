import React from "react";
import { useSelector } from "react-redux";
import EditComment from "./EditComment";

const Comment = ({
    productId,
    rating,
    description,
    username,
    userId
}) =>
{
    const { isAuthenticated, loggedUser } = useSelector((state) => state.user);
    return (
        <div>
            <div className="w-100 ml-28 border border-slate-200 mt-2 px-2 py-2">

                <span className="title-font text-base font-bold text-slate-700">
                    {username}
                </span>
                <span className="title-font text-base  text-slate-700  ml-4">
                    {description}
                </span>
                <span className="title-font text-base font-bold text-slate-700  ml-4">
                    {rating} ⭐
                </span>
                {isAuthenticated && userId === loggedUser.id ?
                    <a
                        href="#editReview"
                        className="btn ml-2 w-40 text-white text-base  bg-stone-400 hover:bg-stone-500 border-0 focus:outline-none rounded"
                    >
                        Editar comentario
                    </a> :
                    null}
            </div>
            {isAuthenticated && userId === loggedUser.id ?
                <EditComment
                    modalId="editReview"
                    productId={productId}
                    userId={userId}
                    oldDescription={description}
                    oldRating={rating.toString()}
                /> :
                null}
        </div>
    )
};

export default Comment;