import colors from './helpers/data/colors';

const allColors = colors.getColors();

const forEachFunc = () => {
  // loops over all colors and does a console.log to print color name
  for (let i = 0; i < allColors.length; i += 1) {
    console.log('for', allColors[i].name);
  }

  allColors.forEach((color) => console.log('forEach', color.name));
};

const filterFunc = () => {
  // print out an array of colors that have a hexValue that starts with an 'F' - first 3
  const newColors = [];
  // some stuff here
  for (let i = 0; i < allColors.length; i += 1) {
    if (allColors[i].hexValue[0] === 'F') {
      newColors.push(allColors[i]);
    }
  }
  console.log('for', newColors);
  // x is placeholder and automatically makes it into an array. x is the object. This does sacrifice performance
  const filterColors = allColors.filter((x) => x.hexValue[0] === 'F');
  console.log('filter', filterColors);
};

const findFunc = () => {
  // find the color that has a name of "green" and console out its hexValue
  let colorToFind = {};
  // do a for loop and some stuff (like an if)
  for (let k = 0; k < allColors.length; k += 1) {
    if (allColors[k].name === 'green') {
      colorToFind = allColors[k];
    }
  }
  console.log('for', colorToFind.hexValue);

  // returns single object
  const colorFind = allColors.find((x) => x.name === 'green');
  console.log('find', colorFind.hexValue);
};

const mapFunc = () => {
  // creating an array of h1 tags for each color name
  const h1Tags = [];
  for (let l = 0; l < allColors.length; l += 1) {
    h1Tags.push(`<h1>${allColors[l].name}</h1>`);
  }
  console.log('for', h1Tags);

  // returns an array
  const colorMap = allColors.map((color) => `<h1>${color.name}</h1>`);
  console.log('map', colorMap);
};

const reduceFunc = () => {
  // get total vote of upVotes
  let total = 0;
  for (let m = 0; m < allColors.length; m += 1) {
    total += allColors[m].upVotes;
  }
  console.log('for', total);

  // curr is placeholder for allColors
  const upVoteTotal = allColors.reduce((prev, curr) => prev + curr.upVotes, 0);
  console.log('reduce', upVoteTotal);
};

const init = () => {
  forEachFunc();
  filterFunc();
  findFunc();
  mapFunc();
  reduceFunc();
};

export default { init };
