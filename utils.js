"use strict";
const { BadRequestError } = require("./expressError");


/** Convert strNums like ["1","2","3"] to [1, 2, 3]. */

function convertStrNums(strNums) {
  const nums = strNums.map(el => {
    if (isNaN(Number(el))) {
      throw new BadRequestError(`${el} is not a number!`);
    }
    return Number(el);
  });

  return nums;
}


module.exports = { convertStrNums };