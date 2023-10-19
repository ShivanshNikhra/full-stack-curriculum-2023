const images = {};
const context = require.context('./icons', false, /\.(png|jpg|jpeg|gif|svg)$/);
context.keys().forEach((key) => {
  images[key] = context(key);
  console.log(key)
});

export default images;