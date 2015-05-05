var parse = require('acorn').parse,
	estraverse = require('estraverse');

module.exports = function halstead(source) {
	var ast = parse(source, { ecmaVersion: 6 }),
		operators = 0;

	estraverse.traverse(ast, {
		enter: function(node) {
			switch(node.type){
				case 'FunctionDeclaration':
					// falls through
				case 'ArrowFunctionExpression':
					// falls through
				case 'FunctionExpression':
					console.log(node.type, identifiers(node.body));
					// return estraverse.VisitorOption.Skip;
					break;

				default:
					// console.log(node);
			}
		}
	});


	return { difficulty: 0, volume: 0, effort: 0 };
};

function identifiers(ast) {
	var list = [];

	estraverse.traverse(ast, {
		enter: function(node) {
			var operandTypes = ['Identifier', 'Literal'];

			if (operandTypes.indexOf(node.type) >= 0) {
				list.push(node);
			}
		}
	});

	return list;
}


module.exports(module.exports.toString());
