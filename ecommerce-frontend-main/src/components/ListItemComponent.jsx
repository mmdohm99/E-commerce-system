import React from 'react';
import '../styles/listitem.css';
import { RecipeReviewCard } from './Card';

const ListItem = ({ product }) => {
    return(
        <RecipeReviewCard className='listItem-wrap' product={product} key={product._id} />,
        console.log(product))
};

export default ListItem;

// <div className='listItem-wrap'>
//         <img src={coverSrc} alt='' />
//         <header>
//             <h4>{title}</h4>
//             <span>🌟{rating}</span>
//         </header>
//         <footer>
//             <p>
//                 <b>{serviceTime}</b> <span> Delivery Fee ${deliveryFee}</span>
//             </p>
//             <p>
//                 <b>${price}</b>
//             </p>
//         </footer>
//     </div>