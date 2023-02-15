const router = require('express').Router();
const { User } = require('../models');

router.get('/', async (req, res) => {
 try {
  const userData = await User.findAll({
    attributes: { exclude: ['password']},
    order: [['name', 'ASC']]
  })

  const users = userData.map((user) => user.get({ plain: true }))

  res.render('homepage', { users });
 } catch(e) {
  console.error(e);
  res.status(400);
 }
});

module.exports = router;
