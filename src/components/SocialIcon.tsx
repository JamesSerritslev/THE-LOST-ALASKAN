type SocialIconProps = {
  name: string;
};

export function SocialIcon({ name }: SocialIconProps) {
  const common = {
    viewBox: "0 0 24 24",
    "aria-hidden": true as const,
    focusable: false,
  };

  switch (name) {
    case "Instagram":
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" />
        </svg>
      );
    case "Facebook":
      return (
        <svg {...common}>
          <path
            fill="currentColor"
            d="M14.2 8.5h2.3V5.5h-2.3c-2.3 0-3.7 1.5-3.7 3.8v1.7H8.2v3h2.3V20h3.1v-6h2.4l.4-3h-2.8V9.6c0-.7.4-1.1 1.1-1.1z"
          />
        </svg>
      );
    case "TikTok":
      return (
        <svg {...common}>
          <path
            fill="currentColor"
            d="M14 4c.4 2.4 1.8 4 4.2 4.3v2.4c-1.5 0-2.8-.5-4-1.3v5.8c0 3.2-2.4 5.5-5.5 5.5S3.2 18.4 3.2 15.2c0-3.1 2.4-5.4 5.4-5.5v2.6c-1.5.1-2.7 1.3-2.7 2.9s1.2 2.8 2.8 2.8 2.7-1.2 2.7-2.8V4H14z"
          />
        </svg>
      );
    case "YouTube":
      return (
        <svg {...common}>
          <rect x="2.5" y="6" width="19" height="12" rx="3" fill="none" stroke="currentColor" strokeWidth="2" />
          <path fill="currentColor" d="M10.5 9.2v5.6l5-2.8-5-2.8z" />
        </svg>
      );
    case "Pinterest":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" strokeWidth="2" />
          <path
            fill="currentColor"
            d="M11.2 17.6c.3-1.1.7-2.3.9-3.4.1-.4 0-.8-.3-1.1-.5-.6-.7-1.3-.5-2 .3-.8 1.1-1.1 1.9-.7.9.4 1.3 1.3 1.1 2.2-.3 1.4-1.5 2.4-2.9 2.4-1.3 0-2.2-.9-2.1-2.1.1-.8.5-1.6 1.2-1.8.2 0 .3.1.3.3l-.4 1.5c0 .2.1.3.3.3.5 0 1-.6 1.1-1.4.1-1.3-.9-2.2-2.3-2.2-1.8 0-3.1 1.4-3.1 3.3 0 1.2.6 2.1 1.6 2.1.4 0 .7-.2.8-.6l.3-1.1c.1-.3 0-.5-.2-.7-.3-.2-.4-.6-.4-1 0-.5.4-.9.9-.9.6 0 .9.4.9 1.1 0 .4-.1.8-.3 1.2l-.2.6c0 .5.3.9.8.9.9 0 1.6-1.1 1.6-2.6 0-1.3-.9-2.4-2.6-2.4-2.1 0-3.6 1.6-3.6 3.7 0 1.5.8 2.6 1.9 2.6.5 0 .9-.2 1-.6z"
          />
        </svg>
      );
    case "LinkedIn":
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="18" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
          <path
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            d="M8 10.5V17M8 7.5v.01M12 17v-3.8c0-1.2.8-2.2 2-2.2s2 .9 2 2.2V17"
          />
        </svg>
      );
    default:
      return null;
  }
}
