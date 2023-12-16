import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faTwitter, faGitlab, faSpotify, faLastfm, IconDefinition, faGithub } from '@fortawesome/free-brands-svg-icons';

type Platform = 'linkedin' | 'twitter' | 'gitlab' | 'spotify' | 'lastfm' | 'github';
type Platforms = {
  [T in Platform]: {
    itemClass?: string;
    href: string;
    icon: IconDefinition;
    title: string;
  }
}

const platforms: Platforms = {
  linkedin: {
    icon: faLinkedinIn,
    itemClass: "border-socials-linkedin text-socials-linkedin hover:text-white hover:bg-socials-linkedin hover:shadow-[0_0_15px_0_theme(colors.socials.linkedin)]",
    href: "https://www.linkedin.com/in/dannycobussen/",
    title: "LinkedIn profile of Danny Cobussen",
  },
  twitter: {
    icon: faTwitter,
    itemClass: "border-socials-twitter text-socials-twitter hover:text-white hover:bg-socials-twitter hover:shadow-[0_0_15px_0_theme(colors.socials.twitter)]",
    href: "https://www.twitter.com/deKubus",
    title: "Twitter account of Danny Cobussen",
  },
  gitlab: {
    icon: faGitlab,
    itemClass: "border-socials-gitlab text-socials-gitlab hover:text-white hover:bg-socials-gitlab hover:shadow-[0_0_15px_0_theme(colors.socials.gitlab)]",
    href: "https://gitlab.com/dannycobussen",
    title: "Gitlab account of Danny Cobussen",
  },
  github: {
    icon: faGithub,
    itemClass: "border-socials-github text-socials-github hover:text-white hover:bg-socials-github hover:shadow-[0_0_15px_0_theme(colors.socials.github)]",
    href: "https://github.com/dannycobussen",
    title: "Github account of Danny Cobussen",
  },
  spotify: {
    icon: faSpotify,
    itemClass: "border-socials-spotify text-socials-spotify hover:text-white hover:bg-socials-spotify hover:shadow-[0_0_15px_0_theme(colors.socials.spotify)]",
    href: "https://open.spotify.com/user/dekubus?si=2ad43a1234d0466d",
    title: "Spotify account of Danny Cobussen",
  },
  lastfm: {
    icon: faLastfm,
    itemClass: "border-socials-lastfm text-socials-lastfm hover:text-white hover:bg-socials-lastfm hover:shadow-[0_0_15px_0_theme(colors.socials.lastfm)]",
    href: "https://last.fm/user/dotPixel",
    title: "LastFM profile of Danny Cobussen",
  },
};

function SocialMediaItem({ type }: { type: Platform }) {
  return (
    <li>
      <a href={platforms[type].href} target="_blank" title={platforms[type].title} className={`${platforms[type].itemClass} inline-flex items-center justify-center w-[50px] aspect-square rounded-full border-2 border-solid border-moonstone transition-all duration-300 ease-in`}>
        <FontAwesomeIcon icon={platforms[type].icon} size="xl" />
      </a>
    </li>
  );
}

export default function SocialMedia() {
  return (
    <ul className="flex flex-row flex-wrap list-none gap-4">
      <SocialMediaItem type="linkedin" />
      <SocialMediaItem type="twitter" />
      <SocialMediaItem type="gitlab" />
      <SocialMediaItem type="github" />
      <SocialMediaItem type="spotify" />
      <SocialMediaItem type="lastfm" />
    </ul>
  )
}
