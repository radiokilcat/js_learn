'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.gameCycle = exports.getRandomInt = exports.userGreeting = exports.greeting = undefined;

var _hexletPairs = require('hexlet-pairs');

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

var getRandomInt = exports.getRandomInt = function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

var gameCycle = exports.gameCycle = function gameCycle(count, question) {
  var questionPair = question();
  var questionValue = (0, _hexletPairs.car)(questionPair);
  var correctAnswer = (0, _hexletPairs.cdr)(questionPair);

  if (count === 3) {
    console.log('Congratulations, Bill!');
    return 0;
  }
  var userAnswer = _readlineSync2.default.question('Question: ' + questionValue + ' ');
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    return gameCycle(count + 1, question);
  }
  console.log(userAnswer + ' is wrong answer ;(. Correct answer was ' + correctAnswer + '.\n  Let\'s try again, Bill!');
  return gameCycle(count, question);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJncmVldGluZyIsImNvbnNvbGUiLCJsb2ciLCJ1c2VyR3JlZXRpbmciLCJ1c2VyTmFtZSIsInF1ZXN0aW9uIiwiZ2V0UmFuZG9tSW50IiwibWluIiwibWF4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiZ2FtZUN5Y2xlIiwiY291bnQiLCJxdWVzdGlvblBhaXIiLCJxdWVzdGlvblZhbHVlIiwiY29ycmVjdEFuc3dlciIsInVzZXJBbnN3ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7O0FBR08sSUFBTUEsOEJBQVcsU0FBWEEsUUFBVztBQUFBLFNBQU1DLFFBQVFDLEdBQVIsQ0FBWSw2QkFBWixDQUFOO0FBQUEsQ0FBakI7O0FBRUEsSUFBTUMsc0NBQWUsU0FBZkEsWUFBZSxHQUFNO0FBQ2hDLE1BQU1DLFdBQVcsdUJBQWFDLFFBQWIsQ0FBc0Isd0JBQXRCLENBQWpCO0FBQ0FKLFVBQVFDLEdBQVIsU0FBa0JFLFFBQWxCO0FBQ0QsQ0FITTs7QUFLQSxJQUFNRSxzQ0FBZSxTQUFmQSxZQUFlLENBQUNDLEdBQUQsRUFBTUMsR0FBTjtBQUFBLFNBQWNDLEtBQUtDLEtBQUwsQ0FBV0QsS0FBS0UsTUFBTCxNQUFpQkgsTUFBTUQsR0FBdkIsQ0FBWCxJQUEwQ0EsR0FBeEQ7QUFBQSxDQUFyQjs7QUFFQSxJQUFNSyxnQ0FBWSxTQUFaQSxTQUFZLENBQUNDLEtBQUQsRUFBUVIsUUFBUixFQUFxQjtBQUM1QyxNQUFNUyxlQUFlVCxVQUFyQjtBQUNBLE1BQU1VLGdCQUFnQixzQkFBSUQsWUFBSixDQUF0QjtBQUNBLE1BQU1FLGdCQUFnQixzQkFBSUYsWUFBSixDQUF0Qjs7QUFFQSxNQUFJRCxVQUFVLENBQWQsRUFBaUI7QUFDZlosWUFBUUMsR0FBUixDQUFZLHdCQUFaO0FBQ0EsV0FBTyxDQUFQO0FBQ0Q7QUFDRCxNQUFNZSxhQUFhLHVCQUFhWixRQUFiLGdCQUFtQ1UsYUFBbkMsT0FBbkI7QUFDQSxNQUFJRSxlQUFlRCxhQUFuQixFQUFrQztBQUNoQ2YsWUFBUUMsR0FBUixDQUFZLFVBQVo7QUFDQSxXQUFPVSxVQUFVQyxRQUFRLENBQWxCLEVBQXFCUixRQUFyQixDQUFQO0FBQ0Q7QUFDREosVUFBUUMsR0FBUixDQUFlZSxVQUFmLGdEQUFvRUQsYUFBcEU7QUFFQSxTQUFPSixVQUFVQyxLQUFWLEVBQWlCUixRQUFqQixDQUFQO0FBQ0QsQ0FqQk0iLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjYXIsIGNkciB9IGZyb20gJ2hleGxldC1wYWlycyc7XG5pbXBvcnQgcmVhZGxpbmVTeW5jIGZyb20gJ3JlYWRsaW5lLXN5bmMnO1xuXG5cbmV4cG9ydCBjb25zdCBncmVldGluZyA9ICgpID0+IGNvbnNvbGUubG9nKCdXZWxjb21lIHRvIHRoZSBCcmFpbiBHYW1lcyEnKTtcblxuZXhwb3J0IGNvbnN0IHVzZXJHcmVldGluZyA9ICgpID0+IHtcbiAgY29uc3QgdXNlck5hbWUgPSByZWFkbGluZVN5bmMucXVlc3Rpb24oJ01heSBJIGhhdmUgeW91ciBuYW1lPyAnKTtcbiAgY29uc29sZS5sb2coYGhpICR7dXNlck5hbWV9ICFgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRSYW5kb21JbnQgPSAobWluLCBtYXgpID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pKSArIG1pbjtcblxuZXhwb3J0IGNvbnN0IGdhbWVDeWNsZSA9IChjb3VudCwgcXVlc3Rpb24pID0+IHtcbiAgY29uc3QgcXVlc3Rpb25QYWlyID0gcXVlc3Rpb24oKTtcbiAgY29uc3QgcXVlc3Rpb25WYWx1ZSA9IGNhcihxdWVzdGlvblBhaXIpO1xuICBjb25zdCBjb3JyZWN0QW5zd2VyID0gY2RyKHF1ZXN0aW9uUGFpcik7XG5cbiAgaWYgKGNvdW50ID09PSAzKSB7XG4gICAgY29uc29sZS5sb2coJ0NvbmdyYXR1bGF0aW9ucywgQmlsbCEnKTtcbiAgICByZXR1cm4gMDtcbiAgfVxuICBjb25zdCB1c2VyQW5zd2VyID0gcmVhZGxpbmVTeW5jLnF1ZXN0aW9uKGBRdWVzdGlvbjogJHtxdWVzdGlvblZhbHVlfSBgKTtcbiAgaWYgKHVzZXJBbnN3ZXIgPT09IGNvcnJlY3RBbnN3ZXIpIHtcbiAgICBjb25zb2xlLmxvZygnQ29ycmVjdCEnKTtcbiAgICByZXR1cm4gZ2FtZUN5Y2xlKGNvdW50ICsgMSwgcXVlc3Rpb24pO1xuICB9XG4gIGNvbnNvbGUubG9nKGAke3VzZXJBbnN3ZXJ9IGlzIHdyb25nIGFuc3dlciA7KC4gQ29ycmVjdCBhbnN3ZXIgd2FzICR7Y29ycmVjdEFuc3dlcn0uXG4gIExldCdzIHRyeSBhZ2FpbiwgQmlsbCFgKTtcbiAgcmV0dXJuIGdhbWVDeWNsZShjb3VudCwgcXVlc3Rpb24pO1xufTtcbiJdfQ==