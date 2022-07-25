import React, { useEffect } from "react";
import { createContext } from "react";
import { useGitHub } from "../hooks/useGitHub";
import { Context, GitContextProps } from "../interfaces/GitHub";
import { useSearchParams } from 'react-router-dom'

const GitContext = createContext<Context | null >(null);

function GitProvider(props: GitContextProps) {

  const { logStatus, getCode, exchangeCode, logOut, userData, repoData, getRepos } = useGitHub()
  
  const [searchParams] = useSearchParams()
  const code = searchParams.get('code')

  useEffect(() => {
    if(code){
      exchangeCode(code)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[code])

  return (
    <GitContext.Provider
      value={{ logStatus, getCode, logOut, userData, repoData, getRepos }}
    >
      {props.children}
    </GitContext.Provider>
  )
}

export { GitProvider, GitContext }