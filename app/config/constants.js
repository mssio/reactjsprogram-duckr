import firebase from 'firebase'

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyBycwJW1gay3nftQgRKwSIdAipD5SrOQbQ',
  authDomain: 'duckr-ceeea.firebaseapp.com',
  databaseURL: 'https://duckr-ceeea.firebaseio.com',
  storageBucket: 'duckr-ceeea.appspot.com',
  messagingSenderId: '280509723324',
}

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth

export const userExpirationLength = 100000
export const usersDucksExpirationLength = 100000
