import './SignUp.css';

const SignUp10 = () => {
    return (
    <section>
            <h1 className="text-center text-primary font-bold lg:text-6xl md:text-3xl my-10 p-2 font-CreteRound">Get Discount</h1>

        <section id='discount-background'>
        <div className='flex-col items-center text-center h-full' id='text-container'>
            <h2 className="font-bold my-4 md:text-3xl">SIGN UP AND RECEIVE A <span className="text-primary2">10%</span> DISCOUNT ON YOUR FIRST ORDER!</h2>
            <div className="flex-row justify-around">
                <input className="me-2 rounded-full p-2 text-black" type="email" name="email" id="email" placeholder="Email" required/>
                <button className="bg-primary2 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full ms-2">SUBSCRIBE</button>
            </div>
        </div>
        </section>
    </section>
    );
};

export default SignUp10;