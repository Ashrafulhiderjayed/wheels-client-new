import { Tilt } from 'react-tilt';
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

  const defaultOptions = {
    reverse:        false,  // reverse the tilt direction
    max:            35,     // max tilt rotation (degrees)
    perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
    speed:          1000,   // Speed of the enter/exit transition
    transition:     true,   // Set a transition on enter/exit.
    axis:           null,   // What axis should be disabled. Can be X or Y.
    reset:          true,    // If the tilt effect has to be reset on exit.
    easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
  }

  return (
    <>
    <h1 className="font-CreteRound text-center text-primary font-extrabold text-6xl my-8">Gallery</h1>
    <div className="w-full p-5 pb-10 mb-10 gap-5 columns-3 space-y-5">
      {images.map((image) => (
        <Tilt options={defaultOptions} style={{ }}>
        <img
          key={image.src}
          src={image.src}
          alt={image.alt}
          />
          </Tilt>
        ))}
    </div>
    </>
  );
};

export default Gallery;
