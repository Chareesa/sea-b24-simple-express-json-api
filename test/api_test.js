var chai = require('chai');
var app = require('../server');
var chaihttp = require('chai-http');
chai.use(chaihttp);

describe('simpleJsonApi', function () {
  it('/localTime/ should send the local time', function (done) {
    chai.request(app)
      .get('/localTime')
      .end(function(err, res) {
          chai.expect(err).to.eql(null);
          chai.expect(res.body.msg).to.eql('Your local time is ' + (new Date().getHours()) + ':' + (new Date().getMinutes()));
          done();
      });
  });

  it('/name/:name should greet someone', function (done) {
      chai.request('http://localhost:4918')
        .get('/name/Milfred')
        .end(function (err, res) {
            chai.expect(err).to.eql(null);
            chai.expect(res.body.msg).to.eql('Well, hello Milfred!');
            done();
        });
  });
});
