var expect = require('expect');
var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', function () {
  it('should generate the correct message object', function () {
    var from = 'Johan';
    var text = 'This is a test';
    var message = generateMessage(from, text);
    
    expect(typeof message.createdAt).toBe('number');
    expect(message).toMatchObject({from, text})
  });
});

describe('generateLocationMessage', function () {
  it('should generate correct location object', function () {
    var from = 'Johan';
    var latitude = -33.6975084;
    var longitude = 18.4437262;
    
    var message = generateLocationMessage(from, latitude, longitude);
    
    expect(typeof message.createdAt).toBe('number');
    expect(message).toMatchObject({
      from,
      url: `https://www.google.com/maps?q=${latitude},${longitude}`
    });
  });
});

