export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'Plataforma completa de e-commerce com carrinho de compras, pagamentos integrados e painel administrativo.',
      tech: ['Next.js', 'TypeScript', 'Stripe', 'MongoDB'],
      image: '🛒',
      link: '#'
    },
    {
      id: 2,
      title: 'Task Manager App',
      description: 'Aplicativo de gerenciamento de tarefas com sincronização em tempo real e colaboração em equipe.',
      tech: ['React', 'Firebase', 'Tailwind CSS'],
      image: '✅',
      link: '#'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Dashboard de previsão do tempo com mapas interativos e alertas personalizados.',
      tech: ['React', 'API REST', 'Chart.js'],
      image: '🌤️',
      link: '#'
    },
    {
      id: 4,
      title: 'Social Media App',
      description: 'Rede social com chat em tempo real, posts, likes e sistema de seguidores.',
      tech: ['Next.js', 'Socket.io', 'PostgreSQL'],
      image: '📱',
      link: '#'
    },
    {
      id: 5,
      title: 'Portfolio CMS',
      description: 'Sistema de gerenciamento de conteúdo para portfólios com editor visual.',
      tech: ['Next.js', 'Prisma', 'TailwindCSS'],
      image: '📝',
      link: '#'
    },
    {
      id: 6,
      title: 'Fitness Tracker',
      description: 'Aplicativo de rastreamento de exercícios com gráficos de progresso e metas.',
      tech: ['React Native', 'Node.js', 'MongoDB'],
      image: '💪',
      link: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Meus Projetos</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 h-48 flex items-center justify-center text-6xl">
                {project.image}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Ver Projeto
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}