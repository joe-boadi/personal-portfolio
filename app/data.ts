type Project = {
  name: string
  description: string
  link: string
  imageLink: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Random Password Generator',
    description:
      'Instantly generate secure, random passwords with customizable options.',
    link: 'https://password-generator-app-kohl-ten.vercel.app/',
    imageLink:
      'https://i.postimg.cc/MGLrbsdC/pasword-generator.png',
    id: 'project1',
  },
  {
    name: 'Bluetooth Intrusion Detection',
    description: 'A simulation to demonstrate the use of AI to detect intrusions.',
    link: 'https://github.com/joe-boadi/bluetooth-intrusion-detection',
    imageLink:
      'https://i.postimg.cc/d0xWFHBp/AI-Intrusion-Detection.webp',
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'AmaliTech',
    title: 'Frontend Engineer/AWS Cloud Practitioner',
    start: '2024',
    end: '2025',
    link: 'amalitech.com',
    id: 'work1',
  },
  {
    company: 'Tech Prodigies',
    title: 'Software Engineer/Research Information Lead',
    start: '2021',
    end: '2023',
    link: 'https://ibelick.com',
    id: 'work2',
  },
  {
    company: 'Freelance',
    title: 'Front-end Developer',
    start: '2021',
    end: 'Present',
    link: 'https://ibelick.com',
    id: 'work3',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
  {
    title: 'Why I left my job to start my own company',
    description:
      'A deep dive into my decision to leave my job and start my own company',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-2',
  },
  {
    title: 'What I learned from my first year of freelancing',
    description:
      'A look back at my first year of freelancing and what I learned',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-3',
  },
  {
    title: 'How to Export Metadata from MDX for Next.js SEO',
    description: 'A guide on exporting metadata from MDX files to leverage Next.js SEO features.',
    link: '/blog/example-mdx-metadata',
    uid: 'blog-4',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/joe-boadi',
  },
  {
    label: 'Twitter',
    link: 'https://twitter.com/joeboadi_Dev',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/kwadjo-boadi-mantey-43b670271',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/boadijoe',
  },
]

export const EMAIL = 'joeboadi1@gmail.com'
