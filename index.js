var parse = require('acorn').parse;

module.exports = function halstead(source) {
	var tree = parse(source, { ecmaVersion: 6 });

	// TODO: implement me

	return { difficulty: 0, volume: 0, effort: 0 };
};
