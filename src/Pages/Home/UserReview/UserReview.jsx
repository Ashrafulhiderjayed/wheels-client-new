import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import "./UserReview.css";

const UserReview = () => {
  return (
    <div className="container mx-auto">
    <h1 className="text-center text-primary font-extrabold text-7xl sm:text-4xl my-10 p-2 font-CreteRound">Customer Review</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-white">
      <div className="card h-96 p-7 text-center">
        <h2 className="text-3xl font-bold mb-14">Tamim</h2>
        <p className="text-1xl text-justify"> <sup><FaQuoteLeft className="inline-block text-red-500"/></sup> A wide section of toy cars available there. The toy car shop sell high-quality toy cars that are made from durable materials. The website was easy to navigate, and the ordering process was smooth. <sup><FaQuoteRight className="inline-block text-red-500"/></sup></p>
      </div>
      <div className="card h-96 p-7 text-center">
        <h2 className="text-3xl font-bold mb-14">Sakib</h2>
        <p className="text-1xl text-justify"><sup><FaQuoteLeft className="inline-block text-red-500"/></sup> They have affordable toy cars. The toy car shop should only sell high-quality toy cars that are made from durable materials. Overall, a great online shopping experience for toy car enthusiasts like me! <sup><FaQuoteRight className="inline-block text-red-500"/></sup> </p>
      </div>
      <div className="card h-96 p-7 text-center">
        <h2 className="text-3xl font-bold mb-14">Mushfiq</h2>
        <p className="text-1xl text-justify"><sup><FaQuoteLeft className="inline-block text-red-500"/></sup> They are helpful and knowledgeble staff. The toy car shop should only sell high-quality toy cars that are made from durable materials. The website had accurate product descriptions, so I knew exactly what I was getting. <sup><FaQuoteRight className="inline-block text-red-500"/></sup> </p>
      </div>
      <div className="card h-96 p-7 text-center">
        <h2 className="text-3xl font-bold mb-14">Taskin</h2>
        <p className="text-1xl text-justify"><sup><FaQuoteLeft className="inline-block text-red-500"/></sup> I recently discovered this toy car website and was pleasantly surprised by the range of options available. They have durable car toys. The toy car shop should only sell high-quality toy cars that are made from durable materials.  <sup><FaQuoteRight className="inline-block text-red-500"/></sup> </p>
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
