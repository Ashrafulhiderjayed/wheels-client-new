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
            <h1 className='text-3xl font-bold text-center'>Shop By Category</h1>

            <div className='flex justify-center py-5 gap-5 font-semibold items-center text-lg'>
                <div onClick={() => handleTabClick('Baby')} className={`cursor-pointer ${
                activeTab == "Baby" ? "bg-[#757EFA] text-white p-1 rounded-md" : ""
              }`}>Baby Dolls</div>
                <div onClick={() => handleTabClick('Barbie')} className={`cursor-pointer ${
                activeTab == "Barbie" ? " bg-[#757EFA] text-white p-1 rounded-md" : ""
              }`}>Barbie Dolls</div>
                <div onClick={() => handleTabClick('American')} className={`cursor-pointer${
                activeTab == "American" ? " bg-[#757EFA] text-white p-1 rounded-md" : ""
              }`}>American Girls</div>
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