export default function random(array, value) {
  let found = 0;

  array.forEach(element => {
    if(element === value) {
      found++;
    }
  });

  return found;
}