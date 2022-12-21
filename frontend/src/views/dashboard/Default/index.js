import { useEffect, useState } from 'react';

// material-ui
import { Grid,Box,AppBar,Toolbar } from '@mui/material';

// project imports
import EarningCard from './EarningCard';
import PopularCard from './PopularCard';
import TotalOrderLineChartCard from './TotalOrderLineChartCard';
import TotalIncomeDarkCard from './TotalIncomeDarkCard';
import TotalIncomeLightCard from './TotalIncomeLightCard';
import TotalGrowthBarChart from './TotalGrowthBarChart';
import { gridSpacing } from 'store/constant';
import Fab from '@mui/material/Fab';
// import AddIcon from '@mui/icons-material/Add';
import LogoutIcon from '@mui/icons-material/Logout';
import authSlice from "store/slices/auth";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";

import Header from 'layout/MainLayout/Header';
import MinimalLayout from 'layout/MinimalLayout';


// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(authSlice.actions.setLogout());
        navigate("/auth/login");
    }

    return (
        <Box sx={{ display: 'flex' }}>
            <MinimalLayout/>
            <AppBar
                enableColorOnDark
                position="fixed"
                color="inherit"
                elevation={0}
                sx={{
                    bgcolor: 'transparent',
                }}
            >
                <Toolbar>
                    <Header  />
                </Toolbar>
                <Fab    
                    size="big" color="secondary" aria-label="add" position="fixed" 
                    onClick={handleLogout}
                    sx={{
                        borderRadius: 0,
                        borderTopLeftRadius: '50%',
                        borderBottomLeftRadius: '50%',
                        borderTopRightRadius: '50%',
                        borderBottomRightRadius: '4px',
                        top: '7%',
                        position: 'fixed',
                        right: 10,
                    }}>
                    <LogoutIcon />
                </Fab>
            </AppBar>
            <Box sx={{
                marginTop: {md:'128px',xs:'128px'}, 
                display: 'block',
                padding: '25px' ,
                margin: 'auto'

            }}>
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12}>
                        <Grid container spacing={gridSpacing}>
                            <Grid item lg={4} md={6} sm={6} xs={12}>
                                <EarningCard isLoading={isLoading} />
                            </Grid>
                            <Grid item lg={4} md={6} sm={6} xs={12}>
                                <TotalOrderLineChartCard isLoading={isLoading} />
                            </Grid>
                            <Grid item lg={4} md={12} sm={12} xs={12}>
                                <Grid container spacing={gridSpacing}>
                                    <Grid item sm={6} xs={12} md={6} lg={12}>
                                        <TotalIncomeDarkCard isLoading={isLoading} />
                                    </Grid>
                                    <Grid item sm={6} xs={12} md={6} lg={12}>
                                        <TotalIncomeLightCard isLoading={isLoading} />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={gridSpacing}>
                            <Grid item xs={12} md={8}>
                                <TotalGrowthBarChart isLoading={isLoading} />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <PopularCard isLoading={isLoading} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default Dashboard;
