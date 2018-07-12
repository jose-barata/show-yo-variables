(function () {
	var ret = ""
	var arr = [
		"a", "b", "c", "d", "e",
		"f", "g", "h", "i", "j",
		"k", "l", "m", "n", "o",
		"p", "q", "r", "s", "t",
		"u", "v", "x", "y", "z"
	];
	for (var index in arr) {
		try {
			var testy = arr[index];
			eval(testy);
			ret += testy;
		} catch (e) {
			// do nothing
		}
	}
	return ret;
})();