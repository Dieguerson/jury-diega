import { Octokit } from 'octokit';

function useOctokit(token: string): Octokit {
  const octokit = new Octokit({auth: token});

  return octokit
}

export {useOctokit}