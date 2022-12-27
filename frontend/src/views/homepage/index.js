// project imports
import AnimateButton from 'ui-component/extended/AnimateButton';

// material-ui
// import MainCard from 'ui-component/cards/MainCard';
// import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Header from 'layout/MainLayout/Header';
import { useNavigate } from 'react-router-dom';
// import MinimalLayout from 'layout/MinimalLayout';
import { 
    AppBar, 
    Box, 
    // CssBaseline, 
    Toolbar, 
    // useMediaQuery,
    // Grid,
    Button 
} from '@mui/material';


// ==============================|| SAMPLE PAGE ||============================== //

const HomePage = () => {
    const theme = useTheme();
    const navigate = useNavigate();

    const handleSignin = () => {
        navigate("/auth/login");
    }

    const handleSignup = () => {
        navigate("/auth/register");
    }

    return (
    <>
        <Box sx={{ display: 'flex' }}>
            <AppBar
                enableColorOnDark
                position="fixed"
                color="inherit"
                elevation={0}
                sx={{
                    bgcolor: 'transparent',
                    borderRadius: `${theme?.customization?.borderRadius}px`,
                }}
            >
                <Toolbar>
                    <Header  />
                </Toolbar>
            </AppBar>
                <Box sx={{
                    marginTop: {md:'342px',xs:'128px'}, 
                    display: 'block',
                    padding: '25px' ,
                    margin: 'auto'

                }}>
                    <Typography variant="h1" align='center'>
                        Create simple real-time cryptocurrency tracking dashboard easily!
                    </Typography>
                    <Box sx={{ m: 18 }} />
                    <Typography variant="h3" align='center' >
                        Create virtual wallet to track cryptocurrency without having to risk any misclick!
                    </Typography>
                    <Box sx={{ m: 10 }} />
                    <Box sx={{ mt: 2 }} textAlign='center'>
                            <AnimateButton>
                                <Button
                                    size="large"
                                    type="submit"
                                    variant="contained"
                                    color="secondary"
                                    onClick={handleSignin}
                                >
                                    Sign in
                                </Button>
                            </AnimateButton>
                            
                        </Box>
                    <Box sx={{ mt: 2 }} textAlign='center' >
                            <AnimateButton>
                                <Button
                                    size="large"
                                    type="submit"
                                    variant="contained"
                                    color="secondary"
                                    onClick={handleSignup}
                                >
                                    Sign up
                                </Button>
                            </AnimateButton>
                            <Box sx={{ m: 10 }} />
                        </Box>
                </Box>
                
        </Box>
    </>
);
}

export default HomePage;
