import React from "react";
import "../../styles/testimonial.css";
import Slider from "react-slick";
import cus01 from "../../images/cus01.jpg";
import cus02 from "../../images/cus02.avif";
import cus03 from "../../images/cus03.jpg";

const Testimonial = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
  };

  return (
    <section>
      <div className="container">
        <div className="slider__content-top">
          <h6 className="subtitle">Testimonial</h6>
          <h2>
            Trusted By More Than{" "}
            <span className="highlight">5000 Customer</span>
          </h2>
        </div>

        <div className="slider__wrapper">
          <Slider {...settings}>
            <div className="slider_item">
              <p className="description">
                CruxSolution built a fantastic expense-tracking app for our
                business. It's intuitive, user-friendly, and has streamlined our
                financial management. The team was professional, responsive, and
                delivered exactly what we needed. Highly recommend them for any
                app development project!
              </p>

              <div className="customer__details">
                <div className="customer__img">
                  <img src={cus01} alt="" />
                </div>

                <div>
                  <h5 className="customer__name">Xyz Org</h5>
                  <p className="description">CEO, ABC</p>
                </div>
              </div>
            </div>

            <div className="slider_item">
              <p className="description">
                CruxSolution’s digital marketing services are outstanding! Their
                strategic approach boosted our online presence significantly.
                The team is professional, responsive, and delivers results.
                Highly recommend for anyone looking to elevate their digital
                marketing game."
              </p>

              <div className="customer__details">
                <div className="customer__img">
                  <img src={cus02} alt="" />
                </div>

                <div>
                  <h5 className="customer__name">Cop Org</h5>
                  <p className="description">CEO, ABC</p>
                </div>
              </div>
            </div>

            <div className="slider_item">
              <p className="description">
                CruxSolution developed an exceptional website for our company.
                The design is sleek, modern, and perfectly aligns with our
                brand. Their team was efficient, communicative, and delivered on
                time. Highly recommend CruxSolution for top-notch web
                development!
              </p>

              <div className="customer__details">
                <div className="customer__img">
                  <img src={cus03} alt="" />
                </div>

                <div>
                  <h5 className="customer__name">Top Org</h5>
                  <p className="description">CEO, ABC</p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
