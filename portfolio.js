import emoji from "react-easy-emoji";

export const greetings = {
  name: "Ryan Liam",
  title: "Hi, I'm Ryan Liam",
  description:
    "I am a passionate aspiring Data Scientist equipped with Data Visualization tools, Data Cleaning, Data Transformation and Machine Learning techniques. Currently, I am looking for opportunities to enhance my Data Science skills and gain real-life work experience.",
  resumeLink:
    "https://docs.google.com/document/d/1_4RIfbyt4FFHW_bNplnoINQr01neTu7XDeeUlT_2O_k/edit?usp=sharing",
};

export const openSource = {
  githubUserName: "R-otato",
};

export const contact = {};

export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/ryan-liam-1a37bb203",
  github: "https://github.com/R-otato",
  instagram: "https://www.instagram.com/r._.liam/",
};

export const skillsSection = {
  title: "What I do",
  subTitle:
    "Passionate Data Science Student Exploring New Techniques And Technologies",
  data: [
    {
      title: "Data Exploration and Wrangling",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji(
          "⚡ Creating Interactive Data Visualizations with Jupyter Notebook, Power BI, Tableau and SAP Analytics Cloud"
        ),
        emoji(
          "⚡ Creating vizualizations in Jupyter Notebook using libraries such as Matplotlib, Seaborn and Plotly"
        ),
        emoji("⚡ Automating Data Preparation and Workflow with Alteryx."),
        emoji(
          "⚡ Writing complex SQL queries for data exploration and analysis"
        ),
      ],
      softwareSkills: [
        {
          skillName: "Jupyter Notebook",
          fontAwesomeClassname: "logos:jupyter",
        },

        {
          skillName: "Matplotlib",
          fontAwesomeClassname: "logos:matplotlib",
        },

        {
          skillName: "Seaborn",
          fontAwesomeClassname: "logos:seaborn",
        },

        {
          skillName: "Plotly",
          fontAwesomeClassname: "devicon:plotly-wordmark",
        },

        {
          skillName: "Power BI",
          fontAwesomeClassname: "logos:microsoft-power-bi",
        },

        {
          skillName: "Tableau",
          fontAwesomeClassname: "logos:tableau-icon",
        },

        {
          skillName: "SAP Analytics Cloud",
          fontAwesomeClassname: "logos:sap",
        },

        {
          skillName: "Alteryx",
          fontAwesomeClassname: "mdi:alpha-a-box-outline",
        },

        {
          skillName: "SQL",
          fontAwesomeClassname: "carbon:sql",
        },
      ],
    },
    {
      title: "Machine-Learning",
      lottieAnimationFile:
        "/lottie/skills/143472-mapping-for-machine-learning.json", // Path of Lottie Animation JSON File
      skills: [
        emoji(
          "⚡ Building supervised learning models in scikit-learn and PySpark"
        ),
        emoji("⚡ Building unsupervised learning models in scikit-learn"),
        emoji("⚡ Performing Feature selection and engineering techniques"),

        emoji("⚡ Performing Model tuning and hyperparameter optimization"),

        emoji(
          "⚡ Understanding Evaluation metrics for machine learning models"
        ),
      ],
      softwareSkills: [
        {
          skillName: "scikit-learn",
          fontAwesomeClassname: "simple-icons:scikit-learn",
        },
        {
          skillName: "PySpark",
          fontAwesomeClassname: "cib:apache-spark",
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      lottieAnimationFile: "/lottie/skills/cloudinfra.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Experience of working on multiple cloud platforms"),

        emoji(
          "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases"
        ),
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "logos:aws",
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "logos:microsoft-azure",
        },
        {
          skillName: "Snowflake",
          fontAwesomeClassname: "tabler:brand-snowflake",
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "logos:postgresql",
        },
        {
          skillName: "Github",
          fontAwesomeClassname: "akar-icons:github-fill",
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "logos:docker-icon",
        },
        {
          skillName: "GCP",
          fontAwesomeClassname: "skill-icons:gcp-light",
        },
        {
          skillName: "Airbyte",
          fontAwesomeClassname: "simple-icons:airbyte",
        },
      ],
    },
  ],
};

export const SkillBars = [
  {
    Stack: "Machine Learning",
    progressPercentage: "90",
  },
  {
    Stack: "Data Wrangling",
    progressPercentage: "90",
  },
  {
    Stack: "Data Visualization",
    progressPercentage: "80",
  },
  {
    Stack: "Cloud Computing",
    progressPercentage: "60",
  },
  {
    Stack: "Deep Learning",
    progressPercentage: "10",
  },
];

export const educationInfo = [
  {
    schoolName: "Ngee Ann Polytechnic",
    subHeader: "Diploma in Data Science",
    duration: "April 2021 - Present",
    desc: "Participating in the Snowflake x NP Industry Currency Project.",
    grade: "GPA: 3.90",
    descBullets: [
      "Offer a user-friendly customer analytics platform called Tasty Insights for the food truck business Tasty Bytes",
      "Create a streamlit application that provides key insights on customer behavior to improve retention and drive growth for Tasty Bytes Marketing and Sales Team",
      "Create an unsupervised learning model to perform customer segmentation",
      "Create a supervised learning model to predict the number of days to next purchase for customers",
    ],
  },
];

// export const experience = [
//   {
//     role: 'Frontend Developer',
//     company: 'Duseca Software',
//     companylogo: '/img/icons/common/dusecaSoftware.jpg',
//     date: 'Apr 2022 – Jun 2022',
//     desc: 'I worked as frontend web developer to design web based admin dashboards for mulitple apps using Django, Bootstrap, jQuery, Chart.js and some other libraries.',
//   },
//   {
//     role: 'API Engineer',
//     company: 'Duseca Software',
//     companylogo: '/img/icons/common/dusecaSoftware.jpg',
//     date: 'Jan 2022 – Mar 2022',
//     desc: 'I worked as API Engineer on a Kale App. Kale is a community platform for the creation of social reviews based on verified transactions. I built Fully Optimized and High Performance RESTful APIs using Django, DjangoRESTFramework, PostgresSQL, JWT Authentication, AWS, Integrated Plaid APIs for Fetching Bank Transactions, Integrated Sentry for monitoring Django Server and deployed the API on Heroku Server.',
//     // descBullets: [
//     // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
//     // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
//     // ],
//   },
//   {
//     role: 'Full Stack Developer',
//     company: 'Bleed-AI',
//     companylogo: '/img/icons/common/bleedAI.jpg',
//     date: 'Sept 2021 - Oct 2021',
//     desc: 'Worked as django web developer to create a website in which I integrated computer vision AI model (built by the team of BleedAI) to process YouTube URLs and show Real Time processing on Website using Django Channels WebSockets , threading for running multiple instances of AI Model, jQuery for UI rendering and deployed it on Heroku server.',
//   },
//   {
//     role: 'Backend Developer',
//     company: 'Wapidu',
//     companylogo: '/img/icons/common/wapidu.jpg',
//     date: 'Sept 2021',
//     desc: 'Worked as a Django Developer to integrate Stripe payment gateway in wapidu.com and Created REST APIs using Django REST Framework to integrate Django Stripe backend to Vue.js Frontend and Deployed it on Azure based Docker container registry.',
//   },
// ];

export const projects = [
  {
    name: "Formula One Predictor",
    desc: "This project is aimed towards predicting the top half F1 GP winners based on information before the race.\\n Data Vizualization, Data Cleaning, Categorical Encoding, Numerical Transformation, Feature Engineering, Feature Scaling, Machine Learning, Feature Importance",
    github: "https://github.com/R-otato/Formula-one-prediction",
  },
  {
    name: "Singapore HDB Resale Price Predictor",
    desc: "This project aims to create a machine-learning model for predicting the resale prices of HDB flats using their properties from the data given. Using the model, we can find how the selling price of an HDB resale flat changes based on the information given.",
    github: "https://github.com/R-otato/PySpark-HDB-resale-prediction",
  },
];

// export const feedbacks = [
//   {
//     name: 'John Smith',
//     feedback:
//       'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
//   },
//   {
//     name: 'John Smith',
//     feedback:
//       'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
//   },
// ];

// See object prototype on SEO.jsx page
export const seoData = {
  title: "Ryan Liam",
  description: "A passionate Data Science Student.",
};
