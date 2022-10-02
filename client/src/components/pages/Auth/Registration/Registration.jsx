// import { useState } from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import MinorCrashRoundedIcon from '@mui/icons-material/MinorCrashRounded';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { setAuth } from '../../../../redux/actions/authActions';

// // function Copyright(props) {
// //   return (
// //     <Typography variant="body2" color="text.secondary" align="center" {...props}>
// //       {'Copyright © '}
// //       <Link color="inherit" href="https://mui.com/">
// //         AutoForum
// //       </Link>
// //       {' '}
// //       {new Date().getFullYear()}
// //       .
// //     </Typography>
// //   );
// // }

// const theme = createTheme();

// function Registration() {
//   const [input, setInput] = useState({
//     name: '',
//     email: '',
//     password: '',
//     about: '',
//     tg: '',
//     avatar: null,
//   });

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
//   //   fetch('http://localhost:3001/auth', {
//   //     method: 'post',
//   //     headers: {
//   //       'Content-Type': 'application/json',
//   //     },
//   //     credentials: 'include',
//   //     body: JSON.stringify(inputs),
//   //   })
//   //     .then((res) => res.json())
//   //     .then((res) => {
//   //       // navigate('');
//   //       dispatch(setAuth(res));
//   //     });
//   // };

//   const handleSubmit = (e, input) => {
//     e.preventDefault();
//     const data = new FormData();
//     data.append('name', input.name);
//     data.append('category', input.category);
//     data.append('avatar', input.avatar);

//     axios.post('/api/v1/', data)
//       .then((res) => {
//         // setProducts(res.data);
//         // navigate('/');
//       });
//   };

//   // const handleSubmit = (event) => {
//   //   event.preventDefault();
//   //   const data = new FormData(event.currentTarget);
//   //   console.log({
//   //     email: data.get('email'),
//   //     password: data.get('password'),
//   //   });
//   // };

//   return (
//     <ThemeProvider theme={theme}>
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <Box
//           sx={{
//             marginTop: 8,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//           }}
//         >
//           <Avatar sx={{ m: 1, bgcolor: 'secondary.grey' }}>
//             <MinorCrashRoundedIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Регистрация
//           </Typography>
//           <Box
//             component="form"
//             noValidate
//             onSubmit={handleSubmit}
//             sx={{ mt: 3 }}
//           >
//             <Grid container spacing={2}>
//               <Grid item xs={12}>
//                 <TextField
//                   autoComplete="given-name"
//                   name="name"
//                   required
//                   fullWidth
//                   id="name"
//                   label="Имя"
//                   autoFocus
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   id="email"
//                   label="Email"
//                   name="email"
//                   autoComplete="email"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   name="password"
//                   label="Пароль"
//                   type="password"
//                   id="password"
//                   autoComplete="new-password"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   // required
//                   fullWidth
//                   name="tg"
//                   label="Telegram"
//                   type="tg"
//                   id="tg"
//                   autoComplete="new-telegram"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   // required
//                   fullWidth
//                   name="about"
//                   label="О себе"
//                   type="about"
//                   id="about"
//                   autoComplete="new-about"
//                 />
//               </Grid>
//             </Grid>
//             <Button
//               type="submit"
//               color="grey"
//               fullWidth
//               variant="contained"
//               sx={{ mt: 0.1, mb: 2 }}
//             >
//               Выбрать фото
//             </Button>

//             <Button
//               type="submit"
//               color="grey"
//               fullWidth
//               variant="contained"
//               sx={{ mt: 5, mb: 2 }}
//             >
//               Зарегистрироваться
//             </Button>

//             <Grid container justifyContent="flex-end">
//               <Grid item>
//                 <Link href="#" variant="body2">
//                   Уже зарегистрирован? Войти
//                 </Link>
//               </Grid>
//             </Grid>
//           </Box>
//         </Box>
//         {/* <Copyright sx={{ mt: 5 }} /> */}
//       </Container>
//     </ThemeProvider>
//   );
// }

// export default Registration;
