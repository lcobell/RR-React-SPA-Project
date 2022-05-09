export default function Projects(props) {
  const displayProjects = props.projects.map((eachProject) => (
    <li>{eachProject}</li>
  ));

  return (
    <div>
      <div className="projects">
        <div className="projectsHeader">
          <h1>My Projects</h1>
        </div>
        <p>{displayProjects}</p>
      </div>
    </div>
  );
}
