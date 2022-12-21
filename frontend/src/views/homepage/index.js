// material-ui
import { Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import { styled, useTheme } from '@mui/material/styles';
import Header from 'layout/MainLayout/Header';
import MinimalLayout from 'layout/MinimalLayout';
import { AppBar, Box, CssBaseline, Toolbar, useMediaQuery,Grid,Button } from '@mui/material';
import AnimateButton from 'ui-component/extended/AnimateButton';



// ==============================|| SAMPLE PAGE ||============================== //

const HomePage = () => {
    const theme = useTheme();
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
                        Create simple real-time crypto movement dashboard and share easily!
                    </Typography>
                    <Box sx={{ m: 18 }} />
                    <Typography variant="h3" align='center' >
                        Create virtual wallet to track movement of crypto market and share to your friend or family 
                    </Typography>
                    <Typography variant="h3" align='center' >
                        to help track your/their fund without having to risk any misclick!
                    </Typography>
                    <Box sx={{ m: 10 }} />
                    <Box sx={{ mt: 2 }} textAlign='center'>
                            <AnimateButton>
                                <Button
                                    size="large"
                                    type="submit"
                                    variant="contained"
                                    color="secondary"
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
                                >
                                    Sign up
                                </Button>
                            </AnimateButton>
                            
                        </Box>
                </Box>
        </Box>
    </>
);
}

export default HomePage;
