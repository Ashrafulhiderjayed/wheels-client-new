import img1 from '../../../assets/img/g1.jpg';
import img2 from '../../../assets/img/g2.jpg';
import img3 from '../../../assets/img/g3.jpg';
import img4 from '../../../assets/img/g4.jpg';
import img5 from '../../../assets/img/g5.jpg';
import img6 from '../../../assets/img/g6.jpg';

const Gallery = () => {
  const images = [
    {
        src: img1,
        alt: "",
      },
      {
        src: img2,
        alt: "",
      },
      {
        src: img3,
        alt: "",
      },
      {
        src: img4,
        alt: "",
      },
      {
        src: img5,
        alt: "",
      },
      {
        src: img6,
        alt: "",
      },
  ];

  return (
    <>
    <h1 className="font-CreteRound text-center text-primary font-extrabold text-6xl my-8">Gallery</h1>
    <div className="w-full p-5 pb-10 mb-10 gap-5 columns-3 space-y-5">
      {images.map((image) => (
        <img
          key={image.src}
          src={image.src}
          alt={image.alt}
        />
      ))}
    </div>
    </>
  );
};

export default Gallery;
