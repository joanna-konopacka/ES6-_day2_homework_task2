/*Zadanie 2
Stwórz funkcję saySomething() (Arrow function) i jako parametr przekaż jej następujący obiekt:

const wally = {
  name: "Wally",
  age: 2,
  profession: "naprawianie innych robotów"
}

Następnie za pomocą destrukturyzacji podstaw wszystkie 3 atrybuty obiektu pod takie same nazwy zmiennych. Następnie zwróć string w postaci: 

Cześć mam na imię Wally, mam 2 lata i moim zajęciem jest naprawianie innych robotów". */

const wally = {
	name: "Wally",
	age: 2,
	profession: "naprawianie innych robotów",
};

const saySomething = ({ name, age, profession }) => {
	console.log(
		`Cześć mam na imię ${name}, mam ${age} lata i moim zajęciem jest ${profession}`
	);
};

saySomething(wally);
