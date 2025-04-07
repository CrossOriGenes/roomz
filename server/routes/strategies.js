const passport = require("passport")
const jwt = require("jsonwebtoken")
const GoogleStrategy = require("passport-google-oauth20").Strategy
const User = require("../models/user-schema")
require("dotenv").config()

const app = require("express")
const router = app.Router()

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL:
        "http://localhost:5000/api/auth/google/google-login/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      return done(null, profile)
    }
  )
)

passport.serializeUser((user, done) => done(null, user))
passport.deserializeUser((user, done) => done(null, user))

router.get(
  "/google-login",
  passport.authenticate("google", { scope: ["profile", "email"] })
)

router.get(
  "/google-login/callback",
  passport.authenticate("google", { session: false }),
  async (req, res) => {
    try {
      // console.log(req.user)
      let id
      const existinguser = await User.findOne({ email: req.user._json.email })
      if (existinguser) {
        existinguser.profile_pic = req.user._json.picture
        existinguser.timestamp = Date.now()
        await existinguser.save()
        id = existinguser._id
      } else {
        const newUser = new User({
          user_name: req.user._json.name,
          email: req.user._json.email,
          profile_pic: req.user._json.picture,
        })
        await newUser.save()
        id = newUser._id
      }

      const payload = { id: id.toHexString()}
      const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "10h",
      })
      if (token) {
        res.cookie("token", token, {
          httpOnly: true,
          maxAge: 10 * 60 * 60 * 1000,
        })
      }
      
      return res.send(`
            <script>
                window.opener.postMessage({ 
                  success: true,
                  token: "${token}",
                  message: "Login successful" 
                }, "${process.env.CLIENT_URL}");
                window.close();
            </script>
        `)
    } 
    catch (e) {
        console.log(e)
        return res.status(500).json({
            success: false,
            message: "Something went wrong!" 
        })
    }
  }
)

module.exports = router
