const supertest = require('supertest');

const app = require('./app');

test('Testing the 404 server error path', (done) => {
  supertest(app)
    .get('/estestesrtr')
    .expect(404)
    .expect('Content-Type', /html/)
    .end((err, res) => {
      if (err) {
        return done(err);
      }
      done();
    });
});

