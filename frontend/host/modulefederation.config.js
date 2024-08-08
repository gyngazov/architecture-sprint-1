module.exports = {
    name: "host",
    remotes: {
        "auth-microfrontend": "auth-microfrontend@https://auth.nomoreparties.co/auth-microfrontend/Login.js",
        "image-microfrontend": "image-microfrontend@https://nomoreparties.co/image-microfrontend/Main.js",
        "like-microfrontend": "like-microfrontend@https://nomoreparties.co/like-microfrontend/Main.js",
        "profile-microfrontend": "profile-microfrontend@https://nomoreparties.co/profile-microfrontend/Main.js"
    },
    shared: ["react", "react-dom"]
};   
