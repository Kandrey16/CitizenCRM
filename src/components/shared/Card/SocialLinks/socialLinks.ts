import {
  FacebookOutlined,
  GithubOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  TwitterOutlined,
  YoutubeOutlined,
} from '@ant-design/icons'
import type { ComponentType } from 'react'

export const socialLinks: {
  href: string
  label: string
  Icon: ComponentType<{ className?: string }>
  hoverClass: string
}[] = [
  {
    href: 'https://www.linkedin.com/',
    label: 'LinkedIn',
    Icon: LinkedinOutlined,
    hoverClass: 'hover:text-[#0A66C2]',
  },
  {
    href: 'https://github.com/',
    label: 'GitHub',
    Icon: GithubOutlined,
    hoverClass: 'hover:text-white',
  },
  {
    href: 'https://www.instagram.com/',
    label: 'Instagram',
    Icon: InstagramOutlined,
    hoverClass: 'hover:text-[#E4405F]',
  },
  {
    href: 'https://twitter.com/',
    label: 'X (Twitter)',
    Icon: TwitterOutlined,
    hoverClass: 'hover:text-white',
  },
  {
    href: 'https://www.youtube.com/',
    label: 'YouTube',
    Icon: YoutubeOutlined,
    hoverClass: 'hover:text-[#FF0000]',
  },
  {
    href: 'https://www.facebook.com/',
    label: 'Facebook',
    Icon: FacebookOutlined,
    hoverClass: 'hover:text-[#0866FF]',
  },
]
