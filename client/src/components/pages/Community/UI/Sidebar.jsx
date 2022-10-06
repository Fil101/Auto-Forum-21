import {
  AccountBox,
  Article,
  Home,
  ModeNight,
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
import TurnSlightRightIcon from '@mui/icons-material/TurnSlightRight';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate, NavLink, useNavigate, useParams } from 'react-router-dom';
import { fetchModelsList } from '../../../../redux/actions/modelsActionsList';

function Sidebar({ mode, setMode }) {
  const navigate = useNavigate();
  const brands = useSelector((state) => state.brands);
  const models = useSelector((state) => state.models);
  const modelsList = useSelector((state) => state.modelsList);
  const { modelId } = useParams();
  // console.log('28', brands[0].name);
  // const temp = [{ title: brands[0].name, id: brands[0].id }];
  // console.log('28', temp);

  const [brandsNameValue, setBrandsNameValue] = useState();
  const [modelsNameValue, setModelsNamevalue] = useState();
  const [inputBrandsNameValue, setInputBrandsNameValue] = useState();
  const [inputModelsNamevalue, setInputModelsNamevalue] = useState();
  const [modelsListChek, setModelsListChek] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    if (brandsNameValue) {
      dispatch(fetchModelsList(brandsNameValue.id));
    }
  }, [brandsNameValue, modelId]);
  useEffect(() => {
    if (modelsList?.length > 0) {
      setModelsListChek(true);
    }
  }, [modelsList, modelId]);

  return (
    <Box flex={1} p={2} sx={{ display: { xs: 'none', sm: 'block', height: '100%' } }}>
      <Box position="fixed" sx={{ zIndex: 'tooltip' }}>
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
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Article />
              </ListItemIcon>
              <Autocomplete
                value={brandsNameValue || null}
                onChange={(event, newValue) => {
                  setBrandsNameValue(newValue);
                }}
                inputValue={inputBrandsNameValue}
                onInputChange={(event, newInputValue) => {
                  console.log('newInputValue', newInputValue);
                  setInputBrandsNameValue(newInputValue);
                }}
                id="controllable-states-brands"
                options={brands}
                getOptionLabel={(option) => option?.name.toString()}
                sx={{ width: 180 }}
                renderInput={(params) => <TextField {...params} sx={{ zIndex: 'tooltip' }} label="Выберите бренд" />}
              />
            </ListItemButton>
          </ListItem>
          {/* {brandsNameValue ? ( */}
          {console.log('modelsListChek', modelsListChek)}
          {modelsListChek === true ? (
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Article />
                </ListItemIcon>
                <Autocomplete
                  value={modelsNameValue || null}
                  onChange={(event, newValue) => {
                    setModelsNamevalue(newValue);
                    console.log('modelsNameValue', modelsNameValue);
                  // navigate(`/models/${modelsNameValue.id}`);
                  }}
                  inputValue={inputModelsNamevalue}
                  onInputChange={(event, newInputValue) => {
                    setInputModelsNamevalue(newInputValue);
                  }}
                  id="controllable-states-models"
                  options={modelsList}
                  getOptionLabel={(option) => option?.label.toString()}
                  sx={{ width: 180 }}
                  renderInput={(params) => <TextField {...params} label="Выберите модель" />}
                />
              </ListItemButton>
            </ListItem>
          ) : <> </>}
          {modelsNameValue ? (
            <ListItemButton component={Link} to={`/models/${modelsNameValue.id}`}>
              <ListItemIcon>
                <TurnSlightRightIcon />
              </ListItemIcon>
              <ListItemText primary="Перейти" />
            </ListItemButton>
          ) : <> </>}
        </List>
      </Box>
      {console.log('modelList', modelsList)}
    </Box>
  );
}

export default Sidebar;
