import { Technology } from '../../domain/models/technology.model';
import { Project } from '../../domain/models/project';
import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private _projects = signal<Project[]>([
    {
      id: 0,
      title: 'E-commerce',
      iconName: 'shopping-bag',
      description: 'Plataforma de comercio electrónico SPA construida con Angular 18 y arquitectura modular.',
      challenge: 'Diseñar una experiencia de usuario fluida con carga rápida de productos y gestión de estado compleja (carrito, filtros, autenticación) sin comprometer el rendimiento en dispositivos móviles.',
      solution: 'Implementé una arquitectura basada en **Lazy Loading** para dividir el bundle inicial. Utilicé **Angular Signals** para una gestión de estado reactiva y eficiente, eliminando renderizados innecesarios. Integré una pasarela de pagos segura y optimicé las imágenes con directivas personalizadas.',
      image: 'assets/e1.jpg',
      gallery: ['assets/e1.jpg', 'assets/e1.jpg'],
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
      id: 1,
      title: 'Sistema de Gym',
      iconName: 'dumbbell',
      description: 'Sistema integral de gestión de gimnasios desarrollado en .NET Core con arquitectura N-Capas.',
      challenge: 'Gestionar la concurrencia en la reserva de clases y el control de acceso en tiempo real, además de manejar facturación recurrente segura y escalable.',
      solution: 'Desarrollé una API RESTful robusta con **.NET Core** y **SQL Server**. Implementé **Stored Procedures** para operaciones críticas de base de datos y un sistema de jobs en segundo plano para la facturación automática. La seguridad se manejó con **JWT** y roles granulares.',
      image: 'assets/gym.jpg',
      gallery: ['assets/gym.jpg', 'assets/gym.jpg'],
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
          name: 'MySQL',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
          description: 'Sistema de gestión de bases de datos relacional.',
        },
      ],
    },
    {
      id: 2,
      title: 'Bot para Discord',
      iconName: 'bot',
      description: 'Bot automatizado para servidores de Discord escalables, escrito en Node.js.',
      challenge: 'Mantener una conexión estable y responder a eventos en tiempo real en servidores con miles de usuarios, asegurando escalabilidad y bajo tiempo de respuesta.',
      solution: 'Utilicé **Node.js** con la librería **Discord.js v14**. Implementé una arquitectura orientada a eventos y comandos Slash (Interaction API). Usé **cron jobs** para tareas programadas y optimicé el manejo de websockets para garantizar la estabilidad.',
      image: 'assets/bot1.jpg',
      gallery: ['assets/bot1.jpg', 'assets/bot1.jpg'],
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
      id: 3,
      title: 'Sistema de Ventas',
      iconName: 'zap',
      description: 'Sistema POS (Punto de Venta) robusto con backend en ASP.NET Core y frontend en Angular.',
      challenge: 'Garantizar la integridad de los datos en transacciones concurrentes de inventario y facturación, con una interfaz de venta rápida y amigable.',
      solution: 'Implementé un backend con **Entity Framework Core** y transacciones ACID. El frontend usa componentes reactivos optimizados para entrada de datos rápida. Se integraron reportes en tiempo real usando consultas optimizadas.',
      image: 'assets/login7.jpg',
      gallery: ['assets/login7.jpg', 'assets/login7.jpg'],
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
      id: 4,
      title: 'Sistema Concesionarios',
      iconName: 'car',
      description: 'Microservicio para gestión de concesionarios construido con Spring Boot 3.',
      challenge: 'Desacoplar la lógica de negocio de la infraestructura para permitir cambios futuros de base de datos o frameworks sin afectar el núcleo del dominio.',
      solution: 'Adopté una **Arquitectura Hexagonal (Ports & Adapters)**. Definí el dominio en el núcleo, rodeado de puertos (interfaces) y adaptadores (implementaciones). Esto mejoró drásticamente la testabilidad unitaria y la mantenibilidad.',
      image: 'assets/java1.jpg',
      gallery: ['assets/java1.jpg', 'assets/java1.jpg'],
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
          name: 'MySQL',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
          description: 'Sistema de gestión de bases de datos relacional.',
        },
      ],
    },
    {
      id: 5,
      title: 'Arquitectura DDD',
      iconName: 'layers',
      description: 'Solución empresarial basada en Domain-Driven Design (DDD) con .NET 8.',
      challenge: 'Modelar un dominio complejo con reglas de negocio intrincadas, evitando el "Anemic Domain Model" y asegurando la consistencia transaccional.',
      solution: 'Apliqué patrones tácticos de **DDD** (Entidades, Agregados, Value Objects). Implementé **CQRS** básico para separar lecturas de escrituras y **Mediator** para desacoplar los manejadores de comandos. El resultado es un código altamente expresivo y alineado con el negocio.',
      image: 'assets/backlk6.jpg',
      gallery: ['assets/backlk6.jpg', 'assets/backlk6.jpg'],
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
  ]);

  public projects = this._projects.asReadonly();

  public getProject(id: number | string): Project | undefined {
    return this._projects().find(p => p.id === Number(id));
  }
}
