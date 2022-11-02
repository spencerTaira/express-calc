"use strict";
const { BadRequestError } = require("./expressError");


/** Convert strNums like ["1","2","3"] to [1, 2, 3]. */

function convertStrNums(strNums) {
  console.log('convertStrNums');
  console.log('input', strNums);
  const nums = strNums.map(el => {
    console.log('el', Number(el));
    if (isNaN(Number(el))) {
      console.log('NaN');
      throw new BadRequestError(`${el} is not a number!`);
    }
    return Number(el);
  });

  return nums;
}


module.exports = { convertStrNums };