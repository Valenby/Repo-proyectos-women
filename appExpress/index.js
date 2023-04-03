//inicialización del cliente en express
const express = require('express');
const PORT = 3000;
const app = express();

app.use(express.json());

//creamos respuesta
app.get('/', (req, res) => {
    res.send('App books')
});

const list = [
    {
        id: 1,
        title: 'El problema de los tres cuerpos',
        author: 'Cixin Liu',
        category: 'Ciencia Ficción',
        description: '"El problema de los tres cuerpos" arranca en la Revolución cultural china y salta uno años para seguir el proyecto gubernamental secreto Costa Roja. Un proyecto de busca de vida extraterrestre en el que trabaja Ye Wenjie, científica hija de un profesor purgado en esa época.',
        price: 70000 ,
        pages: 574,
        unit: 1,
    },
    {
        id: 2,
        title: 'El psicoanalista',
        author: 'John Katzenbach',
        category: 'Thriller psicológico',
        description: '"El psicoanalista" es un thriller psicológico que cuenta la historia del Dr. Starks, un reconocido psicoanalista de Nueva York que se ve atrapado en un juego mortal cuando uno de sus pacientes lo amenaza de muerte. El paciente es un asesino en serie llamado Rumplestiltskin, quien desafía al Dr. Starks a descubrir su verdadera identidad en un plazo de quince días o morirá junto con su familia.',
        price: 86000 ,
        pages: 560,
        unit: 1,
    },
    {
        id: 3,
        title: 'It',
        author: 'Stephen King',
        category: 'Novela de terror',
        description: '"It" es una novela de terror que cuenta la historia de un grupo de siete amigos llamados "El Club de los Perdedores", que luchan contra un ser sobrenatural que se alimenta del miedo y de la carne de los niños. El ser, que adopta la forma de un payaso llamado Pennywise, acecha a los niños en la ciudad ficticia de Derry, Maine, y resurge 27 años después para enfrentarse a los ya adultos miembros del Club de los Perdedores.',
        price: 83000 ,
        pages: 1.138,
        unit: 1,
    },
    {
        id: 4,
        title: 'Libertad,La valentía de ser tú mismo',
        author: 'Osho',
        category: 'Autoayuda y Espiritualidad',
        description: '"Libertad: La valentía de ser tú mismo" es un libro que explora los obstáculos que enfrentamos en nuestra búsqueda de libertad y felicidad en la vida. A través de sus enseñanzas, Osho nos invita a cuestionar nuestras creencias y hábitos arraigados, y nos muestra cómo podemos liberarnos de las limitaciones que nos impiden ser nosotros mismos y vivir plenamente.',
        price: 25000 ,
        pages: 272,
        unit: 1,
    },
    {
        id: 5,
        title: 'Hush, Hush',
        author: 'Becca Fitzpatrick',
        category: 'Fantasía y Romance para jóvenes adultos.',
        description: '"Hush, Hush" es una novela de fantasía y romance que sigue la historia de una adolescente llamada Nora Grey, quien se ve envuelta en una peligrosa trama que involucra ángeles caídos y criaturas sobrenaturales. Con la ayuda de su misterioso compañero de clase, Patch Cipriano, Nora debe descubrir la verdad detrás de los secretos que rodean su vida y enfrentar a los peligros que amenazan su existencia.',
        price: 52000 ,
        pages: 391,
        unit: 1,
    },
    {
        id: 6,
        title: 'Las mujeres que aman demasiado',
        author: 'Robin Norwood',
        category: 'Autoayuda.',
        description: '"Las mujeres que aman demasiado" es un libro de autoayuda que se enfoca en la codependencia en las relaciones amorosas. La autora, Robin Norwood, explora el comportamiento y las actitudes que llevan a algunas mujeres a buscar y mantener relaciones con hombres que las lastiman, y ofrece herramientas y consejos prácticos para ayudar a superar esta dinámica destructiva.',
        price: 20000 ,
        pages: 334,
        unit: 1,
    },
];

//definimos ruta de entrada para los products.
app.get('/api/v1/books/list', (req, res) => {
    res.json(list);
});

//creamos el identificador unico.
app.get('/api/v1/books/list/:id', (req, res) => {
    const idList = parseInt(req.params.id); 
    const bookList = list.find( (bookList) => bookList.id === idList)

    if(!bookList){
        throw new Error('La lista de los libros no fue encontrada')
    }

    console.log(req.params);
    res.json(bookList);
});

app.patch('/api/v1/books/list/:id', (req, res) => {
    const {id} = req.params;
    const updateData = req.body;

    //bucamos indice del producto
    const producIndex = list.findIndex( (produc) => produc.id === id)

    //utilizamos indice para actualizar los datos del produc
    if(producIndex !== -1){
        list[producIndex] = { ...list[producIndex], ...updateData};
        res.status(200).json(list[producIndex]);
    } else {
        res.status(404).send(`Producto con id ${id} no encontrado`)
    }
    res.json(bookList);
});





app.listen(PORT, () => {
    console.log('Port listening')
});