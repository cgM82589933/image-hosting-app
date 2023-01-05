const MONGO_DB_USER='imghostadmin001';
const MONGO_DB_PASS='I5DGDpYm3bLSIZcc';
const MONGO_DB_URI=`mongodb+srv://${MONGO_DB_USER}:${MONGO_DB_PASS}@imagehostingapp.peohpn9.mongodb.net/?retryWrites=true&w=majority`;
const SECRET = '067e6a35e28943ddbd1aadfb2a4527ac' // secret for dev
// const SECRET = 'fb5512f8871603814bdd29067b94ba9e'
// const SECRET = 'f908a1909641637a50306f37f0e9103d'
// const SECRET = '8990490ae58a8e78b2104dc2ee68e78d'
// const SECRET = '5cd4f399da5c98287cabf64d6e2f86ac'

module.exports = {
  mongoURI: MONGO_DB_URI,
  secretOrKey: SECRET,
}
