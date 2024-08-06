export interface UserDataTypes {
  avatar_url: string
  bio: string
  created_at: string
  email: string
  company: string
  followers: number
  following: number
  html_url: string
  id: number
  login: string
  name: string
  organizations_url: string
  public_repos: number
  repos_url: string
  twitter_username: string
  type: string
  updated_at: string
  url: string
  // blog: string
  // events_url: string
  // followers_url: string
  // following_url: string
  // gists_url: string
  // gravatar_id: string
  // hireable: string
  // location: string
  // node_id: string
  // public_gists: number
  // received_events_url: string
  // site_admin: boolean
  // starred_url: string
  // subscriptions_url: string
}

export interface IshuesDataTypes {
  title: string
  body: string
  id: number
  created_at: string
  url: string
  user: UserDataTypes
  comments: number
  number: number
  // comments_url: string

  // active_lock_reason: string | null
  // assignee: string | null
  // assignees: string[]
  // author_association: string
  // closed_at: string | null
  // events_url: string
  // html_url: string
  // labels: string[]
  // labels_url: string
  // locked: boolean
  // milestone: string | never
  // node_id: string

  // repository_url: string
  // state: string
  // state_reason: string | null
  // timeline_url: string
  // updated_at: string
}
