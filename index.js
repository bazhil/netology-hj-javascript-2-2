

var drumButtons = document.getElementsByClassName('drum-kit__drum');var _iteratorNormalCompletion = true;var _didIteratorError = false;var _iteratorError = undefined;try {

    for (var _iterator = drumButtons[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {var btn = _step.value;
        btn.onclick = function () {
            var player = this.getElementsByTagName('audio')[0];
            player.pause();
            player.currentTime = 0;
            player.play();
        };
    }} catch (err) {_didIteratorError = true;_iteratorError = err;} finally {try {if (!_iteratorNormalCompletion && _iterator.return) {_iterator.return();}} finally {if (_didIteratorError) {throw _iteratorError;}}}