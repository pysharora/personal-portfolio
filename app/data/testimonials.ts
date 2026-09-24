export type Testimonial = {
  name: string;
  role: string;
  date: string;
  relationship: string;
  quote: string;
};

export const testimonials: readonly Testimonial[] = [
  {
    name: "Sonus Vareed",
    role: "Product Manager at AdeptMind",
    date: "August 2026",
    relationship: "Peer at AdeptMind",
    quote:
      "I’ve enjoyed working with Piyush on our dashboard and platform team. He has a strong eye for UI/UX and brings a good user-focused perspective to the work. He’s collaborative, open to feedback, and always thoughtful about improving the overall experience. I’d be happy to recommend him.",
  },
  {
    name: "Allan Legemaate",
    role: "Lead Engineer at Catio",
    date: "August 2026",
    relationship: "Senior colleague at AdeptMind",
    quote:
      "Piyush is a delight to work with. He understands technical depth, tradeoffs, and always delivers quality results. He is very self-driven and he is a person I would gladly put in charge of large initiatives, knowing full well no detail will be skipped. Piyush is upbeat, positive, level headed, and professional. I enjoyed our time working together at Adeptmind immensely!",
  },
  {
    name: "Ryan Wilson",
    role: "Solution Architect at Empire Life",
    date: "November 2023",
    relationship: "Senior colleague at AdeptMind",
    quote:
      "Piyush is a fantastic software engineer. He always wanted to understand the bigger picture, how his work would impact the company's larger goals, and always delivered above expectations. Piyush is ambitious and driven. I expect him to do great things in the future.",
  },
  {
    name: "Subhajit Kar",
    role: "2x Founder and Product Leader",
    date: "November 2022",
    relationship: "Senior colleague at Myclassroom",
    quote:
      "Piyush was a fresher while he joined straight out of college, but his learning curve has been exceptional. Thanks to him where all our product designs took the right shape and his contribution was immense. He's calm in approach, eager towards learning and enthusiastic for parties. Definitely a team player and loved working with him. Great going mate!",
  },
  {
    name: "Megha Dayal",
    role: "Senior Product Manager at KFC",
    date: "November 2022",
    relationship: "Direct manager at Myclassroom",
    quote:
      "Piyush is an extremely dedicated and skilled professional. He gets things done and always delivers excellent results. He is a very quick learner and is always open to learning new things. I started working with him when he was a fresher. In a very short time, he became one of the best front end developers in the team. Wishing him all the best in all his endeavours.",
  },
  {
    name: "Shantanu Kaushik",
    role: "Product Management at Spinny",
    date: "November 2022",
    relationship: "Product teammate at Myclassroom",
    quote:
      "Piyush is a highly professional guy and a very skilled software developer. I've worked with Piyush on multiple products and really appreciate the speed at which he can deliver software products. His development takes into account even the minutest product details. Piyush is also a very interesting person to be around and keeps the team environment positive.",
  },
] as const;
