

// // import { useState,useEffect,useRef } from 'react';
// // import { 
// //     // useSelector, 
// //     useDispatch } from 'react-redux';
// // import axios from "axios";
// // import { useSelector } from 'react-redux';
// // import { Typography } from '@mui/material';
// // import { Grid,Box,AppBar,Toolbar } from '@mui/material';
// // import profileSlice from "store/slices/profile";
// // // import marketSlice from "store/slices/market";

// // const Temp = () => {
// //     const dispatch = useDispatch();
// //     const auth = useSelector((state) => state.auth);
// //     const cardList = useSelector((state) => state.profile.cardList);
// //     const furl = 'https://api.binance.com/api/v3/ticker/price/';
// //     const wsUrl = 'wss://stream.binance.com:9443/stream?streams=!miniTicker@arr';
// //     const webSocket = useRef(null);

    

// //     // const connect = () => {
// //     //     webSocket.current = new WebSocket(wsUrl);
// //     //     webSocket.current.onopen = () => {
// //     //       console.log('Connected websocket');
// //     //       //dispatch();
// //     //     };
// //     //     webSocket.current.onmessage = (message) => {
// //     //       const {data} = JSON.parse(message.data);
// //     //       dispatch(marketSlice.actions.setMarket({
// //     //         market: data
// //     //         }));
// //     //     };
// //     //     webSocket.current.onclose = e => {
// //     //       console.log('Socket is closed', e.reason);
// //     //       //dispatch();
// //     //     };
// //     //     webSocket.current.onerror = err => {
// //     //       console.error(
// //     //           'Socket encountered error: ',
// //     //           err.message,
// //     //           'Closing socket'
// //     //       );
// //     //       webSocket.current.close();
// //     //       //dispatch();
// //     //     };
// //     //   }

// //     useEffect(() => {
// //         GetProfile() ;
// //           }, []);

// //     useEffect(() => {
// //     // const fetchData = () => {
// //     //         fetch(furl).then((res) => res.json())
// //     //         .then(data => {
// //     //         //dispatch();
// //     //         connect();
// //     //         })
// //     //         // There is an error while loading on localhost because of CORS-policy, so getting data from mock
// //     //         .catch(err => {
// //     //         //dispatch();
// //     //         connect();
// //     //         });
// //     //         }
// //         // fetchData();
// //         // connect();
// //         }, []);

// // const GetProfile = () => {
// //             axios
// //                 .get('http://127.0.0.1:8000/api/userProfile')
// //                 .then((res) => {
// //                     dispatch(profileSlice.actions.setProfile(
// //                          res.data.filter((i)=>i.user_id===auth.account.id)
// //                         )
// //                     );
// //                 })
// //             }
    
    

// //     // useEffect(() => {
// //     //     GetProfile() ;
// //     //       }, []);
    
// //     // useEffect(() => {
// //     // (async () => {
// //     //     try {
// //     //     const response = await axios.get('http://127.0.0.1:8000/api/userProfile');
// //     //     setProfile( response.data.filter((i)=>i.user_id===auth.account.id));
// //     //     } catch (error) {
// //     //     setError(error.message);
// //     //     } finally {
// //     //     setItems(profile[0].elements)
// //     //     }
// //     // })();
// //     // }, []);

// //     // const GetProfile = async () => {
// //     //     const res = await axios.get
// //     //     setProfile( res.data.filter((i)=>i.user_id===auth.account.id))
        
// //         //}
// //         // setItems( res.data.filter((i)=>i.user_id===auth.account.id))
// //     //     .then((res) => setItems( res.data.filter((i)=>i.user_id===auth.account.id)))
// //     //     .then(console.log(items[0].elements))
// //     //     const GetProfile = async () => {
// //     //     const res = await axios.get('http://127.0.0.1:8000/api/userProfile')
// //     //     setItems( res.data.filter((i)=>i.user_id===auth.account.id) )
// //     //     console.log(res)
// //     //     console.log(items[0].elements)
// //     //     return console.log(pelements.map((i)=>i.amount))
// //     return (console.log(cardList.map((i)=>i.symbol)))
// //         // <> <Box sx={{ display: 'flex' }}>

// //         // {profile.profile.profile
// //         //         .map((item)=>(
// //         //     <div key={item.profile_id}>
// //         //         <Typography >{item.symbol}</Typography>
// //         //         <Typography >{item.amount}</Typography>
// //         //     </div>
// //         // ))} 
        
        
// // // </Box></>


    
// // };

// // export default Temp;

// import axios from "axios";
// import React, { useState } from "react";
// import { baseURL, headers } from "./../services/menu.service";

// export const AddMenu = () => {
//   const initialProfileState = {
//     id: null,
//     name: "",
//     description: "",
//     price: 0,
//   };

//   const [menu, setMenu] = useState(initialMenuState);
//   const [submitted, setSubmitted] = useState(false);

//   const handleMenuChange = (e) => {
//     const { name, value } = e.target;
//     setMenu({ ...profile, [name]: value });
//   };

//   const submitMenu = () => {
//     let data = {
//       name: menu.name,
//       description: menu.description,
//       price: menu.price,
//     };

//     axios
//       .post(`${baseURL}/menu/`, data, {
//         headers: {
//           headers,
//         },
//       })
//       .then((response) => {
//         setMenu({
//           id: response.data.id,
//           name: response.data.name,
//           description: response.data.description,
//           price: response.data.price,
//         });
//         setSubmitted(true);
//         console.log(response.data);
//       })
//       .catch((e) => {
//         console.error(e);
//       });
//   };

//   const newProfile = () => {
//     setProfile(initialMenuState);
//     setSubmitted(false);
//   };

//   return (
//     <div className="submit-form">
//       {submitted ? (
//         <div>
//           <div
//             className="alert alert-success alert-dismissible fade show"
//             role="alert"
//           >
//             Menu Added!
//             <button
//               type="button"
//               className="close"
//               data-dismiss="alert"
//               aria-label="Close"
//             >
//               <span aria-hidden="true">&times;</span>
//             </button>
//           </div>
//           <button className="btn btn-success" onClick={newMenu}>
//             Add
//           </button>
//         </div>
//       ) : (
//         <div>
//           <div className="form-group">
//             <label htmlFor="name">Name</label>
//             <input
//               type="text"
//               className="form-control"
//               id="name"
//               required
//               value={menu.name}
//               onChange={handleMenuChange}
//               name="name"
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="description">Description</label>
//             <input
//               type="text"
//               className="form-control"
//               id="description"
//               required
//               value={menu.description}
//               onChange={handleMenuChange}
//               name="description"
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="price">Price</label>
//             <input
//               type="number"
//               className="form-control"
//               id="price"
//               required
//               value={menu.price}
//               onChange={handleMenuChange}
//               name="price"
//             />
//           </div>

//           <button
//             type="submit"
//             onClick={submitMenu}
//             className="btn btn-success mt-2"
//           >
//             Submit
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };