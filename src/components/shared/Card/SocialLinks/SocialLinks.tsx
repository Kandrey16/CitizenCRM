import { socialLinks } from './SocialLinks'

export default function SocialLinks() {
  return (
    <div className="mt-4 flex flex-wrap items-center gap-3" aria-label="Профили в соцсетях">
      {socialLinks.map(({ href, label, Icon, hoverClass }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          title={label}
          aria-label={label}
          className={`text-zinc-400 transition-colors ${hoverClass}`}
        >
          <Icon className="text-2xl" />
        </a>
      ))}
    </div>
  )
}
