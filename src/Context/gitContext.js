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