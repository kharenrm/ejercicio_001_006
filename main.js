function vaciarPapelera(array) {
	// Esta función debe recibir un array y devolverlo habiéndole quitado los elementos que sean un asterisco (*)
	// Por ejeplo:
	// vaciarPapelera(['a',1,'*',5]) 
	// debe devolver:
	// ['a',1,5]
	return array.join("").replace("*","").split("");;

}
console.log(vaciarPapelera(['a',1,'*',5]))

function agruparElementos(array) {
	// Esta función debe recibir un array con números y letras y devolverlo habiendo agrupado los elementos
	// En primer lugar se deben encontrar números, después letras. El orden dentro de cada grupo no importa.
	// Por ejemplo: 
	// agruparElementos(['B', 'a', 4 , 23, 'J']) 
	// debe devolver:
	// [23, 4, 'B', 'a', 'J']
	var numeros = [];
	var letras = [];
for(var i=0;i<array.length;i++){
	if(typeof(array[i])==="number"){
		numeros.push(array[i]);
	} else if(typeof(array[i])==="string") {
		letras.push(array[i]);
	} 
}

return numeros.concat(letras);

}
console.log(agruparElementos(['B', 'a', 4 , 23, 'J']));

function ponerBonitasLasLetras(array) {
	// Esta función debe recibir un array de números y letras y devolverlo con las letras vocales en mayúsculas 
	// y las consonantes en minúsculas. Los números no deben ser tratados.
	// Por ejemplo:
	// ponerBonitasLasLetras([1,5,7,'a','J',p,'E'])
	// debe devolver:
	// [1,5,7,'A','j',p,'E']
	/*
		a - 97
		e - 101
		i - 105
		o - 111
		u - 117

		A - 65
		E - 69
		I - 73
		O - 79
		U - 85

	*/
	for(var i=0;i<array.length;i++){
		if(typeof(array[i])==="string"){
			if(array[i].charCodeAt(0)===97||array[i].charCodeAt(0)===101||array[i].charCodeAt(0)===105||array[i].charCodeAt(0)===111||
				array[i].charCodeAt(0)===117||array[i].charCodeAt(0)===65||array[i].charCodeAt(0)===69||array[i].charCodeAt(0)===73
				||array[i].charCodeAt(0)===79||array[i].charCodeAt(0)===85){
				console.log(array[i].toUpperCase());
				array[i] = array[i].toUpperCase();
			} else {
				console.log(array[i].toLowerCase())
				array[i] = array[i].toLowerCase();
			}
		} 
	}
	return array;

}
console.log(ponerBonitasLasLetras([1,5,7,'a','J','p','E']));