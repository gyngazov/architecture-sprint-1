module.exports = {
    name: "auth-microfrontend",
    filename: "Login.js",
    exposes: {
        './auth-microfrontend': './components',
    },
    shared: ["react", "react-dom"]
}; 
