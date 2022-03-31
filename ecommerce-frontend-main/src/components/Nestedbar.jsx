import { AppBar, Container, Toolbar } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { v4 as uuid } from 'uuid'


function NestedBar() {
    let categoryLink = 'http://localhost:3000/api/v1/category'

    const [category, setCategory] = useState([])
    useEffect(()=> {
        axios.get(categoryLink).then((res)=> {
            setCategory(res.data.data.data)
        })
    },[categoryLink]) 

    console.log(category)

    let subCategoryLink = 'http://localhost:3000/api/v1/subCategory'
    const [subCategory, setSubCategory] = useState([])

    useEffect(()=> {
        axios.get(subCategoryLink).then((res)=> {
            setSubCategory(res?.data?.data?.data)
        })
    },[subCategoryLink]) 


    // const subCatoId = subCategory?.filter(sub=> sub?.category?.name === 'clothes') 

    // console.log(subCatoId)

    return (
        <>
            <AppBar position="sticky" style={{ backgroundColor: "rgb(247 247 249)", color:'white' }}>
                <Toolbar>
                <Container style={{ display: 'flex', justifyContent: 'center' }}>

                    {category && category.map(cato => (
                        <div title={cato.name} key={uuid()} id="collasible-nav-dropdown" style={{ color: 'bisque', marginLeft: '30px', fontWeight:'bold' }}>
                            <Link to={`/category/${cato._id}`} style={{marginLeft: '10px', textDecoration: 'none'}}> 
                                {cato.name}
                            </Link>
                        </div>
                    ))}

                </Container>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default NestedBar;
