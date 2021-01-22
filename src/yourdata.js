// Skills Icons
import htmlIcon from "./images/html.svg"
import cssIcon from "./images/css.svg"
import jsIcon from "./images/javascript.svg"
import codeIcon from "./images/code.svg"
import goIcon from "./images/go-lang.svg"
import tsIcon from "./images/typescript.png"
import dockerIcon from "./images/docker.svg"
import mongoIcon from "./images/mongodb.svg"
import mysqlIcon from "./images/mysql-01.svg"
import psqlIcon from "./images/postgreesql.svg"
import rabbIcon from "./images/rabbitmq.svg"
import toolIcon from "./images/tool.png"
import twIcon from "./images/tw.svg"
import linkedinIcon from "./images/linkedin.png"


// Social Icon
import githubIcon from "./images/github.svg"
import codepenIcon from "./images/codepen.svg"
import dribbbleIcon from "./images/dribbble.svg"
import instagramIcon from "./images/instagram.svg"

export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "Luca Becci",
  headerTagline: [
    //Line 1 For Header
    "Fullstack developer",
    //Line 2 For Header
    "",
    //Line 3 For Header
    "",
  ],
  //   Header Paragraph
  headerParagraph:
    "20 years. Argentina Buenos Aires. Passionate for Typescript and Golang. Computer science student.",

  //Contact Email
  contactEmail: "brianbecci@gmail.com",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      id: 1, //DO NOT CHANGE THIS (Please)😅
      title: "ONA SYSTEM", //Project Title - Add Your Project Title Here
      para:
        "System for IP geolocation and internet speed test where users can save their IP searches and their connection information to see the status according to their tests.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://miro.medium.com/max/576/1*mn6bOs7s6Qbao15PMNRyOA.png",
      //Project URL - Add Your Project Url Here
      url: "https://github.com/lucabecci/OnaSystem",
    },
    {
      id: 2, //DO NOT CHANGE THIS (Please)😅
      title: "GOLANG REST API WITH GORM", //Project Title - Add Your Project Title Here
      para:
        "This is a RESTFUL API for tasks where this have a CRUD in the tasks logic. This API use Golang, Mux, Gorm(ORM for Golang), Godotenv and PostgreSQL(For this project i use the cloud service database ElephantSQL).", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://secure.meetupstatic.com/photos/event/c/e/2/1/600_449392769.jpeg",
      //Project URL - Add Your Project Url Here
      url: "http://chetanverma.com/",
    },
    {
      id: 3, //DO NOT CHANGE THIS (Please)😅
      title: "DESIGN PATTERNS IN TYPESCRIPT", //Project Title - Add Your Project Title Here
      para:
        "This is a collection where I save all the design patterns implemented in Typecript. The code is created by me.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://miro.medium.com/max/576/1*mn6bOs7s6Qbao15PMNRyOA.png",
      //Project URL - Add Your Project Url Here
      url: "https://github.com/lucabecci/DesignPatternsTypescript",
    },
    {
      id: 4, //DO NOT CHANGE THIS (Please)😅
      title: "GRAPHQL-TS TEMPLATE", //Project Title - Add Your Project Title Here
      para:
        "This is a template for my future projects graphQL. If you need to create a new graphQL project with TS, you can use my template. This is the first version, in weeks or days i will add new features, docker and docker-compose configuration for the api/postgresql.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://cdn-ssl-devio-img.classmethod.jp/wp-content/uploads/2019/12/graphql-1200x630-960x504.png",
      //Project URL - Add Your Project Url Here
      url: "https://github.com/lucabecci/gql-postgres-ts-TEMPLATE",
    },
    {
      id: 5, //DO NOT CHANGE THIS (Please)😅
      title: "AUTH IMAGES REST API", //Project Title - Add Your Project Title Here
      para:
        "API for images where this was created with typescript, OOP, express, multer, passportd and jwt. If you need see the documentation see te README.md where this contains all information for this API.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://miro.medium.com/max/576/1*mn6bOs7s6Qbao15PMNRyOA.png",
      //Project URL - Add Your Project Url Here
      url: "https://github.com/lucabecci/API-auth-images",
    },
    {
      id: 6, //DO NOT CHANGE THIS (Please)😅
      title: "AUTH-BLOG API GRAPHQL", //Project Title - Add Your Project Title Here
      para:
        "This is an API for blogs where the users can upload, delete and update your posts. This api made with Typescript, Express, Apollo-Server, Graphql, TypeORM, Redis, Docker and PostgreSQL.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://cdn-ssl-devio-img.classmethod.jp/wp-content/uploads/2019/12/graphql-1200x630-960x504.png",
      //Project URL - Add Your Project Url Here
      url: "https://github.com/lucabecci/AUTH-BLOG-GQL",
    },

    /*
    If You Want To Add More Project just Copy and Paste This At The End (Update the id Respectively)
    ,{
        id: 5,
        title: 'Project Five',
        para: 'Something Amazing',
        imageSrc: "",
        url: ''
    }
    */
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "I was born in 2000. I live in Argentina, Buenos Aires and i am open to work. I’ve been a software developer for 4 years. I have a medium English and a native Spanish. I like building new stuff and work with other people – nothing really interesting is ever built alone!. Beside programming I am interested in video games and cats.",

  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      id: 1,
      img: goIcon,
      title: "Golang",
      para:
        "Medium Level || Mux, Godot, Fiber, GoAMPQ, JWT, GORM",
    },
    {
      id: 2,
      img: tsIcon,
      title: "Typescript",
      para:
        "High Level || Express, Nest, Graphql, Apollo, Mongoose, TypeORM, MikroORM, TS-Redis, Passport, JWT",
    },
    {
      id: 3,
      img: jsIcon,
      title: "Javascript",
      para:
        "High Level || Express, Nest, Graphql, Apollo, Mongoose, Sequelize, Redis, Passport, JWT",
    },
    {
      id: 4,
      img: htmlIcon,
      title: "HTML",
      para:
        "Medium Level",
    },
    {
      id: 5,
      img: cssIcon,
      title: "CSS",
      para:
        "Medium Level || Bootstrap, Tailwind, StyledComponents",
    },
    {
      id: 6,
      img: toolIcon,
      title: "Tools",
      para:
        "Linux, Git, Lerna, Prettier, Postman, Eslint-Tslint, Golint, Husky",
    },
    {
      id: 7,
      img: codeIcon,
      title: "Paradigms and Architectures",
      para:
        "Oriented Object Programming, REST, Monolithic Architecture, Microservices Architecture, Design Patterns, SOLID",
    },
    {
      id: 8,
      img: dockerIcon,
      title: "Docker/Docker-compose",
      para:
        "Medium Level || Multi-stage builds",
    },
    {
      id: 9,
      img: mysqlIcon,
      title: "MySQL",
      para:
        "Medium Level",
    },
    {
      id: 10,
      img: mongoIcon,
      title: "MongoDB",
      para:
        "Medium Level",
    },
    {
      id: 11,
      img: psqlIcon,
      title: "PostgreSQL",
      para:
        "Medium Level",
    },
    {
      id: 12,
      img: rabbIcon,
      title: "RabbitMQ Broker",
      para:
        "Low Level",
    },
  ],

  // End Skills Section --------------------------

  //   Contact Section --------------

  contactSubHeading: "Let's create a unique experience together",
  social: [
    // Add Or Remove The Link Accordingly
    { img: githubIcon, url: "https://github.com/lucabecci" },
    {
      img: linkedinIcon,
      url: "https://www.linkedin.com/in/luca-becci-b8044b198/",
    },
    {
      img: twIcon,
      url: "https://twitter.com/lucabecci",
    }
  ],

  // End Contact Section ---------------
}

// Thanks for using this template, I would love to hear from you contact me at hello@chetanverma.com
