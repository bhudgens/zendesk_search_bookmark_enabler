function getParameterByName(name) {
  const _url = window.location.href;
  const _name = name.replace(/[[]]/g, "\\$&");
  const _regex = new RegExp("[?&]" + _name + "(=([^&#]*)|&|#|$)");
  const _results = _regex.exec(_url);
  return _results && _results[2]
    ? decodeURIComponent(_results[2].replace(/\+/g, " "))
    : null;
}

(function() {
  const _hostRegex = /^.*\.zendesk\.com$/;
  const _pathRegex = /\/agent\/search\/\d+/;

  if (!window.location.host.match(_hostRegex) || !window.location.pathname.match(_pathRegex)) {
    return;
  }

  console.info("Zendesk Search Page Detected");

  /**
   * It is possible for the DOM to not be loaded when we are called.  This can
   * happen if parts of the DOM are dynamically generated even if we set
   * our run_at in the manifest.  So we setup something to listen for the form
   * element on the search page
   */
  var domLoadTimer = setInterval(() => {
    const _searchBox = document.getElementsByClassName('classic_input query-field')[0];
    if (_searchBox) {
      clearInterval(domLoadTimer);
      const _query = getParameterByName('query');
      if (_query) {
        _searchBox.value = _query;
        _searchBox.dispatchEvent(new Event('input', {
          'bubbles': true,
          'cancelable': true
        }));
      }
    }
  }, 100);

}());
