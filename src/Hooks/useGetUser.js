
import { useState } from 'react'

function useGetUser(octokit) {

  const [userData, setUserData] = useState({alias: '', name: '', public: 0, private: 0, url: '', avatar:''})

  const getUser = async (user) => {
    try {
      const userResponse = (await octokit.request(`GET /users/${user}`)).data
      setUserData({
        alias: userResponse.login,
        name: userResponse.name,
        public: userResponse.public_repos || 0,
        private: userResponse.owned_private_repos || 0,
        url: userResponse.html_url,
        avatar: userResponse.avatar_url
      })
    } catch(error) {
      console.error(error)
    }
  }
  
  return {
    userData,
    getUser
  }
}

export { useGetUser }