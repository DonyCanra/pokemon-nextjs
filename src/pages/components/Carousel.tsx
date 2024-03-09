import React from 'react';

function CarouselComponent() {
  return (
    <section className="jumbotron">
      <div id="gallery" className="carousel slide" data-bs-ride="carousel">
        {/* Carousel wrapper */}
        <div className="carousel-inner">
          {/* Item 1 */}
          <div className="carousel-item active">
            <img
              src="https://wallpaperaccess.com/full/463588.jpg"
              className="d-block w-100"
              alt=""
            />
          </div>
          {/* Item 2 */}
          <div className="carousel-item">
            <img
              src="https://mktg-assets.tcgplayer.com/web/promo/2023-06/YGO_BLMR-Most-Expensive_0629_ygo_marketplace-search_desktop.jpg"
              className="d-block w-100"
              alt=""
            />
          </div>
          {/* Item 3 */}
          <div className="carousel-item">
            <img
              src="https://wallpaperaccess.com/full/5721804.jpg"
              className="d-block w-100"
              alt=""
            />
          </div>
        </div>
        {/* Slider controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#gallery" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#gallery" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

    </section>
  );
}

export default CarouselComponent;
