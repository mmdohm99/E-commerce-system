import { Grid } from '@mantine/core';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';


function Footer() {
    return (
        <>
            <Grid style={{color: 'white', fontFamily: 'arial'}}>
                <Grid.Col span={5}  style={{display: 'flex', flexDirection: 'column', justifyContent:'space-between'}} >
                    <h2 style={{color: 'white'}}>
                        Zmix
                    </h2>
                    <article>   
                        Praesent dapibus, neque id cursus ucibus, tortor neque egestas augue, 
                    </article>
                    <p style={{marginTop:'10px'}}>
                        Got Question? Call us 24/7 <span style={{color: 'bisque', fontWeight: 'bold'}}>+0123 456 789</span>
                    </p>
                    <div style={{marginTop:'10px'}}>
                    payment Method { ' ' }
                        <img src='https://d-themes.com/angular/molla/demo1/assets/images/payments.png' alt='payment way'/>
                    </div>
                </Grid.Col>

                <Grid.Col span={2}>
                    <h5 style={{color: 'white'}}>
                        Information
                    </h5>
                    <section style={{lineHeight: '1', marginTop:' 15px', color: 'bisque'}}>
                        <p style={{ cursor: 'pointer'}}>Sign in</p>
                        <p style={{ cursor: 'pointer'}}>View cart</p>
                        <p style={{ cursor: 'pointer'}}>My wishlist</p>
                        <p style={{ cursor: 'pointer'}}>Track my order</p>
                        <p style={{ cursor: 'pointer'}}>Help</p>
                    </section>
                </Grid.Col>

                <Grid.Col span={3}>
                    <h5 style={{color: 'white'}}>
                        Customer Services
                    </h5>
                    <section style={{lineHeight: '1', marginTop:' 15px', color: 'bisque'}}>
                        <p style={{ cursor: 'pointer'}}>Payment Method</p>
                        <p style={{ cursor: 'pointer'}}>Money-back guarantee!</p>
                        <p style={{ cursor: 'pointer'}}>Returns</p>
                        <p style={{ cursor: 'pointer'}}>Shipping</p>
                        <p style={{ cursor: 'pointer'}}>Terms and conditions</p>
                        <p style={{ cursor: 'pointer'}}>Privacy Policy</p>
                    </section>
                </Grid.Col>

                <Grid.Col span={2}>
                    <h5 style={{color: 'white'}}>
                        My Account
                    </h5>
                    <section style={{lineHeight: '1', marginTop:' 15px', color: 'bisque'}}>
                        <p style={{ cursor: 'pointer'}}>Payment method</p>
                        <p style={{ cursor: 'pointer'}}>Returns</p>
                        <p style={{ cursor: 'pointer'}}>Shipping</p>
                        <p style={{ cursor: 'pointer'}}>Terms and conditions</p>
                        <p style={{ cursor: 'pointer'}}>Privacy Policy</p>
                    </section>
                </Grid.Col>
            </Grid>
            <hr />
            <div>
                <Grid>
                    <Grid.Col span={5}>
                        Copyright &copy; 2022 Molla Store. All Rights Reserved
                    </Grid.Col>
                    <Grid.Col span={3} offset={3}>
                            <span style={{fontWeight:'bold'}} >Social meida</span> <span style={{color: 'bisque'}}>&nbsp; <FacebookIcon /> &nbsp; <TwitterIcon /> &nbsp; <InstagramIcon /> &nbsp; <YouTubeIcon /></span>
                    </Grid.Col>
                </Grid>
            </div>
        </>
    );
}  
export default Footer;