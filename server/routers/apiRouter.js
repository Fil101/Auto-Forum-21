import express from 'express';
import bcrypt from 'bcrypt';
import { User } from '../db/models';
import upload from '../middlewares/multer';

const router = express.Router();

router.post('/user', async (req, res) => {
    const hashpassword = await bcrypt.hash(req.body.password, 10);
    const [currentUser, created] = await User.findOrCreate({
      where: { email: req.body.email },
      defaults: {
        hashpassword,
        name: req.body.name,
      },
    });
    if (!created) res.sendStatus(500);
    else res.sendStatus(200);
  });
  router.post('/login', async (req, res) => {
    const databaseUser = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (
      databaseUser
      && (await bcrypt.compare(req.body.password, databaseUser.hashpassword))
    ) {
      const sessionData = {
        name: databaseUser.name,
        email: databaseUser.email,
        id: databaseUser.id,
      };
      req.session.userName = databaseUser.name;
      req.session.email = databaseUser.email;
      req.session.userId = databaseUser.id;
      res.json(sessionData);
    } else res.sendStatus(401);
  });
  
  router.get('/logout', (req, res) => {
    res.clearCookie('user_sid');
    req.session.destroy();
    res.sendStatus(200);
  });  