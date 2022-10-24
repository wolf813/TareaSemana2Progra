
const fs = require('fs');

console.log('Iniciamos la aplicacion')
fs.readFile('./DB/data.json',
		{encoding:'utf8', flag:'r'},
		function(err, data) {
	if(err)
		console.log(err);
	else
		console.log('evento 1',JSON.parse(data));
});
console.log('Finaliza la primer lectura del archivo data.json')

console.log('iniciamos la lectura del segundo archivo')
const data = fs.readFileSync('./DB/data.json',
			{encoding:'utf8', flag:'r'});

console.log('evento 2',JSON.parse(data));
console.log('fin del programa')