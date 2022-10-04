import {
  AccountBox,
  Article,
  Group,
  Home,
  ModeNight,
  Person,
  Settings,
  Storefront,
} from '@mui/icons-material';
import {
  Autocomplete,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
  TextField,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchModels } from '../../../../redux/actions/modelsActions';

const brandsName = [];
const modelsName = [];

function Sidebar({ mode, setMode }) {
  const brands = useSelector((state) => state.brands);
  const models = useSelector((state) => state.models);
  // const temp = brandsName.push(brands.map((brand) => brand.name));

  const [value, setValue] = React.useState();
  const [value2, setValue2] = React.useState();
  const [inputValue, setInputValue] = React.useState('');
  const [inputValue2, setInputValue2] = React.useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    const temp2 = modelsName.push(models.map((model) => console.log(model.name)));
  }, [value]);

  return (
    <Box flex={1} p={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
      {console.log('brands-------------> ', brands)}
      {console.log('brandsName---------> ', brandsName)}
      <Box position="fixed">
        <List>
          <ListItem disablePadding>
            <ListItemButton component={NavLink} to="/brands">
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Article />
              </ListItemIcon>
              <Autocomplete
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                  // getModel(newValue);
                }}
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => {
                  setInputValue(newInputValue);
                }}
                id="controllable-states-demo"
                options={brands.map((brand) => brand.name)}
                sx={{ width: 180 }}
                renderInput={(params) => <TextField {...params} label="Выберите бренд" />}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Article />
              </ListItemIcon>
              <Autocomplete
                value={value2}
                onChange={(event, newValue) => {
                  setValue2(newValue);
                }}
                inputValue={inputValue2}
                onInputChange={(event, newInputValue) => {
                  setInputValue2(newInputValue);
                }}
                id="controllable-states-demo"
                options={modelsName}
                sx={{ width: 180 }}
                renderInput={(params) => <TextField {...params} label="Выберите модель" />}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={NavLink} to="/personal">
              <ListItemIcon>
                <AccountBox />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <ModeNight />
              </ListItemIcon>
              <Switch onChange={e => setMode(mode === 'light' ? 'dark' : 'light')} />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}

export default Sidebar;
