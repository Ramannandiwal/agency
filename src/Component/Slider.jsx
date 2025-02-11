import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const Slider = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{ delay: 1000, disableOnInteraction: false }}
      modules={[Autoplay]}
      allowTouchMove={false}
      className="w-full"
    >
      <SwiperSlide>
        <div className="h-[50vh] md:h-[60vh] lg:h-[70vh] bg-[#8ec63f] flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white py-5 text-3xl md:text-5xl lg:text-6xl font-bold">
            WE ARE EXPERTS
          </h1>
          <p className="font-bold text-white max-w-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam omnis iste ut voluptatum deleniti architecto corporis ipsum ex nihil accusamus.
          </p>
          <button className="bg-[#febd19] mt-5 py-3 px-6 text-sm md:text-lg font-bold rounded-md">
            Read More
          </button>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="h-[50vh] md:h-[60vh] lg:h-[70vh] bg-[#8ec63f] flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white py-5 text-3xl md:text-5xl lg:text-6xl font-bold">
            WE ARE PROFESSIONALS
          </h1>
          <p className="font-bold text-white max-w-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam omnis iste ut voluptatum deleniti architecto corporis ipsum ex nihil accusamus.
          </p>
          <button className="bg-[#febd19] mt-5 py-3 px-6 text-sm md:text-lg font-bold rounded-md">
            Read More
          </button>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="h-[50vh] md:h-[60vh] lg:h-[70vh] bg-[#ff5733] flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white py-5 text-3xl md:text-5xl lg:text-6xl font-bold">
            INNOVATION DRIVEN
          </h1>
          <p className="font-bold text-white max-w-2xl">
            We bring cutting-edge solutions to help businesses grow and succeed in the digital age.
          </p>
          <button className="bg-[#febd19] mt-5 py-3 px-6 text-sm md:text-lg font-bold rounded-md">
            Learn More
          </button>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="h-[50vh] md:h-[60vh] lg:h-[70vh] bg-[#009688] flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white py-5 text-3xl md:text-5xl lg:text-6xl font-bold">
            CUSTOMER CENTRIC
          </h1>
          <p className="font-bold text-white max-w-2xl">
            Our approach is designed to prioritize client satisfaction and create long-lasting partnerships.
          </p>
          <button className="bg-[#febd19] mt-5 py-3 px-6 text-sm md:text-lg font-bold rounded-md">
            Contact Us
          </button>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
