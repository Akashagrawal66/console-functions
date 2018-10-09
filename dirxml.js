// It is same as dir only the output is presented as a hierarchical listing of expandable nodes that let you see the 
// contents of child nodes.
let arr =[
	{"name":"Inception","actor":"leonardo caprio","actress":"Marion Cotillard","Imdb":8.7},
    {"name":"AntMan","actor":"Paul Rudd","actress":"Evangeline Lilly","Imdb":8.2},
    {"name":"The Walk","actor":"James G. lewitt","actress":"Charloette","Imdb":8.5},
    {"name":"Sixth Sense","actor":"Bruce willis","actress":"Toni Collete","Imdb":8.3},
    {"name":"3 idiots","actor":"Aamir Khan","actress":"Kareena Kapoor","Imdb":8.5}
];
console.dirxml(arr); // >(5) [{…}, {…}, {…}, {…}, {…}]