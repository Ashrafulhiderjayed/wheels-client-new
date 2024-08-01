import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./AllToys.css";
import { Helmet } from "react-helmet-async";

const AllToys = () => {
  const [allToys, setAllToys] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetch(`https://car-toy-server-three.vercel.app/allToys`)
      .then((res) => res.json())
      .then((data) => setAllToys(data));
  }, []);
  console.log(allToys);

  const handleSearch = () => {
    fetch(
      `https://car-toy-server-three.vercel.app/toySearchByName/${searchText}`
    )
      .then((res) => res.json())
      .then((data) => {
        setAllToys(data);
      });
  };

  return (
    <div className="py-16">
      <Helmet>
        <title>WHEELS | All Toys</title>
      </Helmet>
      <h1 className="font-CreteRound text-5xl text-yellow-500 font-bold text-center">
        All Toys
      </h1>
      <div className="text-center">
        <input
          className="md:w-2/5 py-2 mt-5 outline-none border border-customNavy px-3 rounded-md "
          onChange={(event) => setSearchText(event.target.value)}
          type="text"
          name="search"
          id=""
        />
        <button
          onClick={handleSearch}
          className="bg-customNavy px-[22px] py-[9px] text-white font-bold rounded-md"
        >
          Search
        </button>
      </div>
      <div>
        <div className="overflow-x-auto py-10">
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th className="bg-yellow-400 font-extrabold"></th>
                <th className="bg-yellow-400 font-extrabold">Toy Name</th>
                <th className="bg-yellow-400 font-extrabold">Seller Name</th>
                <th className="bg-yellow-400 font-extrabold">Sub-category</th>
                <th className="bg-yellow-400 font-extrabold">Price</th>
                <th className="bg-yellow-400 font-extrabold">
                  Available Quantity
                </th>
                <th className="bg-yellow-400 font-extrabold">Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {allToys.map((toy, index) => (
                <tr key={index} toy={toy}>
                  <th>{index + 1}</th>
                  <th>{toy.name}</th>
                  <th>{toy.seller_name}</th>
                  <th>{toy.category}</th>
                  <th>$ {toy.price}</th>
                  <th className="text-center">{toy.quantity}</th>
                  <th>
                    <Link to={`/toy/${toy._id}`}>
                      <button className="bg-customNavy px-4 py-2 text-white rounded-md">
                        View Details
                      </button>
                    </Link>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="text-center">
        hisalkj
        <select className="select select-primary max-w-xs">
          {/* <option disabled selected>What is the best TV show?</option> */}
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
          <option value="50">40</option>
        </select>
      </div>
    </div>
  );
};

export default AllToys;
