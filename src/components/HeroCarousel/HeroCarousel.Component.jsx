import React, { useState } from 'react'
import { BsBack } from 'react-icons/bs';
import HeroSlider from "react-slick";
import { NextArrow, PrevArrow } from './Arrows.Component';

const HeroCarousel = () => {
  const [ images, setimages ] = useState([
    {
      adult: false,
      backdrop_path: "/vam9VHLZl8tqNwkp1zjEAxIOrkk.jpg",
      genre_ids: [16, 878, 28],
      id: 724989,
      original_language: "en",
      original_title: "Hard Kill",
      overview: "The work of billionaire tech CEO Donovan Chalmers is so valuable that he hires mercenaries to protect it, and a demonic force is born.",
      popularity: 1526.648,
      poster_path: "/ugS5FVfCI3RV0ZwZtBV3HAV75OX.jpg",
      release_date: "2020-10-23",
      title: "Hard Kill",
      video: false,
      vote_average: 5.3,
      vote_count: 132
    },
    {
      adult: false,
      backdrop_path: "/rqgeBNWXas1yrAyXxwi9CahfScx.jpg",
      genre_ids: [53],
      id: 985939,
      original_language: "en",
      original_title: "Fall",
      overview:
        "For best friends Becky and Hunter, life is all about conquering fears and pushing limits. But after they climb 2,000 feet to the top of a remote, abandoned radio tower, they find themselves stranded with no way down. Now Becky and Hunter’s expert climbing skills will be put to the ultimate test as they desperately fight to survive the elements, a lack of supplies, and vertigo-inducing heights.",
      popularity: 6731.327,
      poster_path: "/9f5sIJEgvUpFv0ozfA6TurG4j22.jpg",
      release_date: "2022-08-11",
      title: "Fall",
      video: false,
      vote_average: 7.4,
      vote_count: 346,
    },
    {
      adult: false,
      backdrop_path: "/ugS5FVfCI3RV0ZwZtBV3HAV75OX.jpg",
      genre_ids: [16, 878, 28],
      id: 724989,
      original_language: "en",
      original_title: "Hard Kill",
      overview: "The work of billionaire tech CEO Donovan Chalmers is so valuable that he hires mercenaries to protect it, and a demonic force is born.",
      popularity: 1526.648,
      poster_path: "/ugS5FVfCI3RV0ZwZtBV3HAV75OX.jpg",
      release_date: "2020-10-23",
      title: "Hard Kill",
      video: false,
      vote_average: 5.3,
      vote_count: 132
    }
  ]);
  const settingsLG = {
    dots: true,
    arrows: true,
    slidesToShow: 1,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };
  const settings = {
    dots: true,
    arrows: true,
    slidesToShow: 1,
    infinite: true,
    speed: 250,
    slidesToScroll: 1,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };
  return (
    <>
      <div className="lg:hidden">
        <HeroSlider {...settings}>
          {images.map((image) => {
            return (
              <div className="w-full h-56 md:h-80 py-3">
                <img
                  src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
                  alt=""
                  className="w-full h-full rounded-md object-cover"
                />
              </div>
            );
          })}
        </HeroSlider>
      </div>
      <div className="hidden lg:block">
        <HeroSlider {...settingsLG}>
          {images.map((image, index) => {
            return (
              <div key={index} className="w-full h-96 px-2 py-3">
                <img
                  src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
                  alt={image.title}
                  className="w-full h-full rounded-md object-cover"
                />
              </div>
            );
          })}
        </HeroSlider>
      </div>
    </>
  );
}

export default HeroCarousel;