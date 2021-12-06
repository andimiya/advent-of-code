const { input } = require('./input');

var count = 0;

for (var i = 0; i < input.length; i++)
{
  if (input[i] < input[i+1])
  {
    count++;
  }
}

console.log(count, 'count');

// O(N) time