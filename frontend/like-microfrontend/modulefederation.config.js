module.exports = {
    name: "like-microfrontend",
    filename: "Main.js",
    exposes: {
        './like-microfrontend': './components',
    },
    shared: ["react", "react-dom"]
}; 
