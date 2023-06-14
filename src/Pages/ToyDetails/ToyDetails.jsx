import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import ReactStars from "react-rating-stars-component";
import { useParams } from "react-router-dom";

const ToyDetails = () => {
  const { id } = useParams();
  const [toy, setToy] = useState([]);

  useEffect(() => {
    fetch(`https://car-toy-server-three.vercel.app/toy/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setToy(data);
      });
  }, []);

  return (
    <div className="py-24">
      <Helmet>
        <title>WHEELS | Details</title>
      </Helmet>

      <h1 className="text-center text-4xl font-bold pb-10">Toy Details</h1>
      <div>
        <div className="md:flex border border-black p-5 rounded-lg">
          <div className="md:w-1/2">
            <img
              className="md:w-[400px] mb-5 md:pb-0 md:h-[400px] shadow-lg rounded-lg"
              src={toy.picture}
              alt=""
            />
          </div>
          <div className="md:w-1/2">
            <h4 className="text-3xl">
              <span className="font-bold">Name: </span> {toy.name}
            </h4>
            <hr />
            <h5 className="font-bold text-2xl">Price: $ {toy.price}</h5>
            <div className="flex items-center gap-5">
            <ReactStars
                value={4}
                count={5}
                size={24}
                activeColor="#ffd700"
              />
              {toy.rating}
            </div>
            <h5><span className="font-bold">Sub-Category: </span> {toy.category}</h5>
            <h5><span className="font-bold">Seller Name: </span> {toy.seller_name}</h5>
            <h5><span className="font-bold">Seller Email: </span> {toy.seller_email}</h5>
            <h5><span className="font-bold">Quantity:</span> {toy.quantity}</h5>
            <p><span className="font-bold">Details:</span> {toy.details}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
