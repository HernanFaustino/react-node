process.env.NODE_ENV = 'test';
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index');
let should = chai.should();

chai.use(chaiHttp);

describe('Files', () => {
  describe('/GET api/v1/files/list', () => {
    it('it should GET all the files', (done) => {
      chai
        .request(server)
        .get('/api/v1/files/list')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.status.should.be.eql('OK');
          res.body.data.files.should.be.a('array');
          done();
        });
    });
  });
  describe('/GET api/v1/files/data', () => {
    it('it should GET all data files', (done) => {
      chai
        .request(server)
        .get('/api/v1/files/data')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.status.should.be.eql('OK');
          res.body.data.should.be.a('array');
          done();
        });
    });
    it('it should GET one file data', (done) => {
      chai
        .request(server)
        .get('/api/v1/files/data?fileName=test3.csv')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.status.should.be.eql('OK');
          res.body.data.length.should.be.eql(1);
          done();
        });
    });

    it('it should FAIL with not found file data', (done) => {
      chai
        .request(server)
        .get('/api/v1/files/data?fileName=test5.csv')
        .end((err, res) => {
          res.should.have.status(400);
          res.body.status.should.be.eql('FAILED');
          res.body.data.should.have.property('error');
          done();
        });
    });

  });
});
