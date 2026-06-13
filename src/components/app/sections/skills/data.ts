export type Skill = {
  name: string;
  path: string;
  type: "frontend" | "backend" | "devops" | "database" | "languages";
  certification?: {
    url: string;
  };
};

const frontend: Skill[] = [
  {
    name: "HTML",
    path: "/images/technologies/html.webp",
    type: "frontend",
  },
  {
    name: "CSS",
    path: "/images/technologies/css.webp",
    type: "frontend",
  },
  {
    name: "Javascript",
    path: "/images/technologies/javascript.webp",
    type: "languages",
  },
  {
    name: "Typescript",
    path: "/images/technologies/typescript.webp",
    type: "languages",
  },
  {
    name: "React",
    path: "/images/technologies/react.webp",
    type: "frontend",
  },
  {
    name: "Next.js",
    path: "/images/technologies/next.webp",
    type: "frontend",
  },
  {
    name: "Tailwind",
    path: "/images/technologies/tailwind.webp",
    type: "frontend",
  },
  {
    name: "Shadcn/UI",
    path: "/images/technologies/shadcn.webp",
    type: "frontend",
  },
  {
    name: "Tanstack",
    path: "/images/technologies/tanstack.webp",
    type: "frontend",
  },
  {
    name: "Zustand",
    path: "/images/technologies/zustand.webp",
    type: "frontend",
  },
  {
    name: "Vue",
    path: "/images/technologies/vue.webp",
    type: "frontend",
  },
  {
    name: "Pinia",
    path: "/images/technologies/pinia.webp",
    type: "frontend",
  },
];

const backend: Skill[] = [
  {
    name: "Javascript",
    path: "/images/technologies/javascript.webp",
    type: "languages",
  },
  {
    name: "Typescript",
    path: "/images/technologies/typescript.webp",
    type: "languages",
  },
  {
    name: "Node.js",
    path: "/images/technologies/node.webp",
    type: "backend",
  },
  {
    name: "Express",
    path: "/images/technologies/express.webp",
    type: "backend",
  },
  {
    name: "Fastify",
    path: "/images/technologies/fastify.webp",
    type: "backend",
  },
  {
    name: "Drizzle",
    path: "/images/technologies/drizzle.webp",
    type: "backend",
  },
  {
    name: "Prisma",
    path: "/images/technologies/prisma.webp",
    type: "backend",
  },
  {
    name: "JWT",
    path: "/images/technologies/jwt.webp",
    type: "backend",
  },
];

const database: Skill[] = [
  {
    name: "Neo4J",
    path: "/images/technologies/neo4j-white.webp",
    type: "database",
    certification: {
      url: "https://graphacademy.neo4j.com/c/ac92de95-bc13-4e3d-9776-8723c0c585ad/",
    },
  },

  {
    name: "MongoDB",
    path: "/images/technologies/mongodb.webp",
    type: "database",
  },
  {
    name: "MySQL",
    path: "/images/technologies/mysql.webp",
    type: "database",
  },
];

const devops: Skill[] = [
  {
    name: "Postgres",
    path: "/images/technologies/postgres.webp",
    type: "devops",
  },
];

export const skills = [
  {
    title: "Front-end",
    technologies: frontend,
  },
  {
    title: "Back-end",
    technologies: backend,
  },
  {
    title: "Banco de dados & Devops",
    technologies: [...database, ...devops],
  },
];
