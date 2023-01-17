import { useEffect, useState ,useRef } from 'react';
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
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const auth = useSelector((state) => state.auth);

    // const [isLoading, setLoading] = useState(true);
    const [profile, setProfile] = useState([{}]);
    const [market, setMarket] = useState();
    const [to, setTo] = useState();
    const [count, setCount] = useState(30);
    const [isPaused, setPause] = useState(false);
    const ws = useRef(null);


    
    const furl = 'https://api.binance.com/api/v3/ticker/price';

    const GetProfile = () => {
        axios
            .get("http://localhost:5000/api/userProfile/")
            // .get("http://52.76.71.228:5000/api/userProfile/")
            .then((res) => setProfile( res.data.filter((i)=>i.user_id===auth.account.id )))
            }
            

    useEffect(() => {
        ws.current = new WebSocket("wss://stream.binance.com:9443/ws/!miniTicker@arr");
        ws.current.onopen = () => console.log("ws opened");
        ws.current.onclose = () => console.log("ws closed");
        const wsCurrent = ws.current;
        return () => {
            wsCurrent.close();
        };
    }, []);
    useEffect(() => {
        if (!ws.current) return;
        ws.current.onmessage = e => {
            const message = JSON.parse(e.data);
            // console.log("e", message);
            setMarket(message)
        };
    }, []);


    // const fetchData = () => {
    //     fetch(furl)
    //     .then((res) => res.json() )
    //     .then((data) => setMarket(data.filter((e => profile.find(obj => obj.symbol === e.symbol))))) //compare two array and select only common value
    //     }
    
    const GetTo = () => {
        fetch('https://api.exchangerate-api.com/v4/latest/usd')
        .then((res) => res.json() )
        .then((data) => setTo( data.rates))
            }         

    useEffect(() => {
        GetProfile();
        console.log(market)
        // setLoading(false);
            }, []);


    useEffect(() => {
        // fetchData();
        if(count>0) {
            GetTo();
            setCount((prev)=>prev-1)
            // console.log(count)
            // console.log(to)
        }
        } );

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
                                {(profile != null&& market != null) 
                                ?
                                profile.map(i => {
                                    return market.map(j => {
                                            if(j.s===i.symbol) {
                                                return (
                                                    <Grid key={i.profile_id} item lg={4} md={6} sm={6} xs={12}>
                                                        <Card key={i.profile_id} sx={{border: 0, p: 5 ,bgcolor:'#e6b400',minWidth: '220px'}}>
                                                            <Box sx={{m:'3'}} key={i.profile_id} >
                                                                
                                                                <Typography variant="h4"sx={{marginBottom: '12px'}}>{i.name}</Typography>
                                                                <Divider />
                                                                <Box 
                                                                    component="img"
                                                                    sx={{
                                                                        maxHeight:'55px',
                                                                        marginTop: '6px'
                                                                    }}
                                                                    alt="Crypto-logo"
                                                                    src={(i.symbol.slice(0, -4)==='SHIB')
                                                                        ? "https://s2.coinmarketcap.com/static/img/coins/64x64/5994.png"
                                                                        : `https://cryptoicons.org/api/icon/${i.symbol.slice(0, -4).toLowerCase()}/55`
                                                                        }
                                                                />
                                                                <Typography variant="h4"sx={{marginTop: '6px'}}>Symbol:</Typography>
                                                                <Typography variant="h4">{i.symbol.slice(0, -4)}</Typography>
                                                                
                                                                <Typography variant="h4">Amount:</Typography>
                                                                <Typography variant="h4"sx={{marginBottom: '6px'}}>{i.amount} {i.symbol.slice(0, -4)}</Typography>
                                                                <Divider />

                                                                <Typography variant="h4"sx={{marginTop: '6px',marginBottom: '6px'}} > 1 {i.symbol.slice(0, -4)} = {(j.c*to[i.to]).toFixed(10)} {i.to}</Typography>
                                                                <Divider />
                                                                <Typography variant="h4" sx={{marginTop: '6px',marginTop: '6px'}}>Value owned:</Typography>
                                                                <Typography variant="h4">{(j.c*i.amount*to[i.to]).toFixed(2)} {i.to}</Typography>
                                                            </Box>    
                                                        </Card>
                                                    </Grid>
                                                    )
                                                
                                            }


                                    })
                                    }
                                    )
                                :  
                                <Backdrop
                                        sx={{ color: '#e6b400', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                                        open={true}
                                    >
                                <CircularProgress color="secondary" />
                              </Backdrop>
                                }
                

                                    <Grid item lg={12} md={12} sm={12} xs={12}>
                                        <Card sx={{border: 0, p: 2 ,bgcolor:'#e6b400',minWidth: '220px'}}>
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
