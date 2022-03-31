import React from 'react';
import { RecipeReviewCard } from './Card';
import ListItem from './ListItemComponent'
import '../styles/listComponent.css'

const List = ({products}) => {

    // console.log(list)
    return(
            <>
                <div className='list-wrap'>
                    {products.map((product) => (
                        <RecipeReviewCard className='listItem-wrap' product={product} key={product._id} />
                        // <ListItem product={product} key={product._id} />
                    ))}
                </div>
            </>
    )
}
    


export default List;
