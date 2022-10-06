import React, { useState, useEffect } from "react";
import {
  Avatar,
  Box,
  Button,
  SendIcon,
  createTheme,
  Stack,
  ThemeProvider,
  Tabs,
  Tab,
  Input,
  Fab,
  TextField,
  FormControl,
  OutlinedInput,
} from "@mui/material";
import NavigationIcon from "@mui/icons-material/Navigation";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import FormHelperText from '@mui/material/FormHelperText';
import { ThreeGMobiledataRounded } from "@mui/icons-material";
import { changeAbout } from "../../../redux/actions/authActions";
import OnePost from "./OnePost";
import OneCommunity from "./OneCommunity";
import Sidebar from "../Community/UI/Sidebar";

function Profile() {
  const [tabNum, setTabNum] = useState(0);
  const { about, tg, name, email } = useSelector((state) => state.auth);
  const [info, setInfo] = useState(about);
  const [tgInfo, setTgInfo] = useState(tg);
  const [newName, setNewName] = useState(name);
  const [isEdit, setIsEdit] = useState(false);
  const [community, setCommunity] = useState([]);
  const [post, setPost] = useState([]);
  const dispatch = useDispatch();

  const [mode, setMode] = useState('dark');
  const darkTheme = createTheme({
    palette: {
      mode,
    },
  });

  const postOrCommunity = () => {
    if (tabNum === 0) {
      return true;
    }
    return false;
  };
  const resultPostOrCommunity = postOrCommunity();

  useEffect(() => {
    switch (tabNum) {
      case 0:
        axios("/api/v1/myCommunity").then((res) => setCommunity(res.data));
        break;
      case 1:
        axios("/api/v1/myPosts").then((res) => setPost(res.data));
        break;
      case 2:
        console.log('case 2');
        axios("/api/v1/favoritePosts").then((res) => setPost(res.data));
        break;
      default:
        break;
    }
  }, [tabNum]);

  const handleChange = (event, newValue) => {
    setTabNum(newValue);
  };

  const infoInputHandler = () => {
    dispatch(changeAbout(info, tgInfo, newName));
    setIsEdit((state) => !state);
  };

  const infoHandler = () => {
    setIsEdit((state) => !state);
  };

  // для загрузки фото
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
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor="background.default" color="text.primary" sx={{ zIndex: 'tooltip', minHeight: '100vh' }}>
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar setMode={setMode} mode={mode} />
          <Box
            // position="fixed"
            bgcolor="background.default"
            color="text.primary"
            sx={{
              display: "flex",
              flexDirection: "row",
              margin: "10px",
              border: "1px solid",
              padding: "10px",
              width: "60%",
              justifyContent: "space-around",
              // backgroundColor: "#f5f5f5",
              // "&:hover": {
              //   backgroundColor: "primary.ligth",
              //   opacity: [0.9, 0.8, 0.7],
              // },
            }}
          >
            <Box
              bgcolor="background.default"
              color="text.primary"
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
              <Button variant="contained">Добавить фото</Button>
            </Box>
            <Box
              bgcolor="background.default"
              color="text.primary"
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignContent: "stretch",
                alignItems: "center",
              }}
            >
              {isEdit ? (
                <Box
                  bgcolor="background.default"
                  color="text.primary"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <TextField
                    id="outlined-name"
                    disabled={!isEdit}
                    sx={{ margin: "5px" }}
                    label="имя"
                    // value={name}
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                  />
                  <TextField
                    id="outlined-name"
                    disabled
                    sx={{ margin: "5px" }}
                    label="email"
                    value={email}
                  />
                  <TextField
                    id="outlined-name"
                    disabled={!isEdit}
                    sx={{ margin: "5px" }}
                    label="телеграмм"
                    value={tgInfo}
                    onChange={(e) => setTgInfo(e.target.value)}
                  />
                  <TextField
                    id="outlined-name"
                    sx={{ margin: "5px" }}
                    disabled={!isEdit}
                    label="о себе"
                    value={info}
                    onChange={(e) => setInfo(e.target.value)}
                  />
                </Box>
              ) : (
                <Box sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  width: "100%",
                }}
                >
                  <TextField
                    id="outlined-name"
                    disabled
                    sx={{ margin: "5px" }}
                    label="имя"
                    value={name}
                  />
                  <TextField
                    id="outlined-name"
                    disabled
                    sx={{ margin: "5px" }}
                    label="email"
                    value={email}
                  />
                  <TextField
                    id="outlined-name"
                    disabled
                    sx={{ margin: "5px" }}
                    label="телеграмм"
                    value={tg}
                  />
                  <TextField
                    id="outlined-name"
                    sx={{ margin: "5px" }}
                    disabled
                    label="о себе"
                    value={about}
                  />
                </Box>
              )}
              {isEdit ? (
                <Button
                  onClick={infoInputHandler}
                  variant="contained"
                  name="about"
                  required
                  fullWidth
                  id="about"
                  label="about"
                >
                  Сохранить
                </Button>
              ) : (
                <Button
                  onClick={infoHandler}
                  variant="contained"
                  name="about"
                  required
                  fullWidth
                  id="about"
                  label="about"
                >
                  Редактировать
                </Button>
              )}
            </Box>
          </Box>
          <Box flex={1} p={2} sx={{ display: { xs: 'none', sm: 'block' } }}>{' '}</Box>
        </Stack>
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
            <Tabs value={tabNum} onChange={handleChange} centered>
              <Tab label="Мои сообщества" />
              <Tab label="Мои посты" />
              <Tab label="Избранное 🤍" />
            </Tabs>
          </Box>
        </Stack>
        {/* <Stack position="fixed"> */}
        <Stack direction="row" spacing={2} justifyContent="center">
          <Box
            bgcolor="background.default"
            color="text.primary"
            // position="fixed"
            sx={{
              display: "flex",
              // flexDirection: "row",
              flexWrap: 'wrap',
              justifyContent: "center",
              alignContent: "stretch",
              alignItems: "center",
              // width: "80%",
              zIndex: 'modal',
            }}
          >
            {resultPostOrCommunity ? (
              community?.map((el) => <OneCommunity community={el} key={el.id} />)
            ) : (
              post?.map((el) => <OnePost post={el} key={el.id} isFavorite={tabNum === 2} setPost={setPost} />)
            )}
          </Box>
        </Stack>
        {/* </Stack> */}
        <Box
          bgcolor="background.default"
          color="text.primary"
          flex={1}
          p={2}
          sx={{ display: { xs: 'none', sm: 'block' } }}
        >
          {' '}
          {' '}
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default Profile;
