import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaPencilAlt, FaArchive } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  // const [sortOrder, setSortOrder] = useState('');

  useEffect(() => {
    fetch(`https://car-toy-server-three.vercel.app/myToys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
      });
  }, []);

  const handleAscending = () => {
    fetch(`https://car-toy-server-three.vercel.app/myToys/${user?.email}?sort=asc`)
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
      });
  };
  const handleDescending = () => {
    fetch(
      `https://car-toy-server-three.vercel.app/myToys/${user?.email}?sort=desc`
    )
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
      });
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't Delete this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://car-toy-server-three.vercel.app/allToys/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaining = myToys.filter((myToy) => myToy._id !== id);
              setMyToys(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="pb-52">
      <Helmet>
        <title>ToyLand | My Toys</title>
      </Helmet>

      <h1 className="text-5xl font-CreteRound font-bold text-center pt-16">My Toys</h1>
      <div>
        <div className="overflow-x-auto py-10">
          <div className="flex justify-center gap-2 pb-3 items-center">
            Sort By: 
            <button
              className=" bg-customNavy rounded-lg py-1 px-3 text-white"
              onClick={handleAscending}
            >
              Low to High
            </button>
            <button
              className=" bg-customNavy rounded-lg py-1 px-3 text-white"
              onClick={handleDescending}
            >
              High to Low
            </button>
          </div>
          <table className="table table-zebra w-full">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Picture</th>
                <th>Toy Name</th>
                <th>Seller Name</th>
                <th>Sub-category</th>
                <th>Price</th>
                <th>Available Quantity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {myToys.map((toy, index) => (
                <tr key={index} toy={toy}>
                  <th>{index + 1}</th>
                  <td>
                    <img className="h-10 w-10" src={toy.picture} alt="" />
                  </td>
                  <th>{toy.name}</th>
                  <th>{toy.seller_name}</th>
                  <th>{toy.category}</th>
                  <th>$ {toy.price}</th>
                  <th className="text-center">{toy.quantity}</th>
                  <th>
                    <div className="flex  gap-2">
                      <Link to={`/update/${toy._id}`}>
                        <button className="bg-customNavy px-[8px] py-[8px] text-white rounded-md">
                          <FaPencilAlt />
                        </button>
                      </Link>
                      <button
                        onClick={() => handleDelete(toy._id)}
                        className="bg-customNavy px-[8px] py-[8px] text-white rounded-md"
                      >
                        <FaArchive />
                      </button>
                    </div>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyToys;
