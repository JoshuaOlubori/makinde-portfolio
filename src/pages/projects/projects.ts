import { getRepositoryDetails } from "../../utils";

export interface Project {
  name: string;
  demoLink: string;
  tags?: string[],
  description?: string;
  postLink?: string;
  demoLinkRel?: string;
  [key: string]: any;
}

export const projects: Project[] = [
  {
    name: 'Ripe Orange Plucking Robot',
    description: 'Developed an AI-powered robotic system to identify and pluck ripe oranges autonomously, recognized on social media by the Minister of Communication, Innovation, and Digital Economy',
    demoLink: '#',
    tags: ['Computer Vision']
  },
  {
    name: 'English-to-Yoruba Speech Translator',
    description: 'Built a speech-to-speech AI translator to bridge communication gaps for Yoruba speakers, utilizing NLP and speech synthesis.',
    demoLink: '#',
    demoLinkRel: '',
    tags: ['NLP', 'AI']
  },
  {
    name: 'Bird Pest Detection on Rice Farms',
    description: 'Designed a computer vision model to detect bird pests, improving early response systems on rice farms.',
    demoLink: '#',
    demoLinkRel: '',
    tags: ['Object Detection', 'Computer Vision']
  },
  {
    name: 'AI to Play Ayo',
    description: 'Trained reinforcement learning agents to play Ayo, a traditional African game, achieving a performance level superior to human players. Won 3rd Best Poster at IndabaX Nigeria 2024.',
    demoLink: '#',
    demoLinkRel: '',
    tags: ['Reinforcement Learning']
  },
  {
    name: 'Predicting Used Car Prices in Nigeria',
    description: 'Developed a machine learning model that predicts car prices based on Nigerian market data. Adjusted for unique local market factors.',
    demoLink: '#',
    demoLinkRel: '',
    tags: ['Machine Learning']
  },
  {
    name: '2023 Nigerian Elections Polling Unit Analysis',
    description: 'Analyzed data from polling units during Nigeria’s 2023 elections to generate insights on voter demographics and results distribution.',
    demoLink: '#',
    demoLinkRel: '',
    tags: ['Social Analytics']
  },
  {
    name: 'DSN FUNAAB WhatsApp Analytics (2024)',
    description: 'Analyzed engagement and discussions in DSN FUNAAB community to drive meaningful interaction and knowledge sharing.',
    demoLink: '#',
    demoLinkRel: '',
    tags: ['Digital Analytics']
  }
  // {
  //   ...(await getRepositoryDetails('devaradise/paradise-ui')),
  //   name: 'Paradise UI',
  //   demoLink: 'https://paradise-ui.com',
  //   postLink: 'https://devaradise.com/how-i-build-paradise-ui-react-component-library/',
  //   tags: ['React', 'UI Library']
  // },
  // {
  //   ...(await getRepositoryDetails('syakirurahman/react-lab')),
  //   name: 'React Lab',
  //   demoLink: 'https://devaradise.com/lab/react/',
  //   tags: ['React']
  // },
  // {
  //   ...(await getRepositoryDetails('syakirurahman/pokemon-catcher')),
  //   name: 'Pokemon Catcher',
  //   demoLink: 'https://pokemon-catcher-18636.web.app/',
  //   tags: ['Hobby']
  // },
  // {
  //   ...(await getRepositoryDetails('syakirurahman/movie-nominations')),
  //   name: 'Movie Nominations',
  //   demoLink: 'https://movie-nominations-c21c3.web.app/',
  //   tags: ['Hobby']
  // },
  // {
  //   ...(await getRepositoryDetails('syakirurahman/organization-tree')),
  //   name: 'Organization tree',
  //   demoLink: 'https://organization-tree-2a446.web.app/',
  //   tags: ['Hobby']
  // }
]
