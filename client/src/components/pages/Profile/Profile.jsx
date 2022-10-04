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
} from "@mui/material";
import NavigationIcon from "@mui/icons-material/Navigation";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { changeAbout } from "../../../redux/actions/authActions";
import OnePost from "./OnePost";
import OneCommunity from "./OneCommunity";

function Profile() {
  const [tabNum, setTabNum] = useState(0);
  const about = useSelector((state) => state.auth?.about);
  const [info, setInfo] = useState(about);
  const [isEdit, setIsEdit] = useState(false);
  const [community, setCommunity] = useState([]);
  const dispatch = useDispatch();
  console.log('это комьюнити массив', community);

  const handleChange = (event, newValue) => {
    setTabNum(newValue);
    console.log(event, newValue);
  };

  const postOrCommunity = () => {
    if (tabNum === 0 || tabNum === 1) {
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
        // тут будут запрос за всеми комментариями
        break;
      case 2:
        // тут будет запрос за всеми лайками
        break;
      default:
        break;
    }
  }, [tabNum]);

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

  const infoInputHandler = () => {
    dispatch(changeAbout(info));
    // axios.put("/api/users/about", { about })
    // .then(setIsEdit(state => !state));
    setIsEdit((state) => !state);
  };

  const infoHandler = () => {
    setIsEdit((state) => !state);
  };
  console.log(community);

  return (
    <div style={{ backgroundColor: "white" }}>
      <Box
        sx={{
          display: "flex",
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
          <Button variant="contained">Добавить фото</Button>
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
          {isEdit ? (
            <Box sx={{ width: "100%" }}>
              <Input
                sx={{ width: "100%" }}
                value={info}
                onChange={(e) => setInfo(e.target.value)}
              />
            </Box>
          ) : (
            <Box>{about}</Box>
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
      <Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignContent: "stretch",
            alignItems: "center",
          }}
        >
          {" "}
          <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
            <Tabs value={tabNum} onChange={handleChange} centered>
              <Tab label="Мои сообщества" />
              <Tab label="Мои посты" />
              <Tab label="Избранное 🤍" />
            </Tabs>
          </Box>
        </Box>
        <Box>
          {resultPostOrCommunity ? (
            community?.map((el) => {
              console.log(el);
              return <OneCommunity community={el} key={el.id} />;
            })
          ) : (
            <OnePost />
          )}
        </Box>
      </Box>
      {/* <Box
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
      </Box> */}

      {/* <Box
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
      </Box> */}
    </div>
  );
}

export default Profile;
