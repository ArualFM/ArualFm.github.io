'use strict;'
let xmlDoc = undefined;
loadLDocA("libros.xml","xml");
function gestionarFicheroXML(xmlDoc) {
    alert(xmlDoc.getElementsByTagName('libro')[0].firstChild.nodeValue)
	alert(xmlDoc.getElementsByTagName('libros')[0].childNodes[1].firstChild.nodeValue)

	document.getElementById('ficheroXML').innerHTML += "<b>" + xmlDoc.querySelector('libro:nth-child(2)').textContent + "</b>"
}
document.querySelector("div:nth-child(1)").addEventListener("click",()=>{
    let xmlDoc = loadLDocA("libros.xml","xml");
    
})
