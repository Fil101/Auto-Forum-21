const express = require('express');
const bcrypt = require('bcrypt');
const { User, Subscribe, Car_model, Car_brand } = require('../db/models');

// import upload from '../middlewares/multer';

const router = express.Router();

router.post('/user', async (req, res) => {
  const hashpassword = await bcrypt.hash(req.body.password, 10);
  const [currentUser, created] = await User.findOrCreate({
    where: { email: req.body.email },
    defaults: {
      password: hashpassword,
      name: req.body.name,
    },
  });
  if (!created) res.sendStatus(500);
  else {
    const { name, email, id, img } = currentUser.dataValues;
    req.session.userName = name;
    req.session.email = email;
    req.session.userId = id;
    req.session.img = img;
    res.json({ name, email, id, img });
  }
});

router.post('/login', async (req, res) => {
  const databaseUser = await User.findOne({
    where: {
      email: req.body.email,
    },
  });
  if (
    databaseUser
      && (await bcrypt.compare(req.body.password, databaseUser.password))
  ) {
    const sessionData = {
      name: databaseUser.name,
      email: databaseUser.email,
      id: databaseUser.id,
      img: databaseUser.img,
      about: databaseUser.about,
    };
    req.session.userName = databaseUser.name;
    req.session.email = databaseUser.email;
    req.session.userId = databaseUser.id;
    req.session.userAbout = databaseUser.about;
    req.session.img = databaseUser.img;
    res.json(sessionData);
  } else res.sendStatus(401);
});

router.get('/logout', (req, res) => {
  res.clearCookie('sid');
  req.session.destroy();
  res.sendStatus(200);
});

router.get('/auth', (req, res) => {
  if (!req.session.userId) {
    res.sendStatus(401);
  // } else {
  //   const currUser = User.findByPk(req.session.userId);
  //   res.json(currUser);
  }

  const sessionData = {
    name: req.session.userName,
    email: req.session.email,
    id: req.session.userId,
    about: req.session.userAbout,
    img: req.session.img,
  };
  res.json(sessionData);
});

router.get('/myCommunity', async (req, res) => {
  const user = req.session.userId;
  console.log(user);
  const myCommunity = await Subscribe.findAll({
    where: {
      user_id: user,
    },
    include: [
      {
        model: Car_model,
        attributes: ['name', 'img'],
        include: [{
          model: Car_brand,
          attributes: ['name']
        }
        ],
      }
    ],
  });
  res.json(myCommunity);
});
module.exports = router;
