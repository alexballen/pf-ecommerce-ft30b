import React from "react";


const Comment = ({
    rating,
    description,
    username
}) =>
{
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
            </div>
        </div>
    )
};

export default Comment;