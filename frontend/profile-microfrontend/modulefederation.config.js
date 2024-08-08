module.exports = {
    name: "profile-microfrontend",
    filename: "Main.js",
    exposes: {
        './profile-microfrontend': './components',
    },
    shared: ["react", "react-dom"]
}; 
