import { Grid } from '@mantine/core';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Carousel, Card} from 'react-bootstrap';

function Newproducts() {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3000/api/v1/hero").then((res) => {
            setData(res.data.data.data);
        });
    }, []);
    return (
        <Grid columns={24}>
            <Grid.Col span={18}>
                <Carousel fade controls={false}>
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
            </Grid.Col>


            <Grid.Col span={6}>
                <Card className="bg-dark text-white" style={{height: '100%'}}>
                <Card.Img style={{height: '100%'}} src="https://d-themes.com/angular/molla/demo1/assets/images/home/banners/2-2.jpg" alt="Card image" />
                <Card.ImgOverlay>
                <h3 style={{color: 'white'}}>The Best Choice</h3>
                <Card.Text style={{textAlign:'center', fontSize:'20px'}}>
                    Indigo  $49.99 
                </Card.Text>
                <Card.Text style={{textAlign:'center', fontSize:'20px'}}>
                    Special offer!!
                </Card.Text>
                <Card.Text style={{cursor: 'pointer'}}>Shop Now...</Card.Text>
                </Card.ImgOverlay>
                </Card>
            </Grid.Col>
        </Grid>
    );
}
export default Newproducts;