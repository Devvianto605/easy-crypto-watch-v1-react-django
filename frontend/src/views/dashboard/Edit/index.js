import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router";
import axios from "axios";

import { gridSpacing } from 'store/constant';
import authSlice from "store/slices/auth";
import Header from 'layout/MainLayout/Header';
import MinimalLayout from 'layout/MinimalLayout';

// material-ui
import { Grid,Box,AppBar,Toolbar,Card,Divider,Button } from '@mui/material';
import Fab from '@mui/material/Fab';
import LogoutIcon from '@mui/icons-material/Logout';
import { Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from '@mui/material/TextField';
import DoneIcon from '@mui/icons-material/Done';


// ==============================|| DASHBOARD EDIT ||============================== //

const Edit = () => {

    const auth = useSelector((state) => state.auth);
    const initialMenuState = { profile_id : null , user_id : auth.account.id , name : null , symbol : null,amount:null }

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [isLoading, setLoading] = useState(true);
    const [profile, setProfile] = useState([{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}]);
    const [market, setMarket] = useState([{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}]);
    const [newProfile, setNewProfile] = useState(initialMenuState);

    
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

    const handleDone = () => {
        navigate("/dashboard");
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewProfile({ ...newProfile, [name]: value });
      };

    const submitNewProfile = () => {
        let data = {
            user_id: auth.account.id,
            name: newProfile.name,
            symbol: newProfile.symbol,
            amount: newProfile.amount,
        };
    
        axios
          .post('http://localhost:8000/api/userProfile/', data)
          .then((response) => {
            setNewProfile({
                profile_id: response.data.profile_id,
                user_id: response.data.user_id,
                name: response.data.name,
                symbol: response.data.symbol,
                amount: response.data.amount,
            });
            // console.log(response.data);
            window.location.reload();
          })
          .catch((e) => {
            console.error(e);
          });
      };

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
                            
                                {profile.map(i => {
                                    return market.map(j => {
                                            if(j.symbol===i.symbol) {
                                                return (
                                                    <Grid item lg={4} md={6} sm={6} xs={12}>
                                                        <Card sx={{border: 0, pt: 5 , pr: 5 , pl: 5 ,bgcolor:'#e6b400'}}>
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
                                                                <Typography variant="h4" sx={{marginBottom: '12px'}} >${(j.price*i.amount).toFixed(2)}</Typography>
                                                                <Divider />
                                                                    <Grid item lg={12} md={12} sm={12} xs={12}>
                                                                        <Card sx={{border: 0, p: 2 ,bgcolor:'#e6b400'}}>
                                                                            <Box textAlign='center' sx={{m:'2'}}>
                                                                                <Button size="large" onClick={ () => {
                                                                                        axios
                                                                                          .delete(`http://localhost:8000/api/userProfile/${i.profile_id}/`)
                                                                                          .then(() => {
                                                                                            window.location.reload();
                                                                                          })
                                                                                          .catch((e) => {
                                                                                            console.error(e);
                                                                                          });
                                                                                      }}
                                                                                disableElevation variant="contained" color="primary"sx={{ borderRadius: 4 }}>
                                                                                    <DeleteIcon/>
                                                                                </Button>
                                                                            </Box>    
                                                                        </Card>
                                                                </Grid>
                                                            </Box>    
                                                        </Card>
                                                    </Grid>
                                                    )
                                                
                                            }


                                    })
                                    })}

                                                    <Grid item lg={4} md={6} sm={6} xs={12}>
                                                        <Card sx={{border: 0, pt: 5 , pr: 5 , pl: 5 ,bgcolor:'#e6b400'}}>
                                                            <Box sx={{m:'3'}}>
                                                
                                                                <TextField
                                                                    label="Card name"
                                                                    variant="standard"
                                                                    color="warning"
                                                                    focused
                                                                    fullWidth
                                                                    onChange={handleChange}
                                                                    name="name"
                                                                    value={newProfile.name}
                                                                />
                                                                
                                                                <Divider />
                                                                {/* <Typography variant="h4"sx={{marginTop: '6px'}}>Amount held</Typography> */}
                                                                <TextField
                                                                    label="Symbol"
                                                                    variant="standard"
                                                                    color="warning"
                                                                    focused
                                                                    fullWidth
                                                                    onChange={handleChange}
                                                                    name="symbol"
                                                                    value={newProfile.symbol}
                                                                />

                                                                <Divider />
                                                                <TextField
                                                                    label="Amount held"
                                                                    variant="standard"
                                                                    color="warning"
                                                                    focused
                                                                    fullWidth
                                                                    onChange={handleChange}
                                                                    name="amount"
                                                                    value={newProfile.amount}
                                                                    
                                                                />

                                                                <Divider />
                                                                {/* <Typography variant="h4" >Market price</Typography>
                                                                <Typography variant="h4"sx={{marginBottom: '12px'}}>$ ... </Typography>
                                                                <Divider />
                                                                <Typography variant="h4" sx={{marginTop: '6px'}}>Value own</Typography>
                                                                <Typography variant="h4" sx={{marginBottom: '12px'}} >$ ... </Typography>
                                                                <Divider /> */}
                                                                <Grid item lg={12} md={12} sm={12} xs={12}>
                                                                    <Card sx={{border: 0, p: 2 ,bgcolor:'#e6b400'}}>
                                                                        <Box textAlign='center' sx={{m:'2'}}>
                                                                            <Button size="large" onClick={submitNewProfile} disableElevation variant="contained" color="primary"sx={{ borderRadius: 4 }}>
                                                                                <AddIcon/>
                                                                            </Button>
                                                                        </Box>    
                                                                    </Card>
                                                                </Grid>
                                                            </Box>    
                                                        </Card>
                                                    </Grid>
                                                    <Grid item lg={12} md={12} sm={12} xs={12}>
                                                                    <Card sx={{border: 0, p: 2 ,bgcolor:'#e6b400'}}>
                                                                        <Box textAlign='center' sx={{m:'2'}}>
                                                                            <Button fullWidth onClick={handleDone} size="large" disableElevation variant="contained" color="primary"sx={{ borderRadius: 4 }}>
                                                                                <DoneIcon/>
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

export default Edit;
