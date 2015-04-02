var should = require('chai').should(),
    number2text = require('../index');

 describe('ones', function() {
  
  it('Converts 1 to One', function() {
    number2text(1).should.equal('One');
  });

  it('Converts 2 to Two', function() {
    number2text(2).should.equal('Two');
  });

  it('Converts 3 to Three', function() {
    number2text(3).should.equal('Three');
  });

  it('Converts 4 to One', function() {
    number2text(4).should.equal('Four');
  });

  it('Converts 5 to One', function() {
    number2text(5).should.equal('Five');
  });

  it('Converts 6 to One', function() {
    number2text(6).should.equal('Six');
  });

  it('Converts 7 to One', function() {
    number2text(7).should.equal('Seven');
  });

  it('Converts 8 to One', function() {
    number2text(8).should.equal('Eight');
  });

 it('Converts 9 to One', function() {
    number2text(9).should.equal('Nine');
  });

});

 describe('Tens', function() {
  
  it('Converts 10 to Ten', function() {
    number2text(10).should.equal('Ten');
  });

  it('Converts 20 to Twenty', function() {
    number2text(20).should.equal('Twenty');
  });

  it('Converts 3 to Three', function() {
    number2text(30).should.equal('Thirty');
  });

  it('Converts 40 to One', function() {
    number2text(40).should.equal('Forty');
  });

  it('Converts 50 to One', function() {
    number2text(50).should.equal('Fifty');
  });

  it('Converts 60 to One', function() {
    number2text(60).should.equal('Sixty');
  });

  it('Converts 70 to One', function() {
    number2text(70).should.equal('Seventy');
  });

  it('Converts 80 to One', function() {
    number2text(80).should.equal('Eighty');
  });

  it('Converts 9 to One', function() {
    number2text(90).should.equal('Ninety');
  });
});

describe('Negative Tests', function() {
  
  it('Test for invalid number', function() {
    number2text('N').should.equal('Invalid number.');
  });

 it('Test for decimal', function() {
    number2text('10.10').should.equal('Currently support for decimal is unavailable.');
  });

it('Out of range - Lower', function() {
    number2text(-1).should.equal('Please enter number between 0 - 999999999.');
  });

it('Out of range - Higher', function() {
    number2text(1000000000).should.equal('Please enter number between 0 - 999999999.');
  });

});