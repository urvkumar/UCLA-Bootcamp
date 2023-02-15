const router = require('express').Router();
const bcrypt = require('bcrypt');
const fs = require('fs');
const User = require('../../models/User');


const salt = 'salty';

// 'Password123' -> '008c70392e3abfbd0fa47bbc2ed96aa99bd49e159727fcba0f2e6abeb3a9d601'
// 'Password124' -> '51ac01ca7923cd88117b7681343b91d21d3f6bae5cb0d949627099fc02f4b9bc'

// 'Password123' -> 'Password123salty'/'saltyPassword123' => 813bc9f8c4e9ca9b4ad8d7d4fb056342621113fdf1f0e1f4a011942058ddf5cb + salty
// 'Password124' -> 'Password123peppery'/'pepperyPassword123' => 813bc9f8c4e9ca9b4ad8d7d4fb056342621113fdf1f0e1f4a011942058ddf5cb + peppery

router.post('/crack', async (req, res) => {
  const allFileContents = fs.readFileSync('passwords.txt', 'utf-8');
  const user = await User.findOne({ where: { email: req.body.email }});
  
  allFileContents.split(/\r?\n/).forEach(async (line) =>  {
    console.log(`Line from file: ${line}`);
    await bcrypt.compare(line, user.password, function(err, res) {
      if (res) {
        throw new Error(`User Hacked, password: ${line}`);
      }
    });
  });
})


router.post('/login', async (req, res) => {
  try {
    // Login the user
    const user = User.findBy('email', req.body.email);

    bcrypt.compare(req.body.password, user.password, function(err, res) {
      if (err){
       //  Auth failed
      }
      if (res) {
        // Auth successfull, let them login
      } else {
        // response is OutgoingMessage object that server response http request
        return response.json({success: false, message: 'passwords do not match'});
      }
    });
    // res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});



// CREATE a new user
router.post('/', async (req, res) => {
  try {
    const newUser = req.body;
    // hash the password from 'req.body' and save to newUser
    newUser.password = await bcrypt.hash(req.body.password, 10);
    // create the newUser with the hashed password and save to DB
    const userData = await User.create(newUser);
    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
