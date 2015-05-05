var parse = require('acorn').parse,
	estraverse = require('estraverse');
// > undefined

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
// > [Function: halstead]

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
// > undefined


module.exports(module.exports.toString());
// > FunctionDeclaration [ { start: 32, name: 'ast', type: 'Identifier', end: 35 },
// >   { start: 38, name: 'parse', type: 'Identifier', end: 43 },
// >   { start: 44, name: 'source', type: 'Identifier', end: 50 },
// >   { start: 54, name: 'ecmaVersion', type: 'Identifier', end: 65 },
// >   { start: 67, value: 6, raw: '6', type: 'Literal', end: 68 },
// >   { start: 73, name: 'operators', type: 'Identifier', end: 82 },
// >   { start: 85, value: 0, raw: '0', type: 'Literal', end: 86 },
// >   { start: 88, name: 'estraverse', type: 'Identifier', end: 98 },
// >   { start: 99, name: 'traverse', type: 'Identifier', end: 107 },
// >   { start: 108, name: 'ast', type: 'Identifier', end: 111 },
// >   { start: 115, name: 'enter', type: 'Identifier', end: 120 },
// >   { start: 131, name: 'node', type: 'Identifier', end: 135 },
// >   { start: 146, name: 'node', type: 'Identifier', end: 150 },
// >   { start: 151, name: 'type', type: 'Identifier', end: 155 },
// >   { start: 163,
// >     value: 'FunctionDeclaration',
// >     raw: '\'FunctionDeclaration\'',
// >     type: 'Literal',
// >     end: 184 },
// >   { start: 208,
// >     value: 'ArrowFunctionExpression',
// >     raw: '\'ArrowFunctionExpression\'',
// >     type: 'Literal',
// >     end: 233 },
// >   { start: 257,
// >     value: 'FunctionExpression',
// >     raw: '\'FunctionExpression\'',
// >     type: 'Literal',
// >     end: 277 },
// >   { start: 279, name: 'console', type: 'Identifier', end: 286 },
// >   { start: 287, name: 'log', type: 'Identifier', end: 290 },
// >   { start: 291, name: 'node', type: 'Identifier', end: 295 },
// >   { start: 296, name: 'type', type: 'Identifier', end: 300 },
// >   { start: 302, name: 'identifiers', type: 'Identifier', end: 313 },
// >   { start: 314, name: 'node', type: 'Identifier', end: 318 },
// >   { start: 319, name: 'body', type: 'Identifier', end: 323 },
// >   { start: 423, name: 'difficulty', type: 'Identifier', end: 433 },
// >   { start: 435, value: 0, raw: '0', type: 'Literal', end: 436 },
// >   { start: 438, name: 'volume', type: 'Identifier', end: 444 },
// >   { start: 446, value: 0, raw: '0', type: 'Literal', end: 447 },
// >   { start: 449, name: 'effort', type: 'Identifier', end: 455 },
// >   { start: 457, value: 0, raw: '0', type: 'Literal', end: 458 } ]
// > FunctionExpression [ { start: 146, name: 'node', type: 'Identifier', end: 150 },
// >   { start: 151, name: 'type', type: 'Identifier', end: 155 },
// >   { start: 163,
// >     value: 'FunctionDeclaration',
// >     raw: '\'FunctionDeclaration\'',
// >     type: 'Literal',
// >     end: 184 },
// >   { start: 208,
// >     value: 'ArrowFunctionExpression',
// >     raw: '\'ArrowFunctionExpression\'',
// >     type: 'Literal',
// >     end: 233 },
// >   { start: 257,
// >     value: 'FunctionExpression',
// >     raw: '\'FunctionExpression\'',
// >     type: 'Literal',
// >     end: 277 },
// >   { start: 279, name: 'console', type: 'Identifier', end: 286 },
// >   { start: 287, name: 'log', type: 'Identifier', end: 290 },
// >   { start: 291, name: 'node', type: 'Identifier', end: 295 },
// >   { start: 296, name: 'type', type: 'Identifier', end: 300 },
// >   { start: 302, name: 'identifiers', type: 'Identifier', end: 313 },
// >   { start: 314, name: 'node', type: 'Identifier', end: 318 },
// >   { start: 319, name: 'body', type: 'Identifier', end: 323 } ]
// > { difficulty: 0, volume: 0, effort: 0 }
