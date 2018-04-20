'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.gameCycle = exports.isEven = exports.randomOperation = exports.getRandomInt = exports.userGreeting = exports.greeting = undefined;

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

var randomOperation = exports.randomOperation = function randomOperation(a, b) {
  var random = getRandomInt(1, 3);
  var result = 0;
  var log = '';
  switch (random) {
    case 1:
      result = a + b;
      log = 'a + b';
      break;
    case 2:
      result = a - b;
      log = 'a + b';
      break;
    case 3:
      result = a * b;
      log = 'a + b';
      break;
    default:
      return 0;
  }
  return result;
};

var isEven = exports.isEven = function isEven(num) {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

var gameCycle = exports.gameCycle = function gameCycle(count, question, func) {
  var questionValue = question(1, 100);
  var correctAnswer = func(questionValue);

  if (count === 3) {
    console.log('Congratulations, Bill!');
    return 0;
  }
  var userAnswer = _readlineSync2.default.question('Question: ' + questionValue + ' ');
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    return gameCycle(count + 1, question, func);
  }
  console.log(userAnswer + ' is wrong answer ;(. Correct answer was ' + correctAnswer + '.\n  Let\'s try again, Bill!');
  return gameCycle(count, question, func);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJncmVldGluZyIsImNvbnNvbGUiLCJsb2ciLCJ1c2VyR3JlZXRpbmciLCJ1c2VyTmFtZSIsInF1ZXN0aW9uIiwiZ2V0UmFuZG9tSW50IiwibWluIiwibWF4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicmFuZG9tT3BlcmF0aW9uIiwiYSIsImIiLCJyZXN1bHQiLCJpc0V2ZW4iLCJudW0iLCJnYW1lQ3ljbGUiLCJjb3VudCIsImZ1bmMiLCJxdWVzdGlvblZhbHVlIiwiY29ycmVjdEFuc3dlciIsInVzZXJBbnN3ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7O0FBR08sSUFBTUEsOEJBQVcsU0FBWEEsUUFBVztBQUFBLFNBQU1DLFFBQVFDLEdBQVIsQ0FBWSw2QkFBWixDQUFOO0FBQUEsQ0FBakI7O0FBRUEsSUFBTUMsc0NBQWUsU0FBZkEsWUFBZSxHQUFNO0FBQ2hDLE1BQU1DLFdBQVcsdUJBQWFDLFFBQWIsQ0FBc0Isd0JBQXRCLENBQWpCO0FBQ0FKLFVBQVFDLEdBQVIsU0FBa0JFLFFBQWxCO0FBQ0QsQ0FITTs7QUFLQSxJQUFNRSxzQ0FBZSxTQUFmQSxZQUFlLENBQUNDLEdBQUQsRUFBTUMsR0FBTjtBQUFBLFNBQWNDLEtBQUtDLEtBQUwsQ0FBV0QsS0FBS0UsTUFBTCxNQUFpQkgsTUFBTUQsR0FBdkIsQ0FBWCxJQUEwQ0EsR0FBeEQ7QUFBQSxDQUFyQjs7QUFFQSxJQUFNSyw0Q0FBa0IsU0FBbEJBLGVBQWtCLENBQUNDLENBQUQsRUFBSUMsQ0FBSixFQUFVO0FBQ3ZDLE1BQU1ILFNBQVNMLGFBQWEsQ0FBYixFQUFnQixDQUFoQixDQUFmO0FBQ0EsTUFBSVMsU0FBUyxDQUFiO0FBQ0EsTUFBSWIsTUFBTSxFQUFWO0FBQ0EsVUFBUVMsTUFBUjtBQUNFLFNBQUssQ0FBTDtBQUNFSSxlQUFTRixJQUFJQyxDQUFiO0FBQ0FaLFlBQU0sT0FBTjtBQUNBO0FBQ0YsU0FBSyxDQUFMO0FBQ0VhLGVBQVNGLElBQUlDLENBQWI7QUFDQVosWUFBTSxPQUFOO0FBQ0E7QUFDRixTQUFLLENBQUw7QUFDRWEsZUFBU0YsSUFBSUMsQ0FBYjtBQUNBWixZQUFNLE9BQU47QUFDQTtBQUNGO0FBQ0UsYUFBTyxDQUFQO0FBZEo7QUFnQkEsU0FBT2EsTUFBUDtBQUNELENBckJNOztBQXdCQSxJQUFNQywwQkFBUyxTQUFUQSxNQUFTLENBQUNDLEdBQUQsRUFBUztBQUM3QixNQUFJQSxNQUFNLENBQU4sS0FBWSxDQUFoQixFQUFtQjtBQUNqQixXQUFPLEtBQVA7QUFDRDtBQUNELFNBQU8sSUFBUDtBQUNELENBTE07O0FBU0EsSUFBTUMsZ0NBQVksU0FBWkEsU0FBWSxDQUFDQyxLQUFELEVBQVFkLFFBQVIsRUFBa0JlLElBQWxCLEVBQTJCO0FBQ2xELE1BQU1DLGdCQUFnQmhCLFNBQVMsQ0FBVCxFQUFZLEdBQVosQ0FBdEI7QUFDQSxNQUFNaUIsZ0JBQWdCRixLQUFLQyxhQUFMLENBQXRCOztBQUVBLE1BQUlGLFVBQVUsQ0FBZCxFQUFpQjtBQUNmbEIsWUFBUUMsR0FBUixDQUFZLHdCQUFaO0FBQ0EsV0FBTyxDQUFQO0FBQ0Q7QUFDRCxNQUFNcUIsYUFBYSx1QkFBYWxCLFFBQWIsZ0JBQW1DZ0IsYUFBbkMsT0FBbkI7QUFDQSxNQUFJRSxlQUFlRCxhQUFuQixFQUFrQztBQUNoQ3JCLFlBQVFDLEdBQVIsQ0FBWSxVQUFaO0FBQ0EsV0FBT2dCLFVBQVVDLFFBQVEsQ0FBbEIsRUFBcUJkLFFBQXJCLEVBQStCZSxJQUEvQixDQUFQO0FBQ0Q7QUFDRG5CLFVBQVFDLEdBQVIsQ0FBZXFCLFVBQWYsZ0RBQW9FRCxhQUFwRTtBQUVBLFNBQU9KLFVBQVVDLEtBQVYsRUFBaUJkLFFBQWpCLEVBQTJCZSxJQUEzQixDQUFQO0FBQ0QsQ0FoQk0iLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVhZGxpbmVTeW5jIGZyb20gJ3JlYWRsaW5lLXN5bmMnO1xuXG5cbmV4cG9ydCBjb25zdCBncmVldGluZyA9ICgpID0+IGNvbnNvbGUubG9nKCdXZWxjb21lIHRvIHRoZSBCcmFpbiBHYW1lcyEnKTtcblxuZXhwb3J0IGNvbnN0IHVzZXJHcmVldGluZyA9ICgpID0+IHtcbiAgY29uc3QgdXNlck5hbWUgPSByZWFkbGluZVN5bmMucXVlc3Rpb24oJ01heSBJIGhhdmUgeW91ciBuYW1lPyAnKTtcbiAgY29uc29sZS5sb2coYGhpICR7dXNlck5hbWV9ICFgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRSYW5kb21JbnQgPSAobWluLCBtYXgpID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pKSArIG1pbjtcblxuZXhwb3J0IGNvbnN0IHJhbmRvbU9wZXJhdGlvbiA9IChhLCBiKSA9PiB7XG4gIGNvbnN0IHJhbmRvbSA9IGdldFJhbmRvbUludCgxLCAzKTtcbiAgbGV0IHJlc3VsdCA9IDA7XG4gIGxldCBsb2cgPSAnJztcbiAgc3dpdGNoIChyYW5kb20pIHtcbiAgICBjYXNlIDE6XG4gICAgICByZXN1bHQgPSBhICsgYjtcbiAgICAgIGxvZyA9ICdhICsgYic7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDI6XG4gICAgICByZXN1bHQgPSBhIC0gYjtcbiAgICAgIGxvZyA9ICdhICsgYic7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDM6XG4gICAgICByZXN1bHQgPSBhICogYjtcbiAgICAgIGxvZyA9ICdhICsgYic7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIDA7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cblxuZXhwb3J0IGNvbnN0IGlzRXZlbiA9IChudW0pID0+IHtcbiAgaWYgKG51bSAlIDIgPT09IDApIHtcbiAgICByZXR1cm4gJ3llcyc7XG4gIH1cbiAgcmV0dXJuICdubyc7XG59O1xuXG5cblxuZXhwb3J0IGNvbnN0IGdhbWVDeWNsZSA9IChjb3VudCwgcXVlc3Rpb24sIGZ1bmMpID0+IHtcbiAgY29uc3QgcXVlc3Rpb25WYWx1ZSA9IHF1ZXN0aW9uKDEsIDEwMCk7XG4gIGNvbnN0IGNvcnJlY3RBbnN3ZXIgPSBmdW5jKHF1ZXN0aW9uVmFsdWUpO1xuXG4gIGlmIChjb3VudCA9PT0gMykge1xuICAgIGNvbnNvbGUubG9nKCdDb25ncmF0dWxhdGlvbnMsIEJpbGwhJyk7XG4gICAgcmV0dXJuIDA7XG4gIH1cbiAgY29uc3QgdXNlckFuc3dlciA9IHJlYWRsaW5lU3luYy5xdWVzdGlvbihgUXVlc3Rpb246ICR7cXVlc3Rpb25WYWx1ZX0gYCk7XG4gIGlmICh1c2VyQW5zd2VyID09PSBjb3JyZWN0QW5zd2VyKSB7XG4gICAgY29uc29sZS5sb2coJ0NvcnJlY3QhJyk7XG4gICAgcmV0dXJuIGdhbWVDeWNsZShjb3VudCArIDEsIHF1ZXN0aW9uLCBmdW5jKTtcbiAgfVxuICBjb25zb2xlLmxvZyhgJHt1c2VyQW5zd2VyfSBpcyB3cm9uZyBhbnN3ZXIgOyguIENvcnJlY3QgYW5zd2VyIHdhcyAke2NvcnJlY3RBbnN3ZXJ9LlxuICBMZXQncyB0cnkgYWdhaW4sIEJpbGwhYCk7XG4gIHJldHVybiBnYW1lQ3ljbGUoY291bnQsIHF1ZXN0aW9uLCBmdW5jKTtcbn07XG4iXX0=