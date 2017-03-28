var boton=document.getElementById("mostrar")
	var ficha=[];
	boton.addEventListener("click",function(e){
		e.preventDefault();
		var name=document.getElementById("nombre").value;
		var lastName=document.getElementById("apellido").value;
		var country=document.getElementById("pais").options[document.getElementById("pais").selectedIndex].value;
		var city=document.getElementById("ciudad").value;
		var year=document.getElementById("edad").value;
		var gender=document.getElementById("genero").options[document.getElementById("genero").selectedIndex].value;
		function Person(nombre,apellido,edad,pais,genero,ciudad){
			this.nombre=nombre;
			this.apellido=apellido;
			this.edad= edad;
			this.pais=pais;
			this.genero=genero;
			this.ciudad=ciudad;
			// this.file=function(){
			// 	if((this.nombre=="")||(this.apellido=="")||(this.edad=="")||(this.pais=="")){
			// 		alert("Debe completar campos")
			// 		return"";
			// 	}else{
			// 		return"<br>"+"Nombre: "+ this.nombre+" "+this.apellido+"<br>"+"Edad: "+ this.edad+"<br>"+"Pais: "+ this.pais+"<br>";}
			// 	}
		}
		//ficha.push(new Person(name, lastName,year,country,city,gender,city));
		if((name!=0)&&(lastName!=0)&&(country!=0)&&(city!=0)&&(year!=0)&&(gender!=0)){
			localStorage.setItem("nuevoPaciente",JSON.stringify(new Person (name, lastName,year,country,gender,city)));
			window.location="pacientitos.html"
		}else{
			alert("Debe completar campos");
		}
		// 	var print=document.getElementById("aqui");
		// print.innerHTML+= ficha[ficha.length-1].file();
		// document.getElementById("todo").reset();
	});
		var nome=document.getElementById("nombre");
		var conome=document.getElementById("apellido");
		var paese=document.getElementsByTagName("pais")[0];
		var cita=document.getElementById("ciudad");
		var agno=document.getElementById("edad");
		var genda=document.getElementById("genero");
		var input=document.getElementsByClassName('obligatorio')
		for(var i=0;i<input.length;i++){
			input[i].onblur=function(j) {
			if(this.value.trim().length==0){
				this.value="";
				this.nextElementSibling.innerText=" ** Este campo es obligatorio"
			}}
			var selected=document.getElementsByClassName('selector')

		}
	var soloLetras= function(l){var codigoTecla=l.keyCode;
		if((codigoTecla>=97 && codigoTecla<=122)||(codigoTecla<=90&&codigoTecla>=65)||codigoTecla==39||codigoTecla==32){
			 return true
			 }else{
			 return false
			 }
			}
			var soloNumeros= function(l){var codigoTecla=l.keyCode;
				if(codigoTecla>=48 && codigoTecla<=57){
					 return true
					 }else{
					 return false
					 }
					}
	nome.onkeypress=soloLetras;
	conome.onkeypress=soloLetras
	cita.onkeypress=soloLetras;
	agno.onkeypress=soloNumeros;
