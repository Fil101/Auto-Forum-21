import React, { useState } from "react";
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
} from "@mui/material";
import axios from "axios";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";

function Profile() {
  const [value, setValue] = useState(0);

  const initialText = `Заполните информацию о себе`;

  const [info, setInfo] = useState(initialText);
  const [isEdit, setIsEdit] = useState(false);
  // const dispatch = useDispatch();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
    axios.put("/api/users/about", { about: info })
      .then(setIsEdit(state => !state));
  };

  const infoHandler = () => {
    setIsEdit(state => !state);
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
          {/* <Button variant="contained">Добавить фото</Button> */}
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
          )
            : (<Box>{info}</Box>)}
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
          )
            : (
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
        <Box sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignContent: "stretch",
          alignItems: "center",
        }}
        >
          {' '}
          <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
            <Tabs value={value} onChange={handleChange} centered>
              <Tab label="Мои сообщества" />
              <Tab label="Все сообщества" />
              <Tab label="Мои посты" />
              <Tab label="Избранные посты" />
            </Tabs>
          </Box>
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
