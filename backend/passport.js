// const passport = require("passport");

// const GoogleStrategy = require("passport-google-oauth20").Strategy;
// const GithubStrategy = require("passport-github2").Strategy;

// const GOOGLE_CLIENT_ID =
//   "632724439248-ile2jiga2qmdtposmtj1o85cqmei0nm8.apps.googleusercontent.com";
// const GOOGLE_CLIENT_SECRET = "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";

// const GITHUB_CLIENT_ID = "e1c294c00aa4bda71780";
// const GITHUB_CLIENT_SECRET = "12d8ed4c1e92ef558015637b1ca44d78ef38714d";

// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: GOOGLE_CLIENT_ID,
//       clientSecret: GOOGLE_CLIENT_SECRET,
//       callbackURL: "/auth/google/callback",
//     },
//     function (accessToken, refreshToken, profile, done) {
//       done(null, profile);
//     }
//   )
// );

// passport.use(
//   new GithubStrategy(
//     {
//       clientID: GITHUB_CLIENT_ID,
//       clientSecret: GITHUB_CLIENT_SECRET,
//       callbackURL: "/auth/google/callback",
//     },
//     function (accessToken, refreshToken, profile, done) {
//       done(null, profile);
//     }
//   )
// );

// passport.serializeUser((user, done) => {
//   done(null, user);
// });

// passport.deserializeUser((user, done) => {
//   done(null, user);
// });

const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GithubStrategy = require("passport-github2").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const passport = require("passport");

const GOOGLE_CLIENT_ID =
  "632724439248-ile2jiga2qmdtposmtj1o85cqmei0nm8.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

const GITHUB_CLIENT_ID = "e1c294c00aa4bda71780";
const GITHUB_CLIENT_SECRET = "12d8ed4c1e92ef558015637b1ca44d78ef38714d";

FACEBOOK_APP_ID = "your id";
FACEBOOK_APP_SECRET = "your id";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.use(
  new GithubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: FACEBOOK_APP_ID,
      clientSecret: FACEBOOK_APP_SECRET,
      callbackURL: "/auth/facebook/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
