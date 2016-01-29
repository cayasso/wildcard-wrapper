'use strict';

export default context => {

  // Make sure we have a context.
  context = context || {};
  const noop = () => {};

  /**
   * Wildcard keys.
   *
   * @type {Array}
   * @api private
   */

  let keys = [];

  /**
   * Match wildcard keys.
   *
   * @param {String} ev
   * @param {Function} fn
   * @api public
   */

  const match = (ev, fn = noop) => keys.filter(k => {
      const matches = !!regex(k).exec(ev);
      matches && fn(k, matches);
      return !!matches;
    });

  /**
   * Add key to wildcard list.
   *
   * @param {String} key
   * @return {Boolean}
   * @api private
   */

  const add = key => {
    if ('string' === typeof key
      && ~key.indexOf('*')
      && !~keys.indexOf(key)) {
      keys.push(key);
    };
  };

  /**
   * Remove key from wildcard list.
   *
   * @param {String} key
   * @return {Boolean}
   * @api private
   */

  const remove = key => {
    if ('string' === typeof key
      && ~key.indexOf('*')) {
      const i = keys.indexOf(key);
      if (~i) keys.splice(i, 1);
    };
  };

  /**
   * Check to see if wildcard key is in the key list.
   *
   * @param {String} key
   * @return {Boolean}
   * @api public
   */

  const has = key => !!('string' === typeof key
    && ~key.indexOf('*')
    && ~keys.indexOf(key))

  /**
   * Wild card regular expresion builder.
   *
   * @param {String} pattern
   * @param {RegEx}
   * @api private
   */

  function regex(pattern) {
    pattern = pattern.replace(/[\*]/g, '(.*?)');
    return new RegExp(`^${pattern}$`);
  };

  // Expose wildcard namespace
  return context.wildcard = { match, add, has, remove };

};
