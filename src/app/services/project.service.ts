import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private projects = [
    {
      title: 'E-commerce 🛒',
      description: `
        <p>Desarrollé una tienda online utilizando <strong>Angular</strong> en el frontend y un API REST en el backend.</p>
        <p>El proyecto emplea una arquitectura modular con separación por dominios, lo que facilita la organización del código y la escalabilidad del sistema.</p>
        <p><strong>Experiencia de usuario:</strong> Los usuarios pueden explorar productos, agregarlos al carrito y realizar compras. Además, puedes hacer clic en las imágenes para ver más detalles del proyecto.</p>
      `,
      image: 'assets/e1.jpg',
      githubUrl: 'https://github.com/eduarxdogar/ecomerce',
      githubType: 'Frontend',
      technologies: [
        {
          name: 'Angular',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg',
        },
        {
          name: 'TypeScript',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
        },
        {
          name: 'TailwindCSS',
          icon: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/tailwindcss.svg',
        },
      ],
    },
    {
      title: 'Sistema de Gym 🏋️‍♂️',
      description: `
        <p>Desarrollé un sistema de gestión para gimnasios utilizando <strong>C#</strong> y <strong>.NET Core</strong>, con una base de datos relacional en <strong>SQL Server</strong>.</p>
        <p>El sistema permite gestionar membresías, roles de administrador y usuarios, con una interfaz intuitiva y fácil de usar.</p>
        <p><strong>Experiencia de usuario:</strong> Puedes hacer clic en las imágenes para explorar más detalles del proyecto, como capturas de pantalla y el repositorio en GitHub.</p>
      `,
      image: 'assets/gym.jpg',
      githubUrl: 'https://github.com/eduarxdogar/Gym',
      githubType: 'Backend',
      technologies: [
        {
          name: 'C#',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
        },
        {
          name: '.NET',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg',
        },
        {
          name: 'SQL Server',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg',
        },
      ],
    },
    {
      title: 'Bot para Discord con Node.js y Discord.js (v14) 🤖',
      description: `
        <p>Desarrollé un chatbot para Discord utilizando <strong>Node.js</strong> y la librería <strong>Discord.js v14</strong>.</p>
        <p>El bot está diseñado para responder automáticamente a comandos slash, manejar eventos en tiempo real y enviar recordatorios programados mediante <strong>node-schedule</strong>.</p>
        <p><strong>Experiencia de usuario:</strong> Puedes hacer clic en las imágenes para ver más detalles del proyecto y acceder al repositorio en GitHub.</p>
      `,
      image: 'assets/bot1.jpg',
      githubUrl: 'https://github.com/eduarxdogar/StandupBot/tree/Crisdev',
      githubType: 'Frontend',
      technologies: [
        {
          name: 'Node.js',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
        },
        {
          name: 'JavaScript',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        },
        {
          name: 'MySQL',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
        },
      ],
    },
    {
      title: 'Sistema de Ventas 💰',
      description: `
        <p>Desarrollé un sistema de ventas utilizando <strong>ASP.NET Core 3.0</strong> y un frontend en <strong>Angular 13</strong> con Angular Material.</p>
        <p>El sistema permite gestionar ventas, clientes y productos, además de implementar autenticación segura con JWT.</p>
        <p><strong>Experiencia de usuario:</strong> Puedes hacer clic en las imágenes para explorar más detalles del proyecto y acceder a los repositorios en GitHub.</p>
      `,
      image: 'assets/login7.jpg',
      githubUrl: 'https://github.com/eduarxdogar/appLoginAuthJwt',
      githubType: 'Fullstack',
      technologies: [
        {
          name: 'Angular',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg',
        },
        {
          name: 'C#',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
        },
        {
          name: '.NET',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg',
        },
        {
          name: 'SQL Server',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg',
        },
        {
          name: 'Angular Material',
          icon: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/angular.svg',
        },
      ],
    },
    {
      title: 'Sistema de Concesionarios 🚗',
      description: `
        <p>Implementé un sistema de concesionarios utilizando <strong>Java</strong> y <strong>Spring Boot</strong>, aplicando la arquitectura hexagonal.</p>
        <p>Esta arquitectura separa la lógica de dominio de las dependencias de infraestructura, facilitando pruebas, mantenimiento y escalabilidad.</p>
        <p><strong>Experiencia de usuario:</strong> Puedes hacer clic en las imágenes para explorar más detalles del proyecto y acceder al repositorio en GitHub.</p>
      `,
      image: 'assets/java1.jpg',
      githubUrl: 'https://github.com/eduarxdogar/conssecionaire/tree/main',
      githubType: 'Backend',
      technologies: [
        {
          name: 'Java',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
        },
        {
          name: 'Spring Boot',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
        },
        {
          name: 'SQL Server',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg',
        },
      ],
    },
    {
      title: 'Arquitectura DDD Back y Front 🏗️',
      description: `
        <p>Desarrollé un proyecto para Ahorracasa utilizando <strong>C#</strong>, <strong>.NET 8</strong> y <strong>Angular</strong>.</p>
        <p>Implementé patrones de diseño como Repository, Mapper y Service Layer para garantizar una arquitectura escalable y modular.</p>
        <p><strong>Experiencia de usuario:</strong> Puedes hacer clic en las imágenes para explorar más detalles del proyecto y acceder a los repositorios en GitHub.</p>
      `,
      image: 'assets/backlk6.jpg',
      githubUrl: 'https://github.com/eduarxdogar/DDD_Back',
      githubType: 'Fullstack',
      technologies: [
        {
          name: 'Angular',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg',
        },
        {
          name: 'C#',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
        },
        {
          name: '.NET',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg',
        },
        {
          name: 'SQL Server',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg',
        },
      ],
    },
  ];

  getProjects() {
    return this.projects;
  }
}
