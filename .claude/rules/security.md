# Security

- Never read, expose, log, or commit `.env*`, credentials, tokens, private keys, or unnecessary personal data.
- Do not place secrets in `NEXT_PUBLIC_*`; those values are browser-visible.
- Keep server-only code out of Client Component import graphs.
- Validate future user input at a server boundary and minimize collected data.
- Review analytics, forms, external embeds, downloads, and third-party scripts for privacy, consent, integrity, and failure behavior.
- Do not weaken dependencies, CI, CSP, or release safeguards to make a check pass.
