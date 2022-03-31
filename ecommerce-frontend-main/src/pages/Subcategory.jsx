import axios from "axios"
import { ProductsContext } from "../context/productContext";
import { useEffect, useState } from "react"
import { useContext } from "react";
import { useParams } from "react-router-dom"
import { RecipeReviewCard } from "../components/Card";
const SubcategoryPage = () => {
    const { products } = useContext(ProductsContext);
    const [catego, setCatego] = useState()
    let subCategoryLink = 'http://localhost:3000/api/v1/category'
    const [category, setCategory] = useState([])

    useEffect(()=> {
        axios.get(subCategoryLink).then((res)=> {
            setCategory(res.data.data.data)
        })
    },[subCategoryLink]) 

    const { id } = useParams();
    console.log(category)
    const getOneCato = category?.find(item=> item._id === id)
    console.log(getOneCato)
    console.log(category)
    const hhhh = products?.filter(item => item?.category?.name === getOneCato?.name)
    console.log(hhhh)
    return (  

        <>
        <div className="Container">
            {hhhh.map((product) => (
                <RecipeReviewCard product={product} key={product.id} />
            ))}
        </div>
        </>
    );
}

export default SubcategoryPage;
