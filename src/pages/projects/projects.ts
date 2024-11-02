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
    name: 'Ripe Orange Plucking Robot (2024)',
    description: 'Developed an autonomous robot using AI and computer vision to identify and pluck ripe oranges. This innovation significantly reduces labor costs in agriculture and boosts productivity. It gained recognition from the Minister of Communication, Innovation, and Digital Economy.',
    demoLink: 'https://x.com/Mkm_world/status/1727791369689706531/video/1',
    tags: ['Computer Vision']
  },
  {
    name: 'English-to-Yoruba Speech-to-Speech Translator (2024)',
    description: 'Designed an AI-powered tool for translating English to Yoruba in real-time. This project bridges communication gaps, fosters cultural preservation, and improves accessibility in multi-lingual environments.',
    demoLink: 'https://www.linkedin.com/posts/kayode-makinde-4b0b491ba_machinelearning-artificialintelligence-asr-activity-7216714376609710081-zvGC?utm_source=share&utm_medium=member_desktophttps://www.linkedin.com/posts/kayode-makinde-4b0b491ba_machinelearning-artificialintelligence-asr-activity-7216714376609710081-zvGC?utm_source=share&utm_medium=member_desktop',
    demoLinkRel: '',
    tags: ['NLP', 'AI']
  },
  {
    name: 'Bird Pest Detection on Rice Farms (2023)',
    description: 'Created a computer vision system that detects bird pests in rice farms, enhancing early pest detection and protecting crops from damage. This project was part of my work to integrate AI into precision agriculture. ',
    demoLink: '#',
    demoLinkRel: '',
    tags: ['Object Detection', 'Computer Vision']
  },
  {
    name: 'AI Agents to Play Ayo (2024)',
    description: 'Trained reinforcement learning agents to play Ayo, a traditional Nigerian mancala game. These AI agents have consistently outperformed human players. This project won the 3rd Best Poster Award at IndabaX Nigeria 2024.',
    demoLink: 'https://www.linkedin.com/posts/kayode-makinde-4b0b491ba_my-research-work-won-a-prize-at-the-indabax-activity-7206581113035583491-PkLy?utm_source=share&utm_medium=member_desktop',
    demoLinkRel: '',
    tags: ['Reinforcement Learning']
  },
  {
    name: 'Predicting Used Car Prices in Nigeria (2024)',
    description: 'Developed a machine learning model to predict used car prices in Nigeria based on data from local car sales platforms. The model considers various factors such as make, year, and condition, offering a valuable tool for the local automotive market.',
    demoLink: 'https://mkmworld.medium.com/what-cars-are-nigerians-buying-an-analysis-of-cars-in-nigeria-3adc1db7b095',
    demoLinkRel: '',
    tags: ['Machine Learning']
  },
  {
    name: 'Analysis of Polling Units for Nigeria 2023 Elections (2023)',
    description: 'Analyzed polling unit data to explore voting patterns and election results across Nigeria for the 2023 general elections. The findings helped provide insights into regional voting trends.',
    demoLink: 'https://mkmworld.medium.com/analysis-of-polling-agents-presented-by-political-parties-in-nigerias-2023-general-elections-667191badc6f',
    demoLinkRel: '',
    tags: ['Social Analytics']
  },
  {
    name: 'WhatsApp Analytics for DSN FUNAAB (2022)',
    description: 'Built a custom analytics tool to analyze engagement and participation on DSN FUNAAB’s WhatsApp platform, which facilitated better decision-making and community growth strategies.',
    demoLink: 'https://github.com/mkm-world/Whatsapp-Group-Chat-Analysis',
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
