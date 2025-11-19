export * from './projects'
export * from './friends'
export * from './changelog'
export * from './education'
export * from './career'
export * from './activity'


// personal info
export const name = 'Jacques Attinger'
export const headline = 'Math student'
export const introduction = 'I’m Jacques, a math student based in Shenzhen, China. I like coding, and building interesting things'
export const email = 'jacques.attinger@gmail.com'
export const githubUsername = 'JacquesAttinger'

// about page
export const aboutMeHeadline = "I'm Jacques Attinger, a math student based in Chicago, IL.."
export const aboutParagraphs = [
  "I love coding. I learned programming when I in college. I wrote my first program in Java when I was 18.",
  "I have a lot of hobbies, such as travelling, photography, watching movies, music and so on.",
  "I'm working as a software develop engineer in Shenzhen, China now. And I'm building a lot of side projects in my spare time."
]


// blog
export const blogHeadLine = "What I've thinking about."
export const blogIntro = "I've written something about AI, programming and life."


// social links
export type SocialLinkType = {
  name: string,
  ariaLabel?: string,
  icon: string,
  href: string,
  external?: boolean
}

export const socialLinks: Array<SocialLinkType> = [
  {
    name: 'LinkedIn',
    icon: 'linkedin',
    href: 'https://www.linkedin.com/in/jacques-attinger-b1126922a/',
    external: true
  },
  {
    name: 'Github',
    icon: 'github',
    href: 'https://github.com/JacquesAttinger',
    external: true
  },
  {
    name: 'Email',
    icon: 'email',
    href: 'mailto:jacques.attinger@gmail.com',
    external: true
  }
]

// https://simpleicons.org/
export const techIcons = [
  "typescript",
  "javascript",
  "supabase",
  "cloudflare",
  "java",
  "oracle",
  "mysql",
  "react",
  "nodedotjs",
  "nextdotjs",
  "prisma",
  "postgresql",
  "nginx",
  "vercel",
  "docker",
  "git",
  "github",
  "visualstudiocode",
  "androidstudio",
  "ios",
  "apple",
  "wechat"
];



