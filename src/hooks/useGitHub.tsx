
import { useGetUser } from './useGetUser'
import { useGetRepos } from './useGetRepos'
import { useGitLog } from '../hooks/useGitLog'
import { useEffect } from 'react'

function useGitHub() {

  const { getCode, exchangeCode, logStatus, logOut } = useGitLog()

  const { userData, getUser } = useGetUser()
  const { repoData, getRepos } = useGetRepos()

  useEffect(() => {
    if(logStatus) {
      getUser()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [logStatus])
  
  return {
    logStatus,
    getCode,
    exchangeCode,
    logOut,
    getUser,
    userData,
    getRepos,
    repoData
  }
}

export { useGitHub }