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
          <defs>
            <linearGradient id="ig" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0" stopColor="#feda75" />
              <stop offset="0.35" stopColor="#fa7e1e" />
              <stop offset="0.6" stopColor="#d62976" />
              <stop offset="1" stopColor="#4f5bd5" />
            </linearGradient>
          </defs>
          <rect x="2" y="2" width="20" height="20" rx="6" fill="url(#ig)" />
          <rect x="7" y="7" width="10" height="10" rx="5" fill="none" stroke="#fff" strokeWidth="1.8" />
          <circle cx="17.2" cy="6.8" r="1.1" fill="#fff" />
        </svg>
      );
    case "Facebook":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="10" fill="#1877F2" />
          <path
            fill="#fff"
            d="M13.4 18.5v-5.1h1.7l.3-2h-2v-1.3c0-.6.2-1 .9-1H15.5V7.2c-.3 0-.9-.1-1.6-.1-1.6 0-2.7 1-2.7 2.8v1.5H9.4v2h1.8v5.1h2.2z"
          />
        </svg>
      );
    case "TikTok":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="10" fill="#111" />
          <path
            fill="#25F4EE"
            d="M13.2 6.2c.3 1.7 1.3 2.9 3 3.1v1.6c-1 0-1.9-.3-2.7-.9v4c0 2.2-1.7 3.8-3.8 3.8S5.9 16.2 5.9 14s1.7-3.7 3.7-3.8v1.8c-1 .1-1.8.9-1.8 2s.8 1.9 1.9 1.9 1.8-.8 1.8-1.9V6.2h1.7z"
          />
          <path
            fill="#FE2C55"
            d="M13.6 6.5c.3 1.7 1.3 2.9 3 3.1v1.6c-1 0-1.9-.3-2.7-.9v4c0 2.2-1.7 3.8-3.8 3.8-.4 0-.8 0-1.1-.1.5.6 1.2.9 2 .9 2.1 0 3.8-1.6 3.8-3.8V8.6c.8.6 1.7.9 2.7.9V7.9c-1.7-.2-2.7-1.4-3-3.1h-.9z"
          />
          <path
            fill="#fff"
            d="M13.4 6.4c.3 1.6 1.2 2.7 2.8 2.9v1.5c-.9-.1-1.8-.4-2.5-.9v3.8c0 2-1.6 3.6-3.6 3.6s-3.6-1.6-3.6-3.6 1.6-3.5 3.5-3.6v1.7c-.9.1-1.7.8-1.7 1.9s.8 1.8 1.8 1.8 1.7-.8 1.7-1.8V6.4h1.6z"
          />
        </svg>
      );
    case "YouTube":
      return (
        <svg {...common}>
          <rect x="2" y="5.5" width="20" height="13" rx="3.5" fill="#FF0033" />
          <path fill="#fff" d="M10.2 9.1v5.8l5.2-2.9-5.2-2.9z" />
        </svg>
      );
    case "Pinterest":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="10" fill="#E60023" />
          <path
            fill="#fff"
            d="M12.1 6.2c-3.1 0-4.7 2.1-4.7 4.3 0 1.2.6 2.3 1.8 2.6.2.1.4 0 .4-.2l.2-.7c0-.1 0-.3-.1-.4-.3-.4-.5-.9-.5-1.5 0-1.9 1.4-3.6 3.6-3.6 2 0 3.1 1.2 3.1 2.8 0 2.1-1 3.6-2.3 3.6-.7 0-1.3-.6-1.1-1.4.2-.8.6-1.7.6-2.3 0-.5-.3-.9-.9-.9-.7 0-1.2.7-1.2 1.7 0 .6.2 1 .2 1l-.8 3.4c-.2 1-.1 2.2.1 3.1.1-.1.3-.2.4-.3.6-.8 1-1.8 1.2-2.7.3.5.9.8 1.6.8 2.4 0 4.1-2.2 4.1-5.1 0-2.2-1.8-4.2-4.5-4.2z"
          />
        </svg>
      );
    case "LinkedIn":
      return (
        <svg {...common}>
          <rect x="2" y="2" width="20" height="20" rx="3" fill="#0A66C2" />
          <path
            fill="#fff"
            d="M7.6 10.2H9.6V17H7.6v-6.8zM8.6 6.6c.7 0 1.2.5 1.2 1.1S9.3 8.8 8.6 8.8 7.4 8.3 7.4 7.7 7.9 6.6 8.6 6.6zM11 10.2h1.9v.9h.1c.3-.5.9-1 1.9-1 2 0 2.4 1.3 2.4 3V17h-2v-3.4c0-.8 0-1.8-1.1-1.8s-1.3.9-1.3 1.8V17H11v-6.8z"
          />
        </svg>
      );
    default:
      return null;
  }
}
