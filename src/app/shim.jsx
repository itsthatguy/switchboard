/**
 * Browser-dev shim
 * shim all native modules here
 */

(function(){
  function shim(name){ // jshint ignore:line
    // put shims for native-requires in here, for browser testing

    switch (name) {
      case 'irc': {
        return {}
      }
    }
  }

  window.nativeRequire = (window.shim) ? require : shim; //jshint ignore:line
})();
