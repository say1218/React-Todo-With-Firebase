import firebase from "firebase";

firebase.initializeApp({
	apiKey: "AIzaSyDeI7FLGKsubUymMY3Hp0dOWOD8yt6EgPM",
	authDomain: "todo-app-6aa55.firebaseapp.com",
	databaseURL: "https://todo-app-6aa55.firebaseio.com",
	projectId: "todo-app-6aa55",
	storageBucket: "todo-app-6aa55.appspot.com",
	messagingSenderId: "81320941043",
	appId: "1:81320941043:web:031fac56bad9c8f1242e86",
});

let db = firebase.firestore();
export default db;
