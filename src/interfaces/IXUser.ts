export interface IXProfileImages {
  profileImageUrl: string
  profileImageShape?: "square" | "circle"
  bannerImageUrl: string
}

export interface IXProfileDetails {
  description?: string
  location?: string
}

export interface IXUserStatistics {
  subscriptions?: number
  followersCount: number
  followingCount: number
  tweetCount: number
}

export interface IXVerificationStatus {
  verified: boolean
  verifiedType?: "blue" | "business" | "government" | "none"
}

export interface IXUserBase {
  id: number
  username: string
  screenName: string
  createdAt: string
}

export type IXUser = 
  IXUserBase &
  IXProfileImages &
  IXProfileDetails &
  IXUserStatistics &
  IXVerificationStatus
