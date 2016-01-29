import wildcard from '../lib/index';

describe('verifyd-wildcard', function () {

  it('should be valid object', function () {
    wildcard.should.be.a.Function;
  });

  it('should have required methods', function () {
    var wild = wildcard();
    wild.add.should.be.a.Function;
    wild.remove.should.be.a.Function;
    wild.match.should.be.a.Function;
    wild.has.should.be.a.Function;
  });

  it('should add a key', function () {
    var wild = wildcard();
    wild.add('a:*');
    wild.has('a:*').should.be.true;
  });

  it('should remove a key', function () {
    var wild = wildcard();
    wild.add('b:*');
    wild.remove('b:*');
    wild.has('b:*').should.be.false;
  });

  it('should match a key', function () {
    var wild = wildcard();
    wild.add('c:*');
    wild.match('c:1', function (key) {
      key.should.be.eql('c:*');
    });
  });

  it('should match a keys', function () {
    var wild = wildcard();
    wild.add('c:*');
    wild.add('*:*');
    wild.add('*:1');
    var res = wild.match('c:1');
    res.should.containEql('c:*', '*:*', '*:1');
  });

});
