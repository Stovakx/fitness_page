import "./testimonials.css";
import fetchData from "../../utils/axios";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import HeadingText from "../HeadingText/HeadingText";
import { FaHeartCircleBolt } from "react-icons/fa6";
import Card from "../Card/Card";

export default function Testimonials() {
  const [testimonials, settesTimonials] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    fetchData("testimonials")
      .then((testimonialsData) => {
        settesTimonials(testimonialsData);
        setErrorMessage("");
      })
      .catch((error) => {
        console.error(error);
        setErrorMessage("Problém při načtení dat");
      });
  }, []);

  return (
    <section className="testimonials">
      <div className="container testimonialsContainer">
        <HeadingText
          icon={<FaHeartCircleBolt />}
          title={"Testimonials"}
          className={"testimonialHeaded"}
        />
        <Swiper
          className="testimonialsWrapper"
          slidesPerView={1}
          spaceBetween={10}
          navigation={true}
          modules={[Navigation]}
          loop={true}
        >
          {testimonials.length > 0 ? (
            testimonials.map(({ id, img, job, name, quote }) => (
              <SwiperSlide key={id}>
                <Card className={"testimonial"}>
                  <div className="">
                    <img src={img} className="testimonialImg" />
                  </div>
                  <h3>{name}</h3>
                  <h5>{job}</h5>
                  <p>{quote}</p>
                </Card>
              </SwiperSlide>
            ))
          ) : (
            <p>{errorMessage || "Loading..."}</p>
          )}
        </Swiper>
      </div>
    </section>
  );
}
