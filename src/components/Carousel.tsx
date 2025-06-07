'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface CarouselProps {
  items: {
    id: number;
    image: string;
    title?: string;
    description?: string;
  }[];
}

export default function Carousel({ items }: CarouselProps) {
  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="w-full h-[400px]"
      >
        {items.map((item) => (
          <SwiperSlide key={item.id} className="relative">
            <div className="relative w-full h-full">
              <img
                src={item.image}
                alt={item.title || 'Slide image'}
                className="w-full h-full object-cover"
              />
              {(item.title || item.description) && (
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                  {item.title && <h3 className="text-xl font-bold mb-2">{item.title}</h3>}
                  {item.description && <p>{item.description}</p>}
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
} 