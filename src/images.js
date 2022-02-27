function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace('./', '')] = r(item);
  });
  return images;
}
const images = importAll(require.context('../src/pictures', false, /\.JPG/));
const flags = importAll(require.context('../src/flags', false, /\.png/));

const lamatta = [];
for (let i=0; i<6; i++) {
  lamatta.push(images[`${i}.JPG`]);
}

const kaos = [];
for (let i=6; i<12; i++) {
  kaos.push(images[`${i}.JPG`]);
}

const robertrudger = [];
for (let i=12; i<18; i++) {
  robertrudger.push(images[`${i}.JPG`]);
}

const imgs = { lamatta, kaos, robertrudger };

export { imgs, flags };
