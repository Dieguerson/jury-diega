import { useContext } from 'react';
import { ProjectCard } from '../Components/ProjectCard';
import { GitContext } from '../Context/gitContext';

export default function Projects() {
  const { repoData } = useContext(GitContext)

  return (
    <main className='ml-20 flex flex-wrap justify-center p-4 max-w-full'>
      {
        repoData[0].name
          ?
          repoData.map((repo, i) => {
            return <ProjectCard name={repo.name} main={repo.main} update={repo.update} key={i}/>
          })
          :
          "NOPE"
      }
    </main>
  );
}