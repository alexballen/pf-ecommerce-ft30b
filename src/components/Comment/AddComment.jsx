/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const AddComment = ({
    modalId
}) =>
{
    return (
        <div class="modal" id={modalId}>
            <div class="modal-box">
                <form>
                    <a href="#" className="btn bg-white border-none hover:bg-white text-stone-500 btn-sm btn-circle absolute right-2 top-2">✕</a>
                    <h3 class="font-bold text-lg">Déjanos tu reseña</h3>
                    <div className="mt-4">
                        <p>Rating:</p>
                        <div className="rating mt-2">
                            <input type="radio" name="rating-2" value="1" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" value="2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" value="3" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" value="4" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" value="5" className="mask mask-star-2 bg-orange-400" />
                        </div>
                    </div>

                    <div className="mt-4">
                        <p>Comentario:</p>
                        <textarea className="mt-2 textarea w-96 border-stone-500" placeholder="Escribe tu comentario aquí"></textarea>
                    </div>
                    <div class="modal-action">
                        <a href="#" class="btn bg-stone-400 hover:bg-stone-500 border-none">Listo</a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddComment;