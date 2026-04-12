export const SocialNetwork = {
  VK: 'VK',
  TELEGRAM: 'TELEGRAM',
  OK: 'OK',
  WHATSAPP: 'WHATSAPP',
  FACEBOOK: 'FACEBOOK',
  INSTAGRAM: 'INSTAGRAM',
  LINKEDIN: 'LINKEDIN',
  TWITTER: 'TWITTER',
  OTHER: 'OTHER',
} as const

export type SocialNetwork = (typeof SocialNetwork)[keyof typeof SocialNetwork]

export interface SocialProfile {
  ID_SocialProfile: string
  network: SocialNetwork
  userName: string
  profile_url: string
  ID_Citizen: string
}
