//-------------------Arrays  methods in javascript---------------------

// At()
const arr_at = (arr) => {
  return arr.at(2);
};

// push for pusing a new
const push_arr = (arr) => {
  return arr.push("kiwi");
};
// pop()
const popOut = (arr) => {
  return arr.pop();
};
// shift()
const shifted = (arr) => {
  return arr.shift();
};

// unshift()

const unshifted = (arr) => {
  return arr.unshift(0, 1);
};

// join()
const joined = (arr, arr2) => {
  return arr.concat(arr2);
};

// slice is used to extract a part of a array

const sliced = (arr) => {
  return arr.slice(2);
};

// splice is used to replace a element in the array

const spliced = (arr) => {
  return arr.splice(2, 1, "kiwi");
};

// for each is a array method works like a loop
// foreach()
const numbers = [1, 2, 3, 4, 5, 6, 7];
const for_Each = (arr) => {
  return arr.forEach((element) => console.log(element));
};

// map is also like a loop with a function on every element it puts element in a array
const mapping = (arr) => {
  return arr.map((element) => element * element);
};

// filter runs a loop with a condition and filter out the result in a new array

const evenNumber = (arr) => {
  return arr.filter((element) => element % 2 === 0);
};

// join() method

const joining = (arr) => {
  return arr.join(",");
};

// fill() method

const filling = (arr) => {
  return arr.fill(2);
};

// reverse()

const reversed = (arr) => {
  return arr.reverse();
};

// reduce() method

const reducing = (arr) => {
  return arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
};

module.exports = {
  arr_at,
  push_arr,
  popOut,
  shifted,
  unshifted,
  joined,
  sliced,
  spliced,
  for_Each,
  mapping,
  evenNumber,
  joining,
  filling,
  reversed,
  reducing,
};
