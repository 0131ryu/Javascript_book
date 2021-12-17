var user = require('./user.js');
var board = require('./board.js');

var ServerFunction = ()=>{
	if( condition == 'user' ){
		user.main();
	}else if( condition == 'board' ){
		board.main();
	}
};

ServerFunction.createServer(); 

//createServer 대신 express 사용할 것