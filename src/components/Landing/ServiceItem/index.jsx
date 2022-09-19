import React from 'react';

const ServiceItem = ({ title, desc, icon }) => {

    // const title = "Company Title";
    // const desc = "There are many variations of passages of Lorem Ipsum available, but the majority have suffered.";

    return (
        <div className='flex flex-col mx-auto items-center p-5'>
            <div className='mb-9'>
                <img className='mx-auto' src={icon} alt="icon" />
            </div>
            <div className='w-60 flex flex-col gap-3'>
                <h5 className='text-center text-xl font-bold'>{title}</h5>
                <p className='text-center text-base text-slate-400'>{desc}</p>
            </div>
        </div>
    );
}

export default ServiceItem;
