import { Octokit } from 'octokit';

function useOctokit(token) {
  const octokit = new Octokit({auth: token});

  return octokit

}

export {useOctokit}