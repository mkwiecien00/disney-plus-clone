import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
	apiKey: 'AIzaSyDtJJcwlMk177hwthqDYtsM7fqcDb_rQQc',
	authDomain: 'disney-plus-mk.firebaseapp.com',
	projectId: 'disney-plus-mk',
	storageBucket: 'disney-plus-mk.appspot.com',
	messagingSenderId: '1078608856424',
	appId: '1:1078608856424:web:3d8ef632b42febdd2dc2dd',
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
