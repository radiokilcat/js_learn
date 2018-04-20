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
  var getRandomArbitary = function getRandomArbitary(min, max) {
    return Math.random() * (max - min) + min;
  };
  var randomNumber = getRandomArbitary(1, 100);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJncmVldGluZyIsImNvbnNvbGUiLCJsb2ciLCJ1c2VyR3JlZXRpbmciLCJ1c2VyTmFtZSIsInF1ZXN0aW9uIiwiY3ljbGUiLCJjb3VudCIsImdldFJhbmRvbUFyYml0YXJ5IiwibWluIiwibWF4IiwiTWF0aCIsInJhbmRvbSIsInJhbmRvbU51bWJlciIsImFuc3dlcjEiLCJpc0V2ZW4iLCJudW0iLCJjb3JyZWN0QW5zd2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7OztBQUdPLElBQU1BLDhCQUFXLFNBQVhBLFFBQVc7QUFBQSxTQUFNQyxRQUFRQyxHQUFSLENBQVksNkJBQVosQ0FBTjtBQUFBLENBQWpCOztBQUVBLElBQU1DLHNDQUFlLFNBQWZBLFlBQWUsR0FBTTtBQUNoQyxNQUFNQyxXQUFXLHVCQUFhQyxRQUFiLENBQXNCLHdCQUF0QixDQUFqQjtBQUNBSixVQUFRQyxHQUFSLFNBQWtCRSxRQUFsQjtBQUNELENBSE07O0FBS0EsSUFBTUUsd0JBQVEsU0FBUkEsS0FBUSxDQUFDQyxLQUFELEVBQVc7QUFDOUIsTUFBSUEsVUFBVSxDQUFkLEVBQWlCO0FBQ2ZOLFlBQVFDLEdBQVIsQ0FBWSx3QkFBWjtBQUNBLFdBQU8sQ0FBUDtBQUNEO0FBQ0QsTUFBTU0sb0JBQW9CLFNBQXBCQSxpQkFBb0IsQ0FBQ0MsR0FBRCxFQUFNQyxHQUFOO0FBQUEsV0FBZUMsS0FBS0MsTUFBTCxNQUFpQkYsTUFBTUQsR0FBdkIsQ0FBRCxHQUFnQ0EsR0FBOUM7QUFBQSxHQUExQjtBQUNBLE1BQU1JLGVBQWVMLGtCQUFrQixDQUFsQixFQUFxQixHQUFyQixDQUFyQjtBQUNBLE1BQU1NLFVBQVUsdUJBQWFULFFBQWIsU0FBNEJRLFlBQTVCLHNCQUFoQjtBQUNBLE1BQU1FLFNBQVMsU0FBVEEsTUFBUyxDQUFDQyxHQUFELEVBQVM7QUFDdEIsUUFBSUEsTUFBTSxDQUFOLEtBQVksQ0FBaEIsRUFBbUI7QUFDakIsYUFBTyxLQUFQO0FBQ0Q7QUFDRCxXQUFPLElBQVA7QUFDRCxHQUxEO0FBTUEsTUFBTUMsZ0JBQWdCRixPQUFPRixZQUFQLENBQXRCO0FBQ0EsTUFBSUMsWUFBWUcsYUFBaEIsRUFBK0I7QUFDN0JoQixZQUFRQyxHQUFSLENBQVksVUFBWjtBQUNBLFdBQU9JLE1BQU1DLFFBQVEsQ0FBZCxDQUFQO0FBQ0Q7QUFDRE4sVUFBUUMsR0FBUixDQUFlWSxPQUFmLGdEQUFpRUcsYUFBakU7QUFFQSxTQUFPWCxNQUFNQyxLQUFOLENBQVA7QUFDRCxDQXRCTSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZWFkbGluZVN5bmMgZnJvbSAncmVhZGxpbmUtc3luYyc7XG5cblxuZXhwb3J0IGNvbnN0IGdyZWV0aW5nID0gKCkgPT4gY29uc29sZS5sb2coJ1dlbGNvbWUgdG8gdGhlIEJyYWluIEdhbWVzIScpO1xuXG5leHBvcnQgY29uc3QgdXNlckdyZWV0aW5nID0gKCkgPT4ge1xuICBjb25zdCB1c2VyTmFtZSA9IHJlYWRsaW5lU3luYy5xdWVzdGlvbignTWF5IEkgaGF2ZSB5b3VyIG5hbWU/ICcpO1xuICBjb25zb2xlLmxvZyhgaGkgJHt1c2VyTmFtZX0gIWApO1xufTtcblxuZXhwb3J0IGNvbnN0IGN5Y2xlID0gKGNvdW50KSA9PiB7XG4gIGlmIChjb3VudCA9PT0gMykge1xuICAgIGNvbnNvbGUubG9nKCdDb25ncmF0dWxhdGlvbnMsIEJpbGwhJyk7XG4gICAgcmV0dXJuIDA7XG4gIH1cbiAgY29uc3QgZ2V0UmFuZG9tQXJiaXRhcnkgPSAobWluLCBtYXgpID0+IChNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikpICsgbWluO1xuICBjb25zdCByYW5kb21OdW1iZXIgPSBnZXRSYW5kb21BcmJpdGFyeSgxLCAxMDApO1xuICBjb25zdCBhbnN3ZXIxID0gcmVhZGxpbmVTeW5jLnF1ZXN0aW9uKGBJcyAke3JhbmRvbU51bWJlcn0gaXMgZXZlbiBudW1iZXI/YCk7XG4gIGNvbnN0IGlzRXZlbiA9IChudW0pID0+IHtcbiAgICBpZiAobnVtICUgMiA9PT0gMCkge1xuICAgICAgcmV0dXJuICd5ZXMnO1xuICAgIH1cbiAgICByZXR1cm4gJ25vJztcbiAgfTtcbiAgY29uc3QgY29ycmVjdEFuc3dlciA9IGlzRXZlbihyYW5kb21OdW1iZXIpO1xuICBpZiAoYW5zd2VyMSA9PT0gY29ycmVjdEFuc3dlcikge1xuICAgIGNvbnNvbGUubG9nKCdDb3JyZWN0IScpO1xuICAgIHJldHVybiBjeWNsZShjb3VudCArIDEpO1xuICB9XG4gIGNvbnNvbGUubG9nKGAke2Fuc3dlcjF9IGlzIHdyb25nIGFuc3dlciA7KC4gQ29ycmVjdCBhbnN3ZXIgd2FzICR7Y29ycmVjdEFuc3dlcn0uXG4gIExldCdzIHRyeSBhZ2FpbiwgQmlsbCFgKTtcbiAgcmV0dXJuIGN5Y2xlKGNvdW50KTtcbn07XG4iXX0=