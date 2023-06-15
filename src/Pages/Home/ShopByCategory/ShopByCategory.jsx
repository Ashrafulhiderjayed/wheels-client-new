import { useEffect, useState } from 'react';
import CategoryDetails from '../../CategoryDetails/CategoryDetails';

const ShopByCategory = () => {
    const [toys, setToys] = useState([]);
    const [activeTab, setActiveTab] = useState('Sports');

    const handleTabClick = (tabName) => {
        setActiveTab(tabName)
    }

    useEffect(()=>{
        fetch(`https://car-toy-server-three.vercel.app//toys/${activeTab}`)
        .then(res => res.json())
        .then(data => {
            setToys(data)
        })
    },[activeTab])

    return (
        <div className='pt-16'>
            <h1 className="font-CreteRound text-center text-primary font-extrabold text-5xl my-8">Shop By Category</h1>

            <div className='flex justify-center py-5 gap-5 font-semibold items-center text-lg'>
                <div onClick={() => handleTabClick('Sports')} className={`cursor-pointer ${
                activeTab == "Sports" ? "bg-customNavy text-white p-2 rounded-md" : ""
              }`}>sports car</div>
                <div onClick={() => handleTabClick('Fire')} className={`cursor-pointer ${
                activeTab == "Fire" ? "bg-customNavy text-white p-2 rounded-md" : ""
              }`}>fire truck</div>
                <div onClick={() => handleTabClick('Police')} className={`cursor-pointer${
                activeTab == "Police" ? " bg-customNavy text-white p-2 rounded-md" : ""
              }`}>police car</div>
            </div>
            <div className='grid md:grid-cols-3 gap-5 '>
                {
                    toys.map(toy => <CategoryDetails key={toy._id} toy={toy}></CategoryDetails>)
                }
            </div>
        </div>
    );
};

export default ShopByCategory;