const email = "arorapiyush.arora@gmail.com";
const subject = "A quick hello";
const body = [
  "Hi Piyush,",
  "",
  "I came across your portfolio and wanted to reach out.",
  "",
  "A little context from my side:",
  "",
  "What I’m working on / hiring for:",
  "",
  "Why I thought of you:",
  "",
  "Anything useful to know:",
  "",
  "Happy to share more if this sounds interesting.",
  "",
];

export const contactHref = `mailto:${email}?subject=${encodeURIComponent(
  subject,
)}&body=${encodeURIComponent(body.join("\n"))}`;

export const cvHref = "/Piyush-Arora-CV.pdf";
