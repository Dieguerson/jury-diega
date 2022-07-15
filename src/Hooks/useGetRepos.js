
import { useState } from 'react'
import { useGetLangs } from './useGetLangs'

function useGetRepos(octokit) {

  const [ repoData, setRepoData ] = useState([{name: '', main:'', update: '', private: false, url: ''}])
  const { getLangs } = useGetLangs(octokit)

  const getRepos = async (user) => {
    let processedRepos = []
    try {
      const repoResponse = (await octokit.request('GET /user/repos')).data
      const filteredRepos = repoResponse.filter(repo => repo.owner.login === user)
      processedRepos = filteredRepos.map(repo => {
        const newRepo = {
          name: repo.name,
          main:repo.default_branch,
          update: repo.updated_at,
          private: repo.private,
          url: repo.html_url,
          langs: repo.languages_url
        }
        return newRepo
      })
      processedRepos.forEach(async repo => {
        const langObject = await getLangs(repo.langs)
        repo.langs = langObject
      })
    } catch(error) {
      console.error(error)
    } finally {
      setRepoData(processedRepos)
    }
  }

  return {
    repoData,
    getRepos
  }
}

export { useGetRepos }