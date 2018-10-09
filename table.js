// Writes a table to the console. The parameters can be object or arrays.

let arr =[
	{"name":"Inception","actor":"leonardo caprio","actress":"Marion Cotillard","Imdb":8.7},
    {"name":"AntMan","actor":"Paul Rudd","actress":"Evangeline Lilly","Imdb":8.2},
    {"name":"The Walk","actor":"James G. lewitt","actress":"Charloette","Imdb":8.5},
    {"name":"Sixth Sense","actor":"Bruce willis","actress":"Toni Collete","Imdb":8.3},
    {"name":"3 idiots","actor":"Aamir Khan","actress":"Kareena Kapoor","Imdb":8.5}
];
console.table(arr); 
// The first column becomes index then name,actor,actress and Imdb.