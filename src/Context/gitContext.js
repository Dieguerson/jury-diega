import { createContext } from "react";
import { useGitHub } from "../Hooks/useGitHub";

const GitContext = createContext();

function GitProvider(props) {
  
  const user = "Dieguerson"

  const token = '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'

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