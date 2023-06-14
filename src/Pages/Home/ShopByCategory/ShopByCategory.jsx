import { useEffect, useState } from 'react';
import CategoryDetails from '../../CategoryDetails/CategoryDetails';

const ShopByCategory = () => {
    const [toys, setToys] = useState([]);
    const [activeTab, setActiveTab] = useState('Baby');

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
                <div onClick={() => handleTabClick('Baby')} className={`cursor-pointer ${
                activeTab == "Baby" ? "bg-customNavy text-white p-2 rounded-md" : ""
              }`}>sports car</div>
                <div onClick={() => handleTabClick('Barbie')} className={`cursor-pointer ${
                activeTab == "Barbie" ? "bg-customNavy text-white p-2 rounded-md" : ""
              }`}>fire truck</div>
                <div onClick={() => handleTabClick('American')} className={`cursor-pointer${
                activeTab == "American" ? " bg-customNavy text-white p-2 rounded-md" : ""
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