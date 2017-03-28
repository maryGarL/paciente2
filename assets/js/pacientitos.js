var nombrePaciente=document.getElementById("nombrePaciente");
var apellidoPaciente=document.getElementById("apellidoPaciente");
var edadPaciente=document.getElementById("edadPaciente");
var generoPaciente=document.getElementById("generoPaciente");
var ciudadPaciente=document.getElementById("ciudadPaciente");
var paisPaciente=document.getElementById("paisPaciente");

var objetoPaciente=JSON.parse(localStorage.getItem("nuevoPaciente"));
console.log(objetoPaciente);
nombrePaciente.innerText=objetoPaciente.nombre;
apellidoPaciente.innerText=objetoPaciente.apellido;
edadPaciente.innerText=objetoPaciente.edad;
generoPaciente.innerText=objetoPaciente.genero;
ciudadPaciente.innerText=objetoPaciente.ciudad;
paisPaciente.innerText=objetoPaciente.pais;

function Paciente(nombrePaciente, apellidoPaciente, edadPaciente, generoPaciente,ciudadPaciente,paisPaciente) {
		this.nombre = nombrePaciente;
		this.apellido = apellidoPaciente;
		this.edad = edadPaciente;
		this.genero = generoPaciente;
		this.ciudad = ciudadPaciente;
		this.pais = paisPaciente;
	};

	document.getElementsByTagName("button")[0].addEventListener("click",function(){
		window.location="editar.html"
	})
