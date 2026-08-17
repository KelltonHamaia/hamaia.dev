type Contribution = {
  name: string
  description: string
}
export type Experience = {
  company: string
  role: string
  url: string
  period: {
    startedAt: Date
    endedAt: Date | null
  }
  description: string
  keyContributions: Contribution[]
}

export const data: Experience[] = [
  {
    company: 'Vexur',
    role: 'Desenvolvedor fullstack',
    url: '/images/companies/vexur.webp',
    period: {
      startedAt: new Date(2024, 8, 1),
      endedAt: null,
    },
    description:
      'Atuo no desenvolvimento, evolução e manutenção de soluções web, criando APIs e aplicações utilizando Node.js, TypeScript, Neo4j, Vue.js e React. Meu trabalho envolve modelagem de dados, integrações entre sistemas, desenvolvimento de novas funcionalidades, modernização de aplicações existentes e automação de processos, sempre priorizando soluções simples, escaláveis e de fácil manutenção.',
    keyContributions: [
      {
        name: 'Integração com a instituição de pagamentos Cooper card',
        description:
          'Projetei e desenvolvi uma integração para geração e gerenciamento de arquivos de pagamento de comissões, implementando a API em Fastify, TypeScript e Neo4j e a interface em Vue 3, com controle de histórico e rastreabilidade das exportações.',
      },
      {
        name: 'Integração MedSenior',
        description:
          'Desenvolvo e mantenho a integração responsável pelo processo de implantação de propostas junto à operadora de plano de saúde MedSenior, acompanhando o fluxo de ponta a ponta, desde o envio e adequação dos dados até o processamento dos retornos, assinatura digital e implantação da proposta. Também desenvolvi uma interface para acompanhamento do status e andamento das propostas.',
      },
      {
        name: 'Integração MXM',
        description:
          'Atuo na manutenção e evolução da integração com o ERP MXM, responsável pela sincronização de clientes e envio de títulos financeiros. Desenvolvi processos automatizados para cadastro periódico dos clientes e envio dos títulos ainda não integrados, além de uma interface para acompanhamento dos clientes e títulos processados.',
      },
      {
        name: 'Sistema de Comunicações por E-mail',
        description:
          'Reestruturei o fluxo de geração de anexos criando uma solução reutilizável que reduziu o acoplamento do código e eliminou a necessidade de alterações manuais para novos comunicados.',
      },
      {
        name: 'Migração dos Visualizadores de Comunicação',
        description:
          'Liderei a modernização dos visualizadores, migrando de Vue 2 para React, melhorando a experiência de desenvolvimento e facilitando a evolução e manutenção da aplicação.',
      },
      {
        name: 'Otimização de Consultas em Neo4j e garantia de compatibilidade',
        description:
          'Analisei e refatorei consultas Cypher, revisando a modelagem de dados quando necessário para simplificar as buscas, reduzir a complexidade das queries e melhorar o desempenho das aplicações. Adequei consultas Cypher e realizei os ajustes necessários para garantir compatibilidade com a nova versão do banco de dados (4 para 5), contribuindo para a atualização da plataforma e continuidade da aplicação.',
      },
    ],
  },
]
