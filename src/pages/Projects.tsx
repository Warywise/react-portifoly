import '../styles/Projects.scss';

import ProjectsData from '../data/ProjectsData';
import ProjectCard from '../components/ProjectCard';
import { ComputerIcon } from '../images/svgFiles';

export default function Projects() {
    return (
      <main className='main-projects'>
        <h1>Meus projetos</h1>
        <div className='computer-div'>
          { ComputerIcon }
          <div className="computer-background" />
          {ProjectsData.map((item) => <ProjectCard props={ item } />) }
        </div>
      </main>
    );
}
