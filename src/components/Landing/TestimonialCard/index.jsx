import React from 'react'

import YellowStars from "../../../assets/star_active.svg";
import WhiteStars from "../../../assets/star_inactive.svg";


const TestimonialCard = (props) => {
    // const propsExample = {
    //     imgLink: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    //     rating: 4,
    //     review: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`,
    //     userName: 'Gisani Miftahul Rahma',
    //     userDetail: 'Owner of My Heart'
    // }

    const yellowStars = [];
    const whiteStars = [];

    for (let index = 0; index < props.userRating; index++) {
        yellowStars.push(<img src={YellowStars} alt="star" className='h-5 w-5' />)
    }
    for (let index = 0; index < 5 - props.userRating; index++) {
        yellowStars.push(<img src={WhiteStars} alt="star" className='h-5 w-5' />)
    }

    return (
        <div className='flex flex-col sm:flex-row gap-6 h-fit'>
            <div className='hidden sm:block sm:h-[240px] sm:w-[240px] md:h-[280px] md:w-[280px] rounded-2xl'>
                <img className='rounded-2xl' src={props.userImg} alt={props.userName} />
            </div>
            <div className='flex flex-col gap-6 sm:gap-0 sm:justify-between sm:w-[592px]'>
                <div className='flex flex-col gap-2'>
                    <div className='flex mr-1'>
                        {yellowStars}
                        {whiteStars}
                    </div>
                    <p className='text-xl text-slate-400'>{props.userReview}</p>
                </div>
                <div className='flex gap-3 items-center'>
                    <div className='sm:hidden h-12 w-12 rounded-xl overflow-hidden '>
                        <img className='' src={props.userImg} alt={props.userName} />
                    </div>
                    <div>
                        <p className='text-xl font-semibold text-slate-700'>{props.userName}</p>
                        <p className='text-slate-400'>{props.userDetail}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestimonialCard