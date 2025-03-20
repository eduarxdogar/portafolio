import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TechnologiesService {
  getTechnologies() {
    return [
      {
        name: 'React',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        description:
          'Librería de JavaScript para construir interfaces interactivas.',
      },
      {
        name: 'Angular',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg',
        description: 'Framework robusto para crear aplicaciones web dinámicas.',
      },
      {
        name: 'Java',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
        description: 'Lenguaje de programación orientado a objetos.',
      },
      {
        name: 'C#',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
        description: 'Lenguaje moderno para desarrollo en .NET.',
      },
      {
        name: 'MySQL',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
        description: 'Sistema de gestión de bases de datos relacional.',
      },
      {
        name: 'SQL Server',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg',
        description: 'Base de datos de Microsoft con alta escalabilidad.',
      },
      {
        name: 'Node.js',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
        description: 'Entorno de ejecución para JavaScript en el backend.',
      },

      {
        name: 'HTML5',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
        description: 'Lenguaje base para estructurar y dar contenido a la web.',
      },
      {
        name: 'CSS3',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
        description: 'Lenguaje de estilos para diseñar y embellecer la web.',
      },
      {
        name: 'JavaScript',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        description: 'Lenguaje esencial para crear interactividad en la web.',
      },
      {
        name: 'Git',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
        description:
          'Herramienta de control de versiones para gestionar proyectos colaborativos.',
      },
      {
        name: 'Docker',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
        description:
          'Plataforma para contenedorización y despliegue de aplicaciones.',
      },
      {
        name: 'Spring Boot',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
        description:
          'Framework basado en Spring para desarrollar aplicaciones Java de forma rápida.',
      },
      {
        name: 'Entity Framework',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-plain.svg',
        description: 'ORM para .NET que facilita el acceso a bases de datos.',
      },
      {
        name: 'Next.js',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg',
        description: 'Framework de React para aplicaciones web y móviles.',
      },
    ];
  }
  constructor() {}
}
