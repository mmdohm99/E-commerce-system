import { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import axios from "axios";

const Slider = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3000/api/v1/hero").then((res) => {
            setData(res.data.data.data);
        });
    }, []);
    console.log(data)

    return (
        <>
            <Carousel>
                {data?.map(item => (
                        <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100"
                            src={item.image}
                            alt="First slide"
                            style={{height: '575px'}}
                        />
                        <Carousel.Caption>
                            <h3>{item.title}</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    ))}
            </Carousel>
        </>
    )
};

export default Slider;
