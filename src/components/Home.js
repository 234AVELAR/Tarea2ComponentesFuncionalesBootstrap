import CardItem from "./CardItem";

function Home() {
    return (
        <div className="container mt-4">
            <h3 className="text-center mb-4">
                <span style={
                    { fontSize: "2rem", color: "#007bff", fontWeight: "bold" }
                }>¡Bienvenido a nuestro sitio web!</span> Explora nuestros cursos de desarrollo web, apps móviles e inteligencia artificial.
            </h3>
            <h4 className="text-center mb-4" style={{ color:"#007bff"}}>Cursos Disponibles</h4>
            

            <div className="d-flex flex-wrap justify-content-center">
                <CardItem
                    title="Desarrollo Web con HTML, CSS y JavaScript"
                    description="Aprende desde cero a crear sitios web modernos, responsivos y funcionales utilizando las tecnologías esenciales del frontend. Dominarás la estructura con HTML, el diseño con CSS y la interactividad con JavaScript para crear páginas web profesionales desde la base."
                />

                <CardItem
                    title="React para Principiantes"
                    description="Domina los fundamentos de React.js, la biblioteca más popular para construir interfaces de usuario dinámicas. Aprende a crear componentes reutilizables, manejar estados, y construir aplicaciones web escalables de forma eficiente."
                />

                <CardItem
                    title="Desarrollo Móvil con Flutter"
                    description="Construye aplicaciones móviles de alto rendimiento para Android e iOS utilizando Flutter y el lenguaje Dart. Aprende a diseñar interfaces atractivas, gestionar estados y conectar tus apps con servicios en la nube, todo desde una sola base de código."
                />

                <CardItem
                    title="Introducción a la Inteligencia Artificial"
                    description="Adéntrate en el mundo de la IA aprendiendo los fundamentos del aprendizaje automático, redes neuronales y procesamiento de datos. Descubre cómo funcionan los sistemas inteligentes y cómo aplicarlos a problemas reales con ejemplos prácticos."
                />

                <CardItem
                    title="Node.js y Express"
                    description="Aprende a crear servidores backend robustos y eficientes utilizando Node.js, junto con Express, el framework más popular para construir APIs RESTful. Ideal para quienes buscan conectar el frontend con bases de datos y servicios externos."
                />

                <CardItem
                    title="Bases de Datos con MySQL"
                    description="Comprende cómo funcionan las bases de datos relacionales y aprende a diseñarlas, administrarlas y hacer consultas complejas usando SQL. Este curso te permitirá integrar bases de datos sólidas a tus aplicaciones web o móviles."
                />
            </div>
        </div>
    );
}

export default Home;