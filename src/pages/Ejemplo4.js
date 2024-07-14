import alumnos from '../data/alumnos.json'

// console.log(alumnos)
const CargaJson = (props) => {

    return (
        <>
            <h1>Ejemplo carga de Json</h1>
            <ul>
                {
                    alumnos.map(alumno => (
                        <li key={alumno.id}> {alumno.id}:  {alumno.nombre} {alumno.apellido} -{alumno.edad}</li>
                    ))
                }
            </ul>
        </>
    )


}

export default CargaJson;