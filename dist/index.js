'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cycle = exports.userGreeting = exports.greeting = undefined;

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

var cycle = exports.cycle = function cycle(count) {
  if (count === 3) {
    console.log('Congratulations, Bill!');
    return 0;
  }
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  var randomNumber = getRandomInt(1, 100);
  var answer1 = _readlineSync2.default.question('Is ' + randomNumber + ' is even number?');
  var isEven = function isEven(num) {
    if (num % 2 === 0) {
      return 'yes';
    }
    return 'no';
  };
  var correctAnswer = isEven(randomNumber);
  if (answer1 === correctAnswer) {
    console.log('Correct!');
    return cycle(count + 1);
  }
  console.log(answer1 + ' is wrong answer ;(. Correct answer was ' + correctAnswer + '.\n  Let\'s try again, Bill!');
  return cycle(count);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJncmVldGluZyIsImNvbnNvbGUiLCJsb2ciLCJ1c2VyR3JlZXRpbmciLCJ1c2VyTmFtZSIsInF1ZXN0aW9uIiwiY3ljbGUiLCJjb3VudCIsImdldFJhbmRvbUludCIsIm1pbiIsIm1heCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInJhbmRvbU51bWJlciIsImFuc3dlcjEiLCJpc0V2ZW4iLCJudW0iLCJjb3JyZWN0QW5zd2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7OztBQUdPLElBQU1BLDhCQUFXLFNBQVhBLFFBQVc7QUFBQSxTQUFNQyxRQUFRQyxHQUFSLENBQVksNkJBQVosQ0FBTjtBQUFBLENBQWpCOztBQUVBLElBQU1DLHNDQUFlLFNBQWZBLFlBQWUsR0FBTTtBQUNoQyxNQUFNQyxXQUFXLHVCQUFhQyxRQUFiLENBQXNCLHdCQUF0QixDQUFqQjtBQUNBSixVQUFRQyxHQUFSLFNBQWtCRSxRQUFsQjtBQUNELENBSE07O0FBS0EsSUFBTUUsd0JBQVEsU0FBUkEsS0FBUSxDQUFDQyxLQUFELEVBQVc7QUFDOUIsTUFBSUEsVUFBVSxDQUFkLEVBQWlCO0FBQ2ZOLFlBQVFDLEdBQVIsQ0FBWSx3QkFBWjtBQUNBLFdBQU8sQ0FBUDtBQUNEO0FBQ0QsV0FBU00sWUFBVCxDQUFzQkMsR0FBdEIsRUFBMkJDLEdBQTNCLEVBQWdDO0FBQzlCLFdBQU9DLEtBQUtDLEtBQUwsQ0FBV0QsS0FBS0UsTUFBTCxNQUFpQkgsTUFBTUQsR0FBdkIsQ0FBWCxJQUEwQ0EsR0FBakQ7QUFDRDtBQUNELE1BQU1LLGVBQWVOLGFBQWEsQ0FBYixFQUFnQixHQUFoQixDQUFyQjtBQUNBLE1BQU1PLFVBQVUsdUJBQWFWLFFBQWIsU0FBNEJTLFlBQTVCLHNCQUFoQjtBQUNBLE1BQU1FLFNBQVMsU0FBVEEsTUFBUyxDQUFDQyxHQUFELEVBQVM7QUFDdEIsUUFBSUEsTUFBTSxDQUFOLEtBQVksQ0FBaEIsRUFBbUI7QUFDakIsYUFBTyxLQUFQO0FBQ0Q7QUFDRCxXQUFPLElBQVA7QUFDRCxHQUxEO0FBTUEsTUFBTUMsZ0JBQWdCRixPQUFPRixZQUFQLENBQXRCO0FBQ0EsTUFBSUMsWUFBWUcsYUFBaEIsRUFBK0I7QUFDN0JqQixZQUFRQyxHQUFSLENBQVksVUFBWjtBQUNBLFdBQU9JLE1BQU1DLFFBQVEsQ0FBZCxDQUFQO0FBQ0Q7QUFDRE4sVUFBUUMsR0FBUixDQUFlYSxPQUFmLGdEQUFpRUcsYUFBakU7QUFFQSxTQUFPWixNQUFNQyxLQUFOLENBQVA7QUFDRCxDQXhCTSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZWFkbGluZVN5bmMgZnJvbSAncmVhZGxpbmUtc3luYyc7XG5cblxuZXhwb3J0IGNvbnN0IGdyZWV0aW5nID0gKCkgPT4gY29uc29sZS5sb2coJ1dlbGNvbWUgdG8gdGhlIEJyYWluIEdhbWVzIScpO1xuXG5leHBvcnQgY29uc3QgdXNlckdyZWV0aW5nID0gKCkgPT4ge1xuICBjb25zdCB1c2VyTmFtZSA9IHJlYWRsaW5lU3luYy5xdWVzdGlvbignTWF5IEkgaGF2ZSB5b3VyIG5hbWU/ICcpO1xuICBjb25zb2xlLmxvZyhgaGkgJHt1c2VyTmFtZX0gIWApO1xufTtcblxuZXhwb3J0IGNvbnN0IGN5Y2xlID0gKGNvdW50KSA9PiB7XG4gIGlmIChjb3VudCA9PT0gMykge1xuICAgIGNvbnNvbGUubG9nKCdDb25ncmF0dWxhdGlvbnMsIEJpbGwhJyk7XG4gICAgcmV0dXJuIDA7XG4gIH1cbiAgZnVuY3Rpb24gZ2V0UmFuZG9tSW50KG1pbiwgbWF4KSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pKSArIG1pbjtcbiAgfVxuICBjb25zdCByYW5kb21OdW1iZXIgPSBnZXRSYW5kb21JbnQoMSwgMTAwKTtcbiAgY29uc3QgYW5zd2VyMSA9IHJlYWRsaW5lU3luYy5xdWVzdGlvbihgSXMgJHtyYW5kb21OdW1iZXJ9IGlzIGV2ZW4gbnVtYmVyP2ApO1xuICBjb25zdCBpc0V2ZW4gPSAobnVtKSA9PiB7XG4gICAgaWYgKG51bSAlIDIgPT09IDApIHtcbiAgICAgIHJldHVybiAneWVzJztcbiAgICB9XG4gICAgcmV0dXJuICdubyc7XG4gIH07XG4gIGNvbnN0IGNvcnJlY3RBbnN3ZXIgPSBpc0V2ZW4ocmFuZG9tTnVtYmVyKTtcbiAgaWYgKGFuc3dlcjEgPT09IGNvcnJlY3RBbnN3ZXIpIHtcbiAgICBjb25zb2xlLmxvZygnQ29ycmVjdCEnKTtcbiAgICByZXR1cm4gY3ljbGUoY291bnQgKyAxKTtcbiAgfVxuICBjb25zb2xlLmxvZyhgJHthbnN3ZXIxfSBpcyB3cm9uZyBhbnN3ZXIgOyguIENvcnJlY3QgYW5zd2VyIHdhcyAke2NvcnJlY3RBbnN3ZXJ9LlxuICBMZXQncyB0cnkgYWdhaW4sIEJpbGwhYCk7XG4gIHJldHVybiBjeWNsZShjb3VudCk7XG59O1xuIl19