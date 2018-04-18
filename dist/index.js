'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userGreeting = exports.greeting = undefined;

var _readlineSync = require('readline-sync');

var _readlineSync2 = _interopRequireDefault(_readlineSync);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var greeting = exports.greeting = function greeting() {
  return console.log('Welcome to the Brain Games!');
};

var userGreeting = exports.userGreeting = function userGreeting() {
  var userName = _readlineSync2.default.question('May I have your name? ');
  console.log('hi ' + userName + ' !');
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJncmVldGluZyIsImNvbnNvbGUiLCJsb2ciLCJ1c2VyR3JlZXRpbmciLCJ1c2VyTmFtZSIsInF1ZXN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7OztBQUdPLElBQU1BLDhCQUFXLFNBQVhBLFFBQVc7QUFBQSxTQUFNQyxRQUFRQyxHQUFSLENBQVksNkJBQVosQ0FBTjtBQUFBLENBQWpCOztBQUVBLElBQU1DLHNDQUFlLFNBQWZBLFlBQWUsR0FBTTtBQUNoQyxNQUFNQyxXQUFXLHVCQUFhQyxRQUFiLENBQXNCLHdCQUF0QixDQUFqQjtBQUNBSixVQUFRQyxHQUFSLFNBQWtCRSxRQUFsQjtBQUNELENBSE0iLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVhZGxpbmVTeW5jIGZyb20gJ3JlYWRsaW5lLXN5bmMnO1xuXG5cbmV4cG9ydCBjb25zdCBncmVldGluZyA9ICgpID0+IGNvbnNvbGUubG9nKCdXZWxjb21lIHRvIHRoZSBCcmFpbiBHYW1lcyEnKTtcblxuZXhwb3J0IGNvbnN0IHVzZXJHcmVldGluZyA9ICgpID0+IHtcbiAgY29uc3QgdXNlck5hbWUgPSByZWFkbGluZVN5bmMucXVlc3Rpb24oJ01heSBJIGhhdmUgeW91ciBuYW1lPyAnKTtcbiAgY29uc29sZS5sb2coYGhpICR7dXNlck5hbWV9ICFgKTtcbn07XG4iXX0=