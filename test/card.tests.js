'use strict';

var expect = require('chai').expect;
var cheerio = require('cheerio');
var surfCards = require('../surfcards/renderer');

describe('Cards', function() {

  it('should return html string', function() {

    var rendered = surfCards.render({});
    expect(rendered).to.be.a('string');
    expect(rendered.indexOf('<div')).to.be.at.least(0);
    
  });

});
