import { Box, Typography } from "@mui/material"

const Sidcontent = () => {
    return (  
        <Box sx={{ width: '100%', maxWidth: 500 }}>
            <Typography variant="h3" component="div" gutterBottom>
                h3. Heading
            </Typography>
            <Typography variant="subtitle1" gutterBottom component="div">
                subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                blanditiis tenetur
            </Typography>
            <Typography variant="subtitle2" gutterBottom component="div">
                subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                blanditiis tenetur
            </Typography>
            <Typography variant="body1" gutterBottom>
                body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                quasi quidem quibusdam.
            </Typography>

        </Box>
    );
}

export default Sidcontent;