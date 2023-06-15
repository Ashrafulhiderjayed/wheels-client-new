

const Blogs = () => {
  return (
    <div className="container mx-auto py-8">
            <h1 className="text-center text-primary font-extrabold text-7xl sm:text-4xl my-10 p-2 font-CreteRound">WHEELS Blogs</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
        <div className="bg-white rounded-lg shadow-lg p-4">
          <img
            src="https://www.loginradius.com/blog/static/395429ed9397d1de86cac90d1168da9a/03979/coverImage.png"
            alt="Blog 1"
            className="w-full h-80 object-cover mb-4 rounded"
          />
          <h3 className="text-xl font-semibold mb-2">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h3>
          <p className="text-gray-600">
          An access token is a short-lived token that is used to access protected resources. A refresh token is a longer-lived token that can be used to get a new access token when the old one expires. Both tokens are typically stored in the browser's local storage or cookies.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-4">
          <img
            src="https://editor.analyticsvidhya.com/uploads/77021medium.jpeg"
            alt="Blog 2"
            className="w-full h-80 object-cover mb-4 rounded"
          />
          <h2 className="text-xl font-semibold mb-2">Compare SQL and NoSQL databases?</h2>
          <p className="text-gray-600">
          SQL and NoSQL databases are both used to store data, but they have different strengths and weaknesses. SQL databases are good for storing data in a relational format, while NoSQL databases are good for storing data in a non-relational format.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-4">
          <img
            src="https://www.rlogical.com/wp-content/uploads/2023/03/Rlogical-Blog-Images-thumbnail.webp"
            alt="Blog 3"
            className="w-full h-80 object-cover mb-4 rounded"
          />
          <h2 className="text-xl font-semibold mb-2">What is express js? What is Nest JS?</h2>
          <p className="text-gray-600">
          Express is a popular back-end web framework for Node.js. It is easy to use and provides a lot of features out of the box. Nest is a more modern framework that is built on top of Express. It provides a lot of features that make it easier to build complex web applications.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-4">
          <img
            src="https://webimages.mongodb.com/_com_assets/cms/kuzt9r42or1fxvlq2-Meta_Generic.png"
            alt="Blog 4"
            className="w-full h-80 object-cover mb-4 rounded"
          />
          <h2 className="text-xl font-semibold mb-2">What is MongoDB aggregate and how does it work?</h2>
          <p className="text-gray-600">
          MongoDB aggregate is a powerful tool that can be used to perform complex queries on MongoDB data. It allows you to use JavaScript to define the aggregation pipeline, which is a series of steps that are used to transform the data.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
