import { type Contact } from '@/components/app/sections/contact/data'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  contact: Contact
}
export const ContactCard = ({ contact }: Props) => {
  return (
    <Link
      className="border-border flex items-center gap-4 rounded border bg-zinc-900/80 p-2"
      href={contact.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        src={contact.icon}
        alt={`Logo do ${contact.title}`}
        width={24}
        height={24}
        className="stroke-amber-400 stroke-2 invert"
      />
      <div>{contact.title}</div>
    </Link>
  )
}
