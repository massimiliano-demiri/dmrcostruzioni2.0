"use client";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { certifications } from "@/lib/site-data";

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
  responsive: [
    { breakpoint: 768, settings: { slidesToShow: 2 } },
    { breakpoint: 480, settings: { slidesToShow: 1 } },
  ],
};

export default function CertificationsSlider() {
  return (
    <Slider {...sliderSettings}>
      {certifications.map((src, index) => (
        <div key={src} className="px-4">
          <div className="relative h-40 bg-white rounded-lg shadow-md flex items-center justify-center p-4">
            <Image
              src={src}
              alt={`Certificazione ${index + 1}`}
              width={180}
              height={120}
              className="object-contain max-h-full w-auto h-auto"
            />
          </div>
        </div>
      ))}
    </Slider>
  );
}
