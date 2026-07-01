import { data } from '@/components/app/layout/footer/data'
import { FooterCard } from '@/components/app/layout/footer/Footer-card'

export const Footer = () => {
  return (
    <section className="my-8 space-y-2 text-center">
      <h2 className="text-subtitle-sm md:text-subtitle font-bold">
        Fale comigo!
      </h2>
      <p className="text-muted-foreground mx-auto max-w-2xl text-pretty">
        Tem alguma pergunta, um <i>feedback</i> ou só quer dar um alô e trocar
        uma idéia? Fico mais do que feliz em poder falar! Sinta-se a vontade
        para entrar em contato utilizando as informações abaixo, e em breve eu
        te retorno - na dúvida, busque um ☕ e aguarde.
      </p>

      <div className="mx-auto mt-6 grid max-w-fit grid-cols-2 gap-2">
        {data.map((contact) => (
          <FooterCard key={contact.title} contact={contact} />
        ))}
      </div>
    </section>
  )
}
