import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProjectDetailService {
  private projects = [
    {
      id: 0,
      title: 'E-commerce',
      description: `
        <p>Desarrollé una tienda online utilizando <strong>Angular</strong> y un API REST. Este proyecto permite a los usuarios explorar productos, agregarlos al carrito y realizar compras.</p>
        <p><strong>Reto:</strong> Implementar un carrito de compras dinámico con sumatoria automática de cantidades y totales.</p>
        <p><strong>Solución:</strong> Utilicé una arquitectura modular para organizar el proyecto en dominios como <code>products</code> y <code>shared</code>, facilitando la escalabilidad y el mantenimiento.</p>
        <p><strong>Potencial:</strong> Se puede integrar un sistema de pagos en tiempo real y notificaciones por correo.</p>
      `,
      images: ['assets/e1.jpg', 'assets/e2.jpg', 'assets/e3.jpg'],
      githubUrl: 'https://github.com/eduarxdogar/ecomerce',
      onlineUrl: 'https://e-comerce-faffd.web.app/',
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
      description: `
        <p>Desarrollé una aplicación de escritorio para la gestión de gimnasios utilizando <strong>C#</strong> y <strong>.NET</strong>. La aplicación permite gestionar membresías, roles de administrador y usuarios.</p>
        <p><strong>Reto:</strong> Diseñar una interfaz intuitiva que permita a los administradores gestionar múltiples usuarios y planes.</p>
        <p><strong>Solución:</strong> Implementé un sistema modular con operaciones CRUD y una base de datos relacional en <strong>SQL Server</strong>.</p>
        <p><strong>Potencial:</strong> Se puede extender para incluir reportes financieros y un sistema de reservas en línea.</p>
      `,
      images: [
        'assets/inicio.jpg',
        'assets/base.jpg',
        'assets/usu.jpg',
        'assets/merca.jpg',
        'assets/gym.jpg',
        'assets/planes.jpg',
      ],
      githubUrl2: 'https://github.com/eduarxdogar/Gym',
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
      id: 2,
      title: 'Bot para Discord con Node.js y Discord.js (v14)',
      description: `
        <p>Desarrollé un chatbot para Discord utilizando <strong>Node.js</strong> y <strong>Discord.js</strong>. El bot responde a comandos slash, maneja eventos en tiempo real y envía recordatorios automáticos.</p>
        <p><strong>Reto:</strong> Gestionar múltiples eventos y comandos de manera modular.</p>
        <p><strong>Solución:</strong> Utilicé el patrón Event Emitter de Node.js y <strong>node-schedule</strong> para tareas programadas, además de una base de datos en <strong>MySQL</strong> para persistencia.</p>
        <p><strong>Potencial:</strong> Se puede integrar con APIs externas para ampliar las funcionalidades del bot.</p>
      `,
      images: [
        'assets/botbase.jpg',
        'assets/cmd2.jpg',
        'assets/re3.jpg',
        'assets/record.jpg',
        'assets/guardo.jpg',
        'assets/diario.jpg',
      ],
      githubUrl: 'https://github.com/eduarxdogar/StandupBot/tree/Crisdev',
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
      description: `
        <p>Desarrollé un sistema de ventas utilizando <strong>ASP.NET Core</strong> y <strong>Angular</strong>. El sistema permite gestionar clientes, productos y ventas.</p>
        <p><strong>Reto:</strong> Implementar autenticación segura con JWT y operaciones CRUD completas.</p>
        <p><strong>Solución:</strong> Utilicé <strong>Entity Framework</strong> para la persistencia de datos y Angular Material para una interfaz moderna y responsiva.</p>
        <p><strong>Potencial:</strong> Se puede integrar con un sistema de facturación electrónica.</p>
      `,
      images: [
        'assets/sqlV2.jpg',
        'assets/ini8.jpg',
        'assets/fV3.jpg',
        'assets/fV4.jpg',
        'assets/FeV5.jpg',
        'assets/Fd6.jpg',
        'assets/sqlV5.jpg',
        'assets/backV1.jpg',
      ],
      githubUrl: 'https://github.com/eduarxdogar/appLoginAuthJwt',
      githubUrl2: 'https://github.com/eduarxdogar/Venta1.0/tree/main/WsVenta',
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
          name: 'SQL Server',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg',
        },
      ],
    },
    {
      id: 4,
      title: 'Sistema de Concesionarios',
      description: `
        <p>Implementé un sistema de concesionarios utilizando <strong>Java</strong> y <strong>Spring Boot</strong>, aplicando la arquitectura hexagonal para desacoplar la lógica de negocio de la infraestructura.</p>
        <p><strong>Reto:</strong> Diseñar un sistema escalable y fácil de mantener.</p>
        <p><strong>Solución:</strong> Utilicé Spring Data JPA para la persistencia y REST API para la comunicación entre servicios.</p>
        <p><strong>Potencial:</strong> Se puede extender para incluir un sistema de inventarios y reportes.</p>
      `,
      images: [
        'assets/java2.jpg',
        'assets/pos3.jpg',
        'assets/javapos.jpg',
        'assets/javasql.jpg',
      ],
      githubUrl2: 'https://github.com/eduarxdogar/conssecionaire/tree/main',
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
      id: 5,
      title: 'Arquitectura DDD Back y Front',
      description: `
        <p>Desarrollé un proyecto basado en <strong>Domain-Driven Design (DDD)</strong> utilizando <strong>C#</strong> y <strong>.NET 8</strong> en el backend, y <strong>Angular</strong> en el frontend.</p>
        <p><strong>Reto:</strong> Implementar patrones de diseño como Repository, Mapper y Service Layer para garantizar una arquitectura escalable.</p>
        <p><strong>Solución:</strong> Diseñé un modelo base con casos de uso representativos y una estructura modular para facilitar la extensión del sistema.</p>
        <p><strong>Potencial:</strong> Se puede integrar con microservicios para manejar grandes volúmenes de datos.</p>
      `,
      images: [
        'assets/slk1.jpg',
        'assets/conlk2.jpg',
        'assets/bklk3.jpg',
        'assets/swlk4.jpg',
        'assets/ftlk5.jpg',
      ],
      githubUrl: 'https://github.com/eduarxdogar/DDD_Back',
      githubUrl2: 'https://github.com/eduarxdogar/front',
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
          name: 'Angular',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg',
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

  getProjectById(id: number) {
    return this.projects.find((project) => project.id === id);
  }
}
