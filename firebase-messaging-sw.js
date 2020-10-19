importScripts("https://www.gstatic.com/firebasejs/7.16.1/firebase-app.js");
importScripts(
    "https://www.gstatic.com/firebasejs/7.16.1/firebase-messaging.js",
);
// For an optimal experience using Cloud Messaging, also add the Firebase SDK for Analytics.
importScripts(
    "https://www.gstatic.com/firebasejs/7.16.1/firebase-analytics.js",
);

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
firebase.initializeApp({
    messagingSenderId: "774545478464",
    apiKey: "AIzaSyAA1ZkkQYVBZdRCxZW_yW61PPZI-heKUz4",
    projectId: "vocabulary-chinese",
    appId: "1:774545478464:web:185132c3fa4555346a20a5",
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
    console.log(
        "[firebase-messaging-sw.js] Received background message ",
        payload,
    );
    const { title, ...options } = JSON.parse(payload.data.notification);
    return self.registration.showNotification(
        title,
        options
    );
});
