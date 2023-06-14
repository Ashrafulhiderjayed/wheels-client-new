import { useContext, useState } from "react";
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";
import { Helmet } from "react-helmet-async";

const AddaToy = () => {
    const {user} = useContext(AuthContext);
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleAddAToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const picture = form.photoUrl.value;
    const category = selectedOption;
    const price = parseFloat(form.price.value);
    const rating = form.rating.value;
    const seller_name = form.sellerName.value;
    const seller_email = form.sellerEmail.value;
    const quantity = form.quantity.value;
    const details = form.details.value;
    const toy = {name,picture,category,price,rating,seller_name,seller_email,quantity,details};
    console.log(toy);

    fetch(`https://car-toy-server-three.vercel.app/addToy`, {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(toy)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.insertedId){
        Swal.fire({
          title: 'Success!',
          text: 'Toy Added Successfully',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
      }
    })

  };

  return (
    <div className="py-16">
      <Helmet>
        <title>WHEELS | Add a toy</title>
      </Helmet>

      <h1 className="text-5xl font-CreteRound font-bold text-center">Add a toy</h1>

      <div className="w-3/4 mx-auto py-10 shadow-xl p-5">
        <form onSubmit={handleAddAToy}>
          <div className="md:flex gap-5 pb-5">
            <div className="w-full">
              <label htmlFor="toyName">ToyName</label> <br />
              <input
                type="text"
                placeholder="Toy Name"
                name="name"
                id="toyName"
                className="w-full py-1 outline-none border border-customNavy"
              />
            </div>
            <div className="w-full">
              <label htmlFor="sellerName">Seller Name</label> <br />
              <input
                type="text"
                placeholder="Seller Name"
                name="sellerName"
                id="sellerName"
                className="w-full py-1 outline-none border border-customNavy"
                defaultValue={user.displayName}
                disabled
              />
            </div>
          </div>
          <div className="md:flex gap-5 pb-5">
            <div className="w-full">
              <label htmlFor="photoUrl">photo Url</label> <br />
              <input
                type="text"
                placeholder="Photo Url"
                name="photoUrl"
                id="photoUrl"
                className="w-full py-1 outline-none border border-customNavy"
              />
            </div>
            <div className="w-full">
              <label htmlFor="sellerEmail">Seller Email</label> <br />
              <input
                type="text"
                placeholder="Seller Name"
                name="sellerEmail"
                id="sellerEmail"
                className="w-full py-1 outline-none border border-customNavy"
                defaultValue={user.email}
                disabled
              />
            </div>
          </div>
          <div className="md:flex gap-5 pb-5">
            <div className="w-full">
              <label htmlFor="price">Price</label> <br />
              <input type="text" placeholder="Price" name="price" id="price" className="w-full py-1 outline-none border border-customNavy"/>
              
            </div>
            <div className="w-full">
              <label htmlFor="quantity">Available Quantity</label> <br />
              <input
                type="text"
                placeholder="Available Quantity"
                name="quantity"
                id="quantity"
                className="w-full py-1 outline-none border border-customNavy"
              />
            </div>
          </div>
          <div className="md:flex gap-5 pb-5">
            <div className="w-full">
              <label htmlFor="rating">Rating</label> <br />
              <input
                type="text"
                placeholder="rating"
                name="rating"
                id="rating"
                className="w-full py-1 outline-none border border-customNavy"
              />
            </div>
            <div className="w-full">
              <label htmlFor="category">Category</label> <br />
              <select
                id="mySelect"
                value={selectedOption}
                onChange={handleSelectChange}
                className="w-full py-1 outline-none border border-customNavy"
              >
                <option value="">-- Select --</option>
                <option value="Baby">Sports Car</option>
                <option value="Barbie">Fire Car</option>
                <option value="American">Police Car</option>
              </select>
            </div>
          </div>
            <div>
              <textarea className="w-full mb-5 outline-none border border-customNavy" name="details" cols="70" rows="5"></textarea>
            </div>
            <button className="btn btn-secondary bg-primary px-80 py-2 text-white rounded-md lg:w-full" type="submit">Submit</button>
        </form>
      </div>
    <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
    {/* Same as */}
    <ToastContainer />
    </div>
  );
};

export default AddaToy;
