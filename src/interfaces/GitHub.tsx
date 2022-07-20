type GitContextProps = {
  children: React.ReactNode
}

interface UserData {
  alias: string,
  name: string,
  public: number,
  private: number,
  url: string,
  avatar: string
}

interface RepoData {
  name: string,
  main:string,
  update: string,
  private?: boolean,
  url: string,
  langs: string | object
}

interface Context {
  repoData: RepoData[],
  userData: UserData,
}

export { UserData, RepoData, GitContextProps, Context }