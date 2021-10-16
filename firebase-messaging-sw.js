importScripts('https://www.gstatic.com/firebasejs/8.4.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.4.1/firebase-messaging.js');

/*Update with yours config*/
const firebaseConfig = {
    apiKey: "AIzaSyD63ZahYNYJGqFovxAyJo3TGofFLtlI-QY",
    authDomain: "crm-app-875b2.firebaseapp.com",
    projectId: "crm-app-875b2",
    storageBucket: "crm-app-875b2.appspot.com",
    messagingSenderId: "457022581629",
    appId: "1:457022581629:web:e6c3f240aeef04f67b7a14",
    measurementId: "G-DXMDJMFVCT"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// messaging.usePublicVapidKey('BD3U2fkFP9kYyop9b73AiQOqHvM3aUR14k8MpHHR2Qag-F2YAxGCO1HmkjCol_9kS0gRE5r0k9QnLgYG2fmh7Xo');

// messaging.getToken().then((currentToken) => {
//     console.log(currentToken)
// })

// messaging.onMessage((payload) => {
// console.log('Message received. ', payload);

messaging.onBackgroundMessage(function (payload) {
    console.log('Received background message ', payload);

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
    };

    self.registration.showNotification(notificationTitle,
        notificationOptions);
});