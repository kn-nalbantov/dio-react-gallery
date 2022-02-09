function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace('./', '')] = r(item);
  });
  return images;
}
const images = importAll(require.context('../src/pictures', false, /\.JPG/));
const flags = importAll(require.context('../src/flags', false, /\.png/));

export { images, flags };
