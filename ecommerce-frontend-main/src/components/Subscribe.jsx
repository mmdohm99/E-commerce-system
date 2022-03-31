import { Card, InputGroup, FormControl } from "react-bootstrap";


const Subscribe = () => {
    return (
        <Card  style={{border:'none', outLine:'none', width:'100%'}}>
            <Card.Img 
                src="https://static.vecteezy.com/system/resources/previews/001/370/039/non_2x/online-shopping-concept-with-mobile-phone-free-vector.jpg" 
                alt="Card image"
                style={{height: '300px'}}
            />
            <Card.ImgOverlay style ={{textAlign: 'center', color: '#444', marginTop: '140px', fontWeight: 'bolder'}}>
                <div style={{fontWeight:'900'}}>
                    <Card.Title>Get The Latest Deals</Card.Title>
                    <Card.Text>and receive $20 coupon for first shopping</Card.Text>
                </div>
                <Card.Text>
                    <InputGroup className="mb-3" style={{width: '700px', color: '#444', margin: '0 auto'}}>
                        <FormControl
                            placeholder="Enter your email address"
                            aria-label="Recipient's email address"
                            aria-describedby="basic-addon2"
                            
                        />
                        <InputGroup.Text id="basic-addon2">subscribe</InputGroup.Text>
                    </InputGroup>
                </Card.Text>
            </Card.ImgOverlay>
        </Card>
    );
};

export default Subscribe;
