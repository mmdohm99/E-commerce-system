import { Container, Typography } from "@mui/material";
import Slider from "../components/Carousel";
import Imagelist from "../components/Imagelist";
import Sidcontent from "../components/Sidecontent";
import Grid from "../components/GridComponent";
import Sectioncards from '../components/SectionCards'
import Newproducts from '../components/Newproducts'
import Footer from '../components/Footer'
import Subscribe from "../components/Subscribe";

const Home = () => {
    return (  
        <>
            <Slider />

            <section style={{backgroundColor: "#f7f7f9", padding: '20px'}}>
                <Container style={{display: 'flex', justifyContent: 'space-around', alignItems:'center',marginTop: '30px'}}>
                    <Imagelist />
                    <Sidcontent />
                </Container>
            </section>

            <section style={{marginTop: '30px', marginBottom: '30px', padding: '20px'}}>
                <Typography variant="h3" component="div" gutterBottom style={{textAlign: 'center'}}>
                    Gaming
                </Typography>
                <Typography variant="div" component="p" gutterBottom style={{textAlign: 'center'}}>
                    Playstation 4
                </Typography>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems:'center', marginLeft:'20px', marginRight: '20px'}}>
                    <Sectioncards style={{marginLeft: '10px'}} />
                </div>
            </section>
            
            <section style={{backgroundColor: "#f7f7f9", padding: '20px'}}>
                <Container >
                    <Grid  />
                </Container>
            </section>

            <section style={{marginTop: '30px'}}>
                <Typography variant="h3" component="div" gutterBottom style={{textAlign: 'center'}}>
                    New Products
                </Typography>
                <Typography variant="h5" component="div" gutterBottom style={{textAlign: 'center'}}>
                    See Hot Deals...!!
                </Typography>
                <Container>
                    <Newproducts style={{marginLeft:'-10px'}} />
                </Container>
            </section>

            <section>
                <Subscribe />
            </section>

            <footer style={{backgroundColor: '#000000c2', color: 'white', padding: '20px'}}>
                <Container>
                    <Footer />
                </Container>
            </footer>
        </>
    );
}

export default Home;