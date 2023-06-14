import { Helmet } from "react-helmet";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateToy = () => {
    const {id} = useParams()

    const defaultData = useLoaderData();

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const picture = form.photoUrl.value;
    const quantity = form.quantity.value;
    const details = form.details.value;
    const updateData = { name, price, rating, picture, quantity, details };
    console.log(updateData);
    console.log(id);

    fetch(`https://car-toy-server-three.vercel.app/allToys/${id}`, {

      method: "PATCH",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(updateData)

    })
    .then(res => res.json())
    .then(data => {
      if(data.modifiedCount > 0){
        Swal.fire({
          title: 'Success!',
          text: 'Toy Updated Successfully',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
      }
    })


  };

  return (
    <div className="pb-10">
      <Helmet>
        <title>WHEELS | Update Toy</title>
      </Helmet>

      <h1 className=" pt-16 text-4xl font-bold text-center">Update A Toy</h1>

      <div className="w-3/4 mx-auto py-10 shadow-xl p-5">
        <form onSubmit={handleUpdate}>
          <div className="md:flex gap-5 pb-5">
            <div className="w-full">
              <label htmlFor="toyName">ToyName</label> <br />
              <input
                type="text"
                placeholder="Toy Name"
                name="name"
                id="toyName"
                defaultValue={defaultData.name}
                className="w-full py-1 outline-none border border-[#757efa]"
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
                defaultValue={defaultData.picture}
                className="w-full py-1 outline-none border border-[#757efa]"
              />
            </div>
          </div>
          <div className="md:flex gap-5 pb-5">
            <div className="w-full">
              <label htmlFor="price">Price</label> <br />
              <input
                type="text"
                placeholder="Price"
                name="price"
                id="price"
                defaultValue={defaultData.price}
                className="w-full py-1 outline-none border border-[#757efa]"
              />
            </div>
            <div className="w-full">
              <label htmlFor="quantity">Available Quantity</label> <br />
              <input
                type="text"
                placeholder="Available Quantity"
                name="quantity"
                id="quantity"
                defaultValue={defaultData.quantity}
                className="w-full py-1 outline-none border border-[#757efa]"
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
                defaultValue={defaultData.rating}
                className="w-full py-1 outline-none border border-[#757efa]"
              />
            </div>
          </div>
          <div>
            <textarea
              className="w-full mb-5 outline-none border border-[#757efa]"
              name="details"
              cols="70"
              rows="5"
              defaultValue={defaultData.details}
            ></textarea>
          </div>
          <button
            className="bg-[#757EFA] px-[20px] py-[8px] text-white rounded-md w-full"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateToy;
