"use strict";
const { BadRequestError } = require("./expressError");
const fsP = require("fs/promises");


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

async function writeOutput(content) {

  const date = new Date();
  content.timestamp = date.toTimeString();

  content = JSON.stringify(content);

  try {
    await fsP.appendFile("./results.json", content, "utf8");

  } catch (err) {
    console.log(err);
    process.exit(1);
  }

}

module.exports = { convertStrNums, writeOutput };