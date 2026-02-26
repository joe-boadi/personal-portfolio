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

export const GALLERY_IMAGES = [
  {
    id: 'gallery1',
    src: 'https://i.postimg.cc/9Qkhgjk6/photo_2026_02_26_00_44_57.jpg',
    alt: 'In my former role at AmaliTech',
    name: 'In my former role at AmaliTech',
    desc: 'A time in the office, shot taken right after a morning stand-up at AmaliTech.',
  },
  {
    id: 'gallery2',
    src: 'https://i.postimg.cc/XYqWgv2S/photo_2026_02_26_00_44_42.jpg',
    alt: 'My Home workstation',
    name: 'My Home workstation',
    desc: 'I take productivity seriously, and my home workstation is a reflection of that.',
  },
  {
    id: 'gallery3',
    src: 'https://i.postimg.cc/HkNgvCKT/photo_2026_02_26_00_45_12.jpg',
    alt: 'Dinner party with my family',
    name: 'Dinner party with my family',
    desc: 'With a close friend, we had dinner party with our lovely family. Such a beautiful moment.',
  },
]

export const GALLERY_IMAGES_PAGE = [
  {
    id: 'gallery1',
    src: 'https://i.postimg.cc/9Qkhgjk6/photo_2026_02_26_00_44_57.jpg',
    alt: 'In my former role at AmaliTech',
    name: 'In my former role at AmaliTech',
    desc: 'A time in the office, shot taken right after a morning stand-up at AmaliTech.',
  },
  {
    id: 'gallery2',
    src: 'https://i.postimg.cc/XYqWgv2S/photo_2026_02_26_00_44_42.jpg',
    alt: 'My Home workstation',
    name: 'My Home workstation',
    desc: 'I take productivity seriously, and my home workstation is a reflection of that.',
  },
  {
    id: 'gallery3',
    src: 'https://i.postimg.cc/HkNgvCKT/photo_2026_02_26_00_45_12.jpg',
    alt: 'Dinner party with my family',
    name: 'Dinner party with my family',
    desc: 'With a best friend, we had dinner party with our lovely family.',
  },
  {
    id : 'gallery4',
    src: 'https://i.postimg.cc/52yJmtPb/photo_2026_02_26_00_44_45.jpg',
    alt: 'Just in the building of the main at AmaliTech',
    name: 'Reporting to work at AmaliTech',
    desc: 'I had a great time working with the team at AmaliTech, and I am grateful for the experience.',
  },
  {
    id: 'gallery5',
    src: 'https://i.postimg.cc/jS1b3r9T/photo_2026_02_26_00_45_09.jpg',
    alt: 'Loved playing the keyboard',
    name: 'Loved playing the keyboard',
    desc: 'I have always loved music, and playing the keyboard is one of my favorite hobbies.',
  },
  {
    id: 'gallery6',
    src: 'https://i.postimg.cc/mgnspGqf/photo_2026_02_26_00_45_01.jpg',
    alt: 'At one of the major gospel concerts in Ghana',
    name: 'At one of the major gospel concerts in Ghana',
    desc: 'I was at one of the major gospel concerts in Ghana, I was one of the main keyboardist.',
  },
]
