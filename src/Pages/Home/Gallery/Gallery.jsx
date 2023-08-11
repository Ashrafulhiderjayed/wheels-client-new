import img1 from '../../../assets/img/g1.jpg';
import img2 from '../../../assets/img/g2.jpg';
import img3 from '../../../assets/img/g3.jpg';
import img4 from '../../../assets/img/g4.jpg';
import img5 from '../../../assets/img/g5.jpg';
import img6 from '../../../assets/img/g6.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Gallery = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  const images = [
    {
        src: img1,
        alt: "img1",
      },
      {
        src: img2,
        alt: "img2",
      },
      {
        src: img3,
        alt: "img3",
      },
      {
        src: img4,
        alt: "img4",
      },
      {
        src: img5,
        alt: "img5",
      },
      {
        src: img6,
        alt: "img6",
      },
  ];


  return (
    <>
    <h1 className="text-center text-primary font-bold lg:text-6xl md:text-3xl my-10 p-2 font-CreteRound">Child Car Gallery</h1>
    <div className="w-full p-5 pb-10 mb-10 gap-5 columns-3 space-y-5">
      {images.map((image) => (
        <img
          data-aos="zoom-in"
          key={image.alt}
          src={image.src}
          alt={image.alt}
          />
        ))}
    </div>
    </>
  );
};

export default Gallery;
