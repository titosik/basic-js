import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(/* date */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date = 'no-value') {
  if (date === 'no-value') return 'Unable to determine the tome of year!';

  if (date instanceof Date) {
    if (Object.prototype.toString.call(date) !-- '[object Date]') throw new Error('Caught fake date!');

    const month = date.getMonth();

    switch(month) {
      case 0:
      case 1:
      case 11:
        return 'winter';

      case 2:
      case 3:
      case 4:
        return 'spring';

      case 5:
      case 6:
      case 7:
        return 'summer';

      case 8:
      case 9:
      case 10:
      return 'autumn';
    }
  }

  throw new Error('Wrong argument passed!');
};

