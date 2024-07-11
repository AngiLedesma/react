import { EjemploProps1, EjemploProps2, EjemploProps3, EjemploProps4, EjemploProps5 } from "../componentes/Props";

const nombre2 = 'Laura';
const frutas= ['Manzanas','Bananas','Palta','Naranja']


const equipos = ['Argentina', 'Colombia', 'Uruguay', 'Canadà']

const mostrarValor = valor=> {
    console.log(valor)
}

const Ejemplo1 = (props) => {
    return (
        <div>
            <h1>Ejemplos de Propiedades</h1>
            {/* este es un componente de una propiedad simple y que lo puedo reutilizar */}
            <EjemploProps1 nombre='Angi'/>
            <EjemploProps1 nombre= {nombre2}/>
            {/*listar elementos (array)*/}
            <EjemploProps2 elementos={frutas}/>
           <EjemploProps2 elementos={equipos}/>
           {/*multiples propiedades - destructuring*/}
           <EjemploProps3 titulo='Hola soy el titulo' subtitulo= 'subtitulo bien grande!!' cuerpo= 'Hola el contenido de esta noticia.' />
           {/*funcion*/}
           <EjemploProps4 cambiarvalor={mostrarValor}/>
           <EjemploProps4/>
           {/*este no va a funcionar, necesita de cambiar valor (es el manejador)*/}

           <EjemploProps5 eventoClick={mostrarValor}/>
           {/*si no le coloque la props ventoClick no se expolota react a difercencia de ejemplo4*/}

        </div>
    )
}

export default Ejemplo1;
