import "../styles/components/projectscontainer.sass"

const ProjectsContainer = () => {
    return (
        <section className="projects-container">
            <h2>Projetos</h2>
            <p>
                Clique no link abaixo para ver os meus principais projetos:
            </p>
            <a href="https://vercel.com/ygordeoliveiras-projects" className="btn">
                Ver Projetos
            </a>
        </section>
    )
}

export default ProjectsContainer;