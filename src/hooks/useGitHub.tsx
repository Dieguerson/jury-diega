
import { useEffect } from 'react'
import { useOctokit } from './useOctokit';
import { useGetUser } from './useGetUser'
import { useGetRepos } from './useGetRepos'

function useGitHub(user: string, token: string) {

  const octokit = useOctokit(token)

  const { userData, getUser } = useGetUser(octokit)
  const { repoData, getRepos } = useGetRepos(octokit)

  useEffect(() => {
    getRepos(user)
    getUser(user)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return {
    userData,
    repoData
  }
}

export { useGitHub }