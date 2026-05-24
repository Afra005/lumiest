importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js');

// USE YOUR REAL DATA FROM FIREBASE HERE
firebase.initializeApp({
    apiKey: "AIzaSyAJHfcCMI2aV7j9DWyvffu4gSIT4XZbUw0",
    authDomain: "lumiest-sanctuary.firebaseapp.com",
    projectId: "lumiest-sanctuary",
    storageBucket: "lumiest-sanctuary.firebasestorage.app",
    messagingSenderId: "875664943738",
    appId: "1:875664943738:web:fec522299f5e228d08e9c3"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/default.png' 
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
