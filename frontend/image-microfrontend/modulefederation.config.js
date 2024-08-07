module.exports = {
    name: "image-microfrontend",
    filename: "Main.js",
    exposes: {
        './image-microfrontend': './components',
    },
    shared: ["react", "react-dom"]
}; 
