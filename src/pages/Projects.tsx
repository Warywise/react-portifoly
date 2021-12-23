import '../styles/Projects.scss';

import { ComputerIcon } from '../images/svgFiles';

export default function Projects() {
    return (
      <main className='main-projects'>
        <h1>Meus projetos</h1>
        <div className='computer-div'>
          { ComputerIcon }
          <div className="computer-background" />

        </div>
      </main>
    );
}
