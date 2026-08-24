import {type Technology } from "../types/technology";

const technologies: Technology[] = [
    { id: 'react', name: 'React', type: 'framework', area: 'frontend' },
    { id: 'nextjs', name: 'Next.js', type: 'framework', area: 'frontend' },
    { id: 'nodejs', name: 'Node.js', type: 'runtime', area: 'backend' },
    { id: 'express', name: 'Express', type: 'framework', area: 'backend' },
    { id: 'typescript', name: 'TypeScript', type: 'language', area: 'frontend' },
    { id: 'javascript', name: 'JavaScript', type: 'language', area: 'frontend' },
    { id: 'html', name: 'HTML', type: 'markup', area: 'frontend' },
    { id: 'css', name: 'CSS', type: 'style', area: 'frontend' },
    { id: 'tailwind', name: 'Tailwind', type: 'library', area: 'frontend' },
    { id: 'bootstrap', name: 'Bootstrap', type: 'library', area: 'frontend' },
    { id: 'materialui', name: 'Material UI', type: 'library', area: 'frontend' },
    { id: 'redux', name: 'Redux', type: 'library', area: 'frontend' },
    { id: 'graphql', name: 'GraphQL', type: 'library', area: 'backend' },
    { id: 'mongodb', name: 'MongoDB', type: 'database', area: 'backend' },
    { id: 'postgresql', name: 'PostgreSQL', type: 'database', area: 'backend' },
    { id: 'mysql', name: 'MySQL', type: 'database', area: 'backend' },
    { id: 'firebase', name: 'Firebase', type: 'library', area: 'backend' },
    { id: 'docker', name: 'Docker', type: 'tool', area: 'devops' },
    { id: 'aws', name: 'AWS', type: 'cloud', area: 'devops' },
    { id: 'azure', name: 'Azure', type: 'cloud', area: 'devops' },
    { id: 'heroku', name: 'Heroku', type: 'cloud', area: 'devops' },
    { id: 'vercel', name: 'Vercel', type: 'cloud', area: 'devops' },
    { id: 'netlify', name: 'Netlify', type: 'cloud', area: 'devops' },
    { id: 'git', name: 'Git', type: 'tool', area: 'devops' },
    { id: 'github', name: 'GitHub', type: 'tool', area: 'devops' },
    { id: 'jest', name: 'Jest', type: 'library', area: 'general'},
    { id: 'webpack', name: 'Webpack', type: 'tool', area: 'general' },
    { id: 'babel', name: 'Babel', type: 'tool', area: 'general' },
    { id: 'sass', name: 'Sass', type: 'style', area: 'frontend' },
    { id: 'python', name: 'Python', type: 'language', area: 'backend' },
    { id: 'java', name: 'Java', type: 'language', area: 'backend' },
    { id: 'csharp', name: 'C#', type: 'language', area: 'backend' },
    { id: 'php', name: 'PHP', type: 'language', area: 'backend' },
    { id: 'go', name: 'Go', type: 'language', area: 'backend' },
    { id: 'rust', name: 'Rust', type: 'language', area: 'backend' },
    { id: 'kotlin', name: 'Kotlin', type: 'language', area: 'backend' },
    { id: 'swift', name: 'Swift', type: 'language', area: 'backend' },
    { id: 'ruby', name: 'Ruby', type: 'language', area: 'backend' },
    { id: 'flutter', name: 'Flutter', type: 'framework', area: 'frontend' },
    { id: 'angular', name: 'Angular', type: 'framework', area: 'frontend' },
    { id: 'vue', name: 'Vue.js', type: 'framework', area: 'frontend' },
    { id: 'svelte', name: 'Svelte', type: 'framework', area: 'frontend' },
    { id: 'nuxtjs', name: 'Nuxt.js', type: 'framework', area: 'frontend' },
    { id: 'nestjs', name: 'NestJS', type: 'framework', area: 'backend' },
    { id: 'springboot', name: 'Spring Boot', type: 'framework', area: 'backend' },
    { id: 'laravel', name: 'Laravel', type: 'framework', area: 'backend' },
    { id: 'django', name: 'Django', type: 'framework', area: 'backend' },
    { id: 'flask', name: 'Flask', type: 'framework', area: 'backend' },
    { id: 'elixir', name: 'Elixir', type: 'language', area: 'backend' },
    { id: 'perl', name: 'Perl', type: 'language', area: 'backend'},
    { id: 'r', name: 'R', type: 'language', area: 'backend' },
    { id: 'scala', name: 'Scala', type: 'language', area: 'backend' },
] as const;

export const groupedTechnologies = technologies.reduce((acc, tech) => {
    if (!acc[tech.area]) {
        acc[tech.area] = {};
    }
  
    if (!acc[tech.area][tech.type]) {
        acc[tech.area][tech.type] = [];
    }
    acc[tech.area][tech.type].push(tech);
   

    return acc;
}, {} as Record<string, Record<string, Technology[]>>);

console.log(groupedTechnologies);
