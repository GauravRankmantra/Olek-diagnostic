import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Sujal Kaintura",
    comment:
      "I had a really good experience here. Best deals, full body checkups, and super friendly staff!",
    rating: 5,
  },
  {
    name: "Naba Hasan",
    comment:
      "State-of-the-art lab in Dehradun, clean environment, polite staff. Highly recommended!",
    rating: 4,
  },
  {
    name: "Naba Hasan",
    comment:
      "State-of-the-art lab in Dehradun, clean environment, polite staff. Highly recommended!",
    rating: 4,
  },
  {
    name: "Naba Hasan",
    comment:
      "State-of-the-art lab in Dehradun, clean environment, polite staff. Highly recommended!",
    rating: 4,
  },
  {
    name: "Anjali Mehra",
    comment:
      "Fast results, accurate testing, and professional doctors. Definitely visiting again!",
    rating: 5,
  },
];

const TestimonialSwiper = () => {
  return (
    <div className="bg-gray-50 py-10 md:py-32 px-4 md:px-12 lg:px-32">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#a01a5a] mb-2 animate-fadeInUp">
          What Our Patients Say
        </h2>
        <p className="text-gray-600 animate-fadeInUp delay-100">
          Honest reviews from our valued patients
        </p>
      </div>

      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="animate-fadeIn"
      >
        {testimonials.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white m-2 rounded-2xl shadow-xl p-6 flex flex-col justify-between h-full transition-transform hover:scale-105 duration-300">
              <FaQuoteLeft className="text-4xl text-[#a01a5a] mb-4" />
              <p className="text-gray-700 text-base leading-relaxed mb-6">
                {review.comment}
              </p>
              <div>
                <h4 className="font-semibold text-lg text-[#363d17]">
                  {review.name}
                </h4>
                <div className="flex gap-1 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`text-sm ${
                        i < review.rating ? "text-yellow-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialSwiper;
