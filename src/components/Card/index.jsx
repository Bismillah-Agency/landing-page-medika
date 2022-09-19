import React from 'react';
import arrowRight from '../../assets/ic_arrow_right_circle.svg';

const Card = ({ img, title, desc }) => {

    // const img = "https://images.unsplash.com/photo-1644982654131-79f434ac0c6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";
    // const title = "Shayna Online Shop";
    // const desc = "There are many variations of passages of Lorem Ipsum available, but the majority have suffered.";

    return (
        <div className='rounded-xl cursor-pointer p-5 grid-cols-3 hover:shadow-lg hover:scale-105 transition-all'>
            <div className='rounded-2xl md:h-60 h-32 mb-7 w-full overflow-hidden'>
                <img className='object-cover w-full h-full' src={img} alt="img" />
            </div>

            <h5 className='text-slate-700 md:text-xl text-md font-bold mb-1'>{title}</h5>
            <p className='text-slate-400 md:text-lg text-sm font-regular mb-5'>{desc}</p>
            <div className='flex items-stretch'>
                <button className='self-center text-sm mr-2 font-semibold text-orange-400'>Baca Lebih..</button>
                <img src={arrowRight} alt="arrow" />
            </div>
        </div>
    );
}

export default Card;
