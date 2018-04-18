

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.userGreeting = undefined;
exports.greeting = undefined;

const _readlineSync = require('readline-sync');

const _readlineSync2 = _interopRequireDefault(_readlineSync);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const greeting = exports.greeting = function greeting() {
  return console.log('Welcome to the Brain Games!');
};

const userGreeting = exports.userGreeting = function userGreeting() {
  const userName = _readlineSync2.default.question('May I have your name? ');
  console.log(`hi ${userName} !`);
};
/* # sourceMappingURL=data:application/json;
charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJ
uYW1lcyI6WyJncmVldGluZyIsImNvbnNvbGUiLCJsb2ciLCJ1c2VyR3JlZXRpbmciLCJ1c2VyTmFtZSI
sInF1ZXN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7OztBQUdPLElBQU1BLDhCQUFXLFN
BQVhBLFFBQVc7QUFBQSxTQUFNQyxRQUFRQyxHQUFSLENBQVksNkJBQVosQ0FBTjtBQUFBLENBQWpCOzt
BQUVBLElBQU9DLHNDQUFlLFNBQWZBLFlBQWUsR0FBTTtBQUNqQyxNQUFNQyxXQUFXLHVCQUFhQyxRQUF
iLENBQXNCLHdCQUF0QixDQUFqQjtBQUNBSixVQUFRQyxHQUFSLFNBQWtCRSxRQUFsQjtBQUNELENBSE0
iLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVhZGxpbmVTeW5jIGZ
yb20gJ3JlYWRsaW5lLXN5bmMnO1xuXG5cbmV4cG9ydCBjb25zdCBncmVldGluZyA9ICgpID0+IGNvbnN
vbGUubG9nKCdXZWxjb21lIHRvIHRoZSBCcmFpbiBHYW1lcyEnKTtcblxuZXhwb3J0IGNvbnN0ICB1c2V
yR3JlZXRpbmcgPSAoKSA9PiB7XG4gIGNvbnN0IHVzZXJOYW1lID0gcmVhZGxpbmVTeW5jLnF1ZXN0aW9
uKCdNYXkgSSBoYXZlIHlvdXIgbmFtZT8gJyk7XG4gIGNvbnNvbGUubG9nKGBoaSAke3VzZXJOYW1lfSA
hYCk7XG59O1xuIl19 */
