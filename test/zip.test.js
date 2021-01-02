'use strict';

const mock = require('egg-mock');

describe('test/zip.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/zip-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, zip')
      .expect(200);
  });
});
