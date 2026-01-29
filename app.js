const firebaseConfig = {
    apiKey: "AIzaSyAz2QqeWXlONEScx0ncVN1xbl4HHS1H8-w",
    authDomain: "open-storage-57f9a.firebaseapp.com",
    databaseURL: "https://open-storage-57f9a-default-rtdb.firebaseio.com",
    projectId: "open-storage-57f9a",
    storageBucket: "open-storage-57f9a.firebasestorage.app",
    messagingSenderId: "43784184491",
    appId: "1:43784184491:web:3c159a5cb4836673b50dee"
};

const app = firebase.initializeApp(firebaseConfig);

firebase.database().ref("saved_link").once("value", (data) => {
    const snapshot = data.val();
    
    if (snapshot) {
        const textElement = document.createElement("h2");
        textElement.innerHTML = `Current Link: <a href="${snapshot.link}" target="_blank">${snapshot.name}</a>`
        document.querySelector("#root").appendChild(textElement);
    }
});