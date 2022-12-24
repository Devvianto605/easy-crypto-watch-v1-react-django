import { useEffect, useState } from 'react';
import axios from "axios";
// material-ui
import { Grid,Box,AppBar,Toolbar,Card,Divider,Button } from '@mui/material';
import { useSelector } from 'react-redux';
import { gridSpacing } from 'store/constant';
import Fab from '@mui/material/Fab';
import LogoutIcon from '@mui/icons-material/Logout';
import authSlice from "store/slices/auth";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { Typography } from '@mui/material';
import Header from 'layout/MainLayout/Header';
import MinimalLayout from 'layout/MinimalLayout';
import EditIcon from '@mui/icons-material/Edit';


// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [isLoading, setLoading] = useState(true);
    const [profile, setProfile] = useState([{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}]);
    const [market, setMarket] = useState([{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}]);

    const auth = useSelector((state) => state.auth);
    const furl = 'https://api.binance.com/api/v3/ticker/price';

    const GetProfile = () => {
        axios
            .get('http://127.0.0.1:8000/api/userProfile')
            .then((res) => setProfile( res.data.filter((i)=>i.user_id===auth.account.id )))
            }

    const fetchData = () => {
        fetch(furl)
        .then((res) => res.json() )
        .then((data) => setMarket(data.filter((i)=>(i.symbol===profile[0].symbol||i.symbol===profile[1].symbol))))
        }
            

    useEffect(() => {
        GetProfile();
        setLoading(false);
        
            }, []);


    useEffect(() => {
        fetchData();
        });

    const handleLogout = () => {
        dispatch(authSlice.actions.setLogout());
        navigate("/auth/login");
    }

    const handleEdit = () => {
        navigate("/dashboard/edit");
    }
    // market.filter((i)=>(i.symbol===profile[0].symbol||i.symbol===profile[1].symbol))
    return (
        // <ul>
        // {profile.map(i => {
        //   return market.map(j => {
        //         if(j.symbol==i.symbol) {
        //             return (
                        
        //                 <li><p>{j.symbol}</p>
        //                 <p>amount {i.amount}</p>
        //                 <p>price {j.price}</p>
        //                 <p>value {j.price*i.amount}</p>
                        
        //                 </li>
        //                 )
                    
        //         }


        // })
        // })}
        // </ul>


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
                            
                                {profile.map(i => {
                                    return market.map(j => {
                                            if(j.symbol===i.symbol) {
                                                return (
                                                    <Grid item lg={4} md={6} sm={6} xs={12}>
                                                        <Card sx={{border: 0, p: 5 ,bgcolor:'#e6b400'}}>
                                                            <Box sx={{m:'3'}}>
                                                                <Typography variant="h4"sx={{marginBottom: '12px'}}>{i.name}</Typography>
                                                                <Divider />
                                                                <Typography variant="h4"sx={{marginTop: '6px'}}>Symbol:</Typography>
                                                                <Typography variant="h4">{i.symbol}</Typography>
                                                                <Divider />
                                                                <Typography variant="h4"sx={{marginTop: '6px'}}>Amount held:</Typography>
                                                                <Typography variant="h4">{i.amount}</Typography>
                                                                <Typography variant="h4" >Market price:</Typography>
                                                                <Typography variant="h4"sx={{marginBottom: '12px'}}>${j.price}</Typography>
                                                                <Divider />
                                                                <Typography variant="h4" sx={{marginTop: '6px'}}>Value own:</Typography>
                                                                <Typography variant="h4">${(j.price*i.amount).toFixed(2)}</Typography>
                                                            </Box>    
                                                        </Card>
                                                    </Grid>
                                                    )
                                                
                                            }


                                    })
                                    })}

                                    <Grid item lg={12} md={12} sm={12} xs={12}>
                                        <Card sx={{border: 0, p: 2 ,bgcolor:'#e6b400'}}>
                                            <Box textAlign='center' sx={{m:'3'}}>
                                                <Button size="large" fullWidth onClick={handleEdit} disableElevation variant="contained" color="primary"sx={{ borderRadius: 4 }}>
                                                    <EditIcon/>
                                                </Button>
                                            </Box>    
                                        </Card>
                                    </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default Dashboard;
