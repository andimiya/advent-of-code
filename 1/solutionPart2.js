const { input } = require('./input');

var sums = [];

for (var i = 0; i < input.length; i++)
{
  var sum = input[i] + input[i+1] + input[i+2];
  sums.push(sum);
}

var count = 0;

for (var i = 0; i < sums.length; i++)
{
  if (sums[i] < sums[i+1])
  {
    count++;
  }
}

console.log(count, 'count');

// O(N) time