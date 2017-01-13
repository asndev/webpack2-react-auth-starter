[![Build Status](https://travis-ci.org/asndev/webpack2-react-auth-starter.svg?branch=master)](https://travis-ci.org/asndev/webpack2-react-auth-starter) [![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)


## Starter

```
git clone https://github.com/asndev/webpack2-react-auth-starter.git
cd webpack2-react-auth-starter
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

### Firebase Deploy
- Update firebase.json
- Generate a ci token with: 'firebase login:ci'
- Set the generated token as an env variable within travis (FIREBASE_TOKEN = token)

