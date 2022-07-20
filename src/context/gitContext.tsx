import React from "react";
import { createContext } from "react";
import { useGitHub } from "../hooks/useGitHub";
import { Context, GitContextProps } from "../interfaces/GitHub";

const GitContext = createContext<Context | null >(null);

function GitProvider(props: GitContextProps) {

  const { REACT_APP_PERSONAL_TOKEN } = process.env
  
  const user = "Dieguerson"

  const token = REACT_APP_PERSONAL_TOKEN as string

  const {userData, repoData} = useGitHub(user, token)

  return (
    <GitContext.Provider
      value={{ userData, repoData }}
    >
      {props.children}
    </GitContext.Provider>
  )
}

export { GitProvider, GitContext }