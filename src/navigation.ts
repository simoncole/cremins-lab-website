import { getPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Research',
      links: [
        {
          text: 'Overview',
          href: getPermalink('/research'),
        },
        {
          text: 'Publications',
          href: getPermalink('/publications'),
        },
        {
          text: 'News',
          href: getPermalink('/news'),
        },
      ],
    },
    {
      text: 'People',
      links: [
        {
          text: 'About the PI',
          href: getPermalink('/about-pi'),
        },
        {
          text: 'Lab Members',
          href: getPermalink('/people'),
        },
        {
          text: 'Trainee Awards',
          href: getPermalink('/trainee-awards'),
        },
      ],
    },
    {
      text: 'SEEDs Program',
      href: getPermalink('/seeds-program'),
    },
    {
      text: 'Photos',
      href: getPermalink('/photos'),
    },
    {
      text: 'Open Positions',
      href: getPermalink('/open-positions'),
    },
    {
      text: 'Algorithms & Data',
      href: getPermalink('/algorithms-data'),
    },
  ],
  actions: [],
};

export const footerData = {
  links: [],
  secondaryLinks: [
    { text: 'Research Overview', href: getPermalink('/research') },
    { text: 'Publications', href: getPermalink('/publications') },
    { text: 'News', href: getPermalink('/news') },
    { text: 'About the PI', href: getPermalink('/about-pi') },
    { text: 'Lab Members', href: getPermalink('/people') },
    { text: 'Trainee Awards', href: getPermalink('/trainee-awards') },
    { text: 'SEEDs Program', href: getPermalink('/seeds-program') },
    { text: 'Photos', href: getPermalink('/photos') },
    { text: 'Open Positions', href: getPermalink('/open-positions') },
    { text: 'Algorithms & Data', href: getPermalink('/algorithms-data') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://x.com/creminslab' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/creminslab/' },
    { ariaLabel: 'Bitbucket', icon: 'tabler:brand-bitbucket', href: 'https://bitbucket.org/creminslab/' },
  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://onwidget.com/favicon/favicon-32x32.png" alt="onWidget logo" loading="lazy"></img>
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://onwidget.com/"> onWidget</a> · All rights reserved.
  `,
};
