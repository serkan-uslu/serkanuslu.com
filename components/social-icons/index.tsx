import { Facebook, Github, Linkedin, Mail, Medium, X, Youtube } from './icons'

// Twitter icon replaced with "X" brand. If you prefer the blue bird icon, replace the X with "twitter" instead

const components = {
  mail: Mail,
  github: Github,
  facebook: Facebook,
  youtube: Youtube,
  linkedin: Linkedin,
  twitter: X,
  medium: Medium,
}

type SocialIconProps = {
  kind: keyof typeof components
  href?: string | undefined
  size?: number
}

const SocialIcon = ({ kind, href, size = 8 }: SocialIconProps) => {
  const SocialSvg = components[kind]

  return (
    <>
      <a
        className="text-sm text-gray-500 transition hover:text-gray-600"
        target="_blank"
        rel="noopener noreferrer"
        href={href}
      >
        <span className="sr-only">{kind}</span>
        <SocialSvg
          className={`fill-current text-gray-700 hover:text-primary-500 dark:text-gray-200 dark:hover:text-primary-400 h-${size} w-${size}`}
        />
      </a>
    </>
  )
}

export default SocialIcon
