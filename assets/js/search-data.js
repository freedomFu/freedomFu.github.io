// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-research",
    title: "Research",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "post-如何做一篇学术论文笔记",
        
          title: "如何做一篇学术论文笔记？",
        
        description: "如何做一篇学术论文笔记",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/%E5%A6%82%E4%BD%95%E5%81%9A%E4%B8%80%E7%AF%87%E5%AD%A6%E6%9C%AF%E8%AE%BA%E6%96%87%E7%AC%94%E8%AE%B0/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-i-will-pursue-my-eng-d-degree-at-nankai-university-a-new-journey-everything-will-be-ok-️",
          title: 'I will pursue my Eng.D degree at Nankai University! A New Journey! Everything...',
          description: "",
          section: "News",},{id: "news-a-paper-of-password-managers-autofill-feature-is-accepted-by-acsac-2024",
          title: 'A paper of password managers’ autofill feature is accepted by ACSAC 2024! 🥳🎉...',
          description: "",
          section: "News",},{id: "news-a-paper-of-password-managers-protocol-analysis-is-accepted-by-ieee-s-amp-amp-p-2025",
          title: 'A paper of password managers’ protocol analysis is accepted by IEEE S&amp;amp;amp;P 2025!...',
          description: "",
          section: "News",},{id: "news-long-journey-to-hawaii-us",
          title: 'Long journey to Hawaii, US',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2024-12-15-acsacconf/";
            },},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
