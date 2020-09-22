function balikKata(kata) {
	let reversed="";
	for(var i= kata.length - 1;i>=0;i--){
 	reversed += kata[i];
 }
 return reversed;
}

// testCase
console.log(balikKata("Niomic!"))    
console.log(balikKata("JavaScript"))  
console.log(balikKata("alohahola"))  
console.log(balikKata("Jawa_Barat")) 