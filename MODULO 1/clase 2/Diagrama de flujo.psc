Algoritmo Sueldo_trabajador
	Escribir "Ingresar nombre y apellido"
	Leer nombre,apellido
	Escribir "Ingresar sueldo"
	Leer sueldo
	Si sueldo<33.000 Entonces
		Aumento = sueldo * .15
	SiNo
		Aumento = sueldo * .2
	FinSi
	Escribir "Su nuevo sueldo es: $",sueldo + aumento
	Escribir "El aumento es de: $",aumento
FinAlgoritmo
