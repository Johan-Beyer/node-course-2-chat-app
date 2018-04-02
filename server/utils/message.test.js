var expect = require('expect');
var {generateMessage} = require('./message');

describe('generateMessage', function () {
  it('should generate the correct message object', function () {
    var from = 'Johan';
    var text = 'This is a test';
    var message = generateMessage(from, text);
    
    expect(typeof message.createdAt).toBe('number');
    expect(message).toMatchObject({from, text})
  });
});