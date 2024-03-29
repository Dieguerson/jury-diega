import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProjectCard } from '../components/ProjectCard';
import { GitContext } from '../context/gitContext';
import { Context } from '../interfaces/GitHub';

export default function Projects() {
  const { repoData, getRepos, logStatus } = useContext(GitContext) as Context
  const navigate = useNavigate()

  useEffect(() => {
    if(logStatus) {
      getRepos()
    } else {
      navigate('../login')
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [logStatus])

  return (
    <main className='ml-20 flex flex-wrap justify-center p-4 max-w-full'>
      {
        repoData[0].name
          ?
          repoData.map((repo, i) => {
            return <ProjectCard {...repo} key={i}/>
          })
          :
          "NOPE"
      }
    </main>
  );
}

export { Projects }