[![Build Status](https://travis-ci.org/asndev/webpack2-react-auth-starter.svg?branch=master)](https://travis-ci.org/asndev/webpack2-react-auth-starter) [![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php) [![Greenkeeper badge](https://badges.greenkeeper.io/asndev/webpack2-react-auth-starter.svg)](https://greenkeeper.io/)

It's nice to have your own starter but you should probably just use [Create React App](https://github.com/facebookincubator/create-react-app).

## Starter

### In Action

- [How Much Coffee Tracker](https://github.com/asndev/how-much-coffee-tracker)

### Getting started

```
git clone https://github.com/asndev/webpack2-react-auth-starter.git my-awesome-project
cd my-awesome-project
rm -rf .git
git init
git add .
git commit -m 'init'
// git remote add origin <your-git-repo>.git
// git push origin master
yarn
npm start
```

```
// Lint
npm run lint

// Test
npm test

// Check unused exports
shrimpit
```

### Firebase Auth
```
./src/store/firebase/config.js
```
- Fill in your firebase api key
- Enable at least one signup provider within firebase (eg Google or Github)

### Firebase Deployment with travis ci
- Update firebase.json
- Generate a ci token with: 'firebase login:ci'
- Set the generated token as an env variable within travis (FIREBASE_TOKEN = token)

