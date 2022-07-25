import { useState } from "react";

function useGitLog() {
  const [logStatus, setLogStatus] = useState(false)

  const getCode = () => {
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${process.env.REACT_APP_GH_ID}&scope=user%20repo`
  }

  const exchangeCode = async (code: string) => {
    try {
      await fetch('http://localhost:5000/authenticate', {method: 'POST', body: JSON.stringify({code})})
      .then((res) => {
          if (res.status === 200) {
            setLogStatus(true)
          }
        })
    } catch (error) {
      console.error(error)
    }
  }

  const logOut = async () => {
    try {
      await fetch('http://localhost:5000/logout')
      .then(res => {
        if(res.status === 200) {
          setLogStatus(false)
        }
      })
    } catch(error) {
      console.error(error)
    }
  }

  return {
    logStatus,
    getCode,
    exchangeCode,
    logOut
  }
}

export {useGitLog}