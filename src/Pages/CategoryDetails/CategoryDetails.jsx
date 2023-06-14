import { Link } from "react-router-dom";
import ReactStars from "react-stars";

const CategoryDetails = ({ toy }) => {
    return (
        <div className="max-w-2xl mx-auto">
        <div className="bg-white shadow-md rounded-lg max-w-sm h-96 flex flex-col justify-between ">
          <div className="flex justify-center">
            <img className="rounded-t-lg p-8 h-60" src={toy.picture} alt="product image" />
          </div>
          <div className="px-5 pb-5">
            <h3 className="text-gray-900 font-semibold text-xl tracking-tight ">
              {toy.name}
            </h3>
            <div className="flex items-center "> <ReactStars value={4} count={5} size={24} activeColor="#ffd700" />
              
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                {toy.rating}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-gray-900 ">
                ${toy.price}
              </span>
              <Link to={`/toy/${toy._id}`} >
                <button  className="bg-[#757EFA] px-[20px] py-[8px] text-white rounded-md">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default CategoryDetails;