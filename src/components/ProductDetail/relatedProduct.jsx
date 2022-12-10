import React from "react"
import { Link } from "react-router-dom"


export function RelatedProduct({product}) {
     const [isLiked, setIsLiked] = React.useState(false)

  function likedHandle() {
    isLiked
        ? document.querySelector(`#favorite`).classList.remove('fill')
        : document.querySelector(`#favorite`).classList.add('fill')
    
      setIsLiked(!isLiked)
    }
    

    
    return (
        <div className='relatedProducts'>
              <div id='muestra3'>
                  <div class='imageContainer'>
                    <Link to={`/Products/${product.id}`}>
                          <img
                          src={product?.photos[0].url}
                          alt='card'
                          className='cardImage'
                            />          
                     </Link>
                      <div class='m3favoriteContainer'>
                          <button
                              onClick={() => likedHandle()}
                              className='likeAndViewButton'
                          >
                              <img
                                  src={
                                      isLiked
                                          ? '/assets/icons/likeFill.svg'
                                          : '/assets/icons/likeEmpty.svg'
                                  }
                                  alt='Favorite'
                                  id={'favorite'}
                              />
                          </button>
                          <div class='addToCart'>
                              <button className='addToCartButton'>
                                  <img
                                      src='/assets/icons/addToCart.svg'
                                      alt='add to cart'
                                  />
                              </button>
                          </div>
                      </div>
                  </div>
                  <div class='detailsZone'>
                      <div class='ButtonsContainer'></div>
                      <div class='productName'>
                        <h1>{product.name}</h1>
                      </div>
                      <div class='price'><h4>$USD 700000</h4></div>
                  </div>
              </div>
          </div>
    )
}