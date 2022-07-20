import { Octokit } from "octokit"

function useGetLangs(octokit: Octokit) {

  const getLangs = async (langUrl: string | object) => {

    if (typeof langUrl === 'string') {
      let langData = {}
        try {
          langData = (await octokit.request(`GET ${langUrl}`)).data
        } catch(error: any) {
          console.error(error)
        } finally {
          return langData
        }
    } else {
      return langUrl
    }
  }
  
  return {
    getLangs,
  }
}

export { useGetLangs }