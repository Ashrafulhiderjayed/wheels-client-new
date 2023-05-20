import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import "./UserReview.css";

const UserReview = () => {
  return (
    <div className="container mx-auto">
    <h1 className="text-center text-primary font-extrabold text-7xl sm:text-4xl my-10 p-2 font-CreteRound">Customer Review</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-white">
      <div className="card h-96 p-7 text-center">
        <h2 className="text-3xl font-bold mb-9">Tamim</h2>
        <p className="text-2xl text-justify"> <sup><FaQuoteLeft className="inline-block text-red-500"/></sup> A wide section of toy cars available there. The toy car shop sell high-quality toy cars that are made from durable materials. <sup><FaQuoteRight className="inline-block text-red-500"/></sup></p>
      </div>
      <div className="card h-96 p-7 text-center">
        <h2 className="text-3xl font-bold mb-9">Sakib</h2>
        <p className="text-2xl text-justify"><sup><FaQuoteLeft className="inline-block text-red-500"/></sup> They have affordable toy cars. The toy car shop should only sell high-quality toy cars that are made from durable materials. <sup><FaQuoteRight className="inline-block text-red-500"/></sup></p>
      </div>
      <div className="card h-96 p-7 text-center">
        <h2 className="text-3xl font-bold mb-9">Mushfiq</h2>
        <p className="text-2xl text-justify"><sup><FaQuoteLeft className="inline-block text-red-500"/></sup> They are helpful and knowledgeble staff. The toy car shop should only sell high-quality toy cars that are made from durable materials. <sup><FaQuoteRight className="inline-block text-red-500"/></sup></p>
      </div>
      <div className="card h-96 p-7 text-center">
        <h2 className="text-3xl font-bold mb-9">Taskin</h2>
        <p className="text-2xl text-justify"><sup><FaQuoteLeft className="inline-block text-red-500"/></sup> They have durable car toys. The toy car shop should only sell high-quality toy cars that are made from durable materials. <sup><FaQuoteRight className="inline-block text-red-500"/></sup></p>
      </div>
      {/* <div className="bg-red-500 text-white h-64 rounded-tl-lg rounded-t">
        Here is a div
      </div>
      <div className="bg-red-500 text-white h-64 rounded-tr-lg">
        Here is a div
      </div>
      <div className="bg-red-500 text-white h-64 rounded-br-lg">
        Here is a div
      </div>
      <div className="bg-red-500 text-white h-64 rounded-bl-lg">
        Here is a div
      </div> */}
    </div>
    </div>
  );
};

export default UserReview;
