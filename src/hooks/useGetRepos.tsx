
import { useEffect, useState } from 'react'
import { GithubRepo, RepoData } from '../interfaces/GitHub'
import { useGetLangs } from './useGetLangs'

function useGetRepos() {

  const [ repoData, setRepoData ] = useState<RepoData[]>([{name: '', main:'', update: '', private: false, url: '', langs: ''}])
  const { getLangs, langData } = useGetLangs()

  const getRepos = async () => {
    let processedRepos: RepoData[] = [];
    try {
      await fetch('http://localhost:5000/repos/')
        .then(response => response.json())
        .then((data: GithubRepo[]) => {
          processedRepos = data.map(repo => {
            const newRepo= {
              name: repo.name,
              main:repo.default_branch,
              update: repo.updated_at,
              private: repo.private,
              url: repo.html_url,
              langs: repo.languages_url
            } as RepoData
            return newRepo
          })
          processedRepos.forEach(async (repo) => {
            await getLangs(repo.langs, repo.name)
          })
        })
    } catch(error) {
      console.error(error)
    } finally {
      setRepoData(processedRepos)
    }
  }

  useEffect(() => {
    const langKeys: string[] = Object.keys(langData)
    if(langKeys.length !== 0 && typeof langData !== 'string') {
      const repos = repoData
      const modifyRepo = repos.find(repo => repo.name === langData.repo) as RepoData
      if(typeof modifyRepo.langs === 'string') {
        const index = repos.indexOf(modifyRepo)
        repos[index].langs = langData
        setRepoData(repos)
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [langData])

  return {
    repoData,
    getRepos
  }
}

export { useGetRepos }