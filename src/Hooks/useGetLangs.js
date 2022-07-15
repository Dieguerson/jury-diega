function useGetLangs(octokit) {

  const getLangs = async (langUrl) => {
    let langData = {}
    try {
      langData = (await octokit.request(`GET ${langUrl}`)).data
    } catch(error) {
      console.error(error)
    } finally {
      return langData
    }
  }
  
  return {
    getLangs,
  }
}

export { useGetLangs }