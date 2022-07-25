import { useState } from "react"
import { GithubLang } from "../interfaces/GitHub"

function useGetLangs() {
  
  const [langData, setLangData] = useState<GithubLang>({})

  const getLangs = async (langUrl: string | object, repoName: string) => {

    if (typeof langUrl === 'string') {
        try {
          await fetch(`http://localhost:5000/langs?langUrl=${langUrl}`)
            .then(response => response.json())
            .then((data) => {
              setLangData({...data, repo: repoName})
            })
        } catch(error: any) {
          console.error(error)
        }
    } else {
      return langUrl
    }
  }
  
  return {
    getLangs,
    langData
  }
}

export { useGetLangs }