import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  createTheme,
  Stack,
  ThemeProvider,
} from "@mui/material";
import axios from "axios";

function Profile() {
  const [input, setInput] = useState({ avatar: null });
  const photoHandler = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.files[0] }));
    e.preventDefault();
    const data = new FormData();
    data.append("avatar", input.avatar);

    axios.post("/api/v1/avatar", data).then((res) => {
      // navigate('/');
    });
  };

  return (
    <div style={{ backgroundColor: "black" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          margin: "10px",
          border: "1px solid",
          padding: "10px",
          justifyContent: "space-around",
          backgroundColor: '#f5f5f5',
          "&:hover": {
            backgroundColor: "primary.ligth",
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignContent: "stretch",
            alignItems: "center",
          }}
        >
          <Avatar
            alt="photo"
            src="/avatars/elDar.jpg"
            sx={{ width: 56, height: 56 }}
          />
          <label className="form-label" htmlFor="avatar">
            Фото
          </label>
          <input
            name="avatar"
            onChange={photoHandler}
            type="file"
            className="form-control"
            id="avatar"
          />
          <Button>Добавить фото</Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignContent: "stretch",
            alignItems: "center",
          }}
        >
          <Box>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </Box>
          <Button>Добавить информацию</Button>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          // width: 300,
          height: 300,
          flexDirection: "row",
          margin: "10px",
          border: "1px solid",
          padding: "10px",
          justifyContent: "space-around",
          backgroundColor: "#f5f5f5",
          "&:hover": {
            backgroundColor: "primary.ligth",
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      >
        Мои сообщества
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          margin: "10px",
          height: 300,
          border: "1px solid",
          padding: "10px",
          justifyContent: "space-around",
          backgroundColor: "#f5f5f5",
          "&:hover": {
            backgroundColor: "secondary.ligth",
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      >
        Все сообщества
      </Box>
    </div>
  );
}

export default Profile;

// import Container from "@mui/material/Container";
// import Grid from "@mui/material/Grid";
// import Icon from "@mui/material/Icon";

// // Material Kit 2 React components
// import MKBox from './MKBox';
// import MKAvatar from './MKAvatar';
// import MKButton from './MKButton';
// import MKTypography from './MKTypography';

// // Images
// // import profilePicture from '../../../../public/IMG/Banner/car.jpg';

// function Profile() {
//   return (
//     <MKBox component="section" py={{ xs: 6, sm: 12 }}>
//       <Container>
//         <Grid container item xs={12} justifyContent="center" mx="auto">
//           <MKBox mt={{ xs: -16, md: -20 }} textAlign="center">
//             {/* <MKAvatar src={profilePicture} alt="Burce Mars" size="xxl" shadow="xl" /> */}
//           </MKBox>
//           <Grid container justifyContent="center" py={6}>
//             <Grid item xs={12} md={7} mx={{ xs: "auto", sm: 6, md: 1 }}>
//               <MKBox display="flex" justifyContent="space-between" alignItems="center" mb={1}>
//                 <MKTypography variant="h3">Michael Roven</MKTypography>
//                 <MKButton variant="outlined" color="info" size="small">
//                   Follow
//                 </MKButton>
//               </MKBox>
//               <Grid container spacing={3} mb={3}>
//                 <Grid item>
//                   <MKTypography component="span" variant="body2" fontWeight="bold">
//                     323&nbsp;
//                   </MKTypography>
//                   <MKTypography component="span" variant="body2" color="text">
//                     Posts
//                   </MKTypography>
//                 </Grid>
//                 <Grid item>
//                   <MKTypography component="span" variant="body2" fontWeight="bold">
//                     3.5k&nbsp;
//                   </MKTypography>
//                   <MKTypography component="span" variant="body2" color="text">
//                     Followers
//                   </MKTypography>
//                 </Grid>
//                 <Grid item>
//                   <MKTypography component="span" variant="body2" fontWeight="bold">
//                     260&nbsp;
//                   </MKTypography>
//                   <MKTypography component="span" variant="body2" color="text">
//                     Following
//                   </MKTypography>
//                 </Grid>
//               </Grid>
//               <MKTypography variant="body1" fontWeight="light" color="text">
//
//                 {' '}
//                 <br />
//                 <MKTypography
//                   component="a"
//                   href="#"
//                   variant="body1"
//                   fontWeight="light"
//                   color="info"
//                   mt={3}
//                   sx={{
//                     width: "max-content",
//                     display: "flex",
//                     alignItems: "center",

//                     "& .material-icons-round": {
//                       transform: `translateX(3px)`,
//                       transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
//                     },

//                     "&:hover .material-icons-round, &:focus .material-icons-round": {
//                       transform: `translateX(6px)`,
//                     },
//                   }}
//                 >
//                   More about me
//                   {' '}
//                   <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
//                 </MKTypography>
//               </MKTypography>
//             </Grid>
//           </Grid>
//         </Grid>
//       </Container>
//     </MKBox>
//   );
// }

// export default Profile;
