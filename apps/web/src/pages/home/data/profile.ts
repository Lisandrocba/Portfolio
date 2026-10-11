// Datos de contacto y enlaces del portfolio (textos de Figma, frame desktop de Home).
export const profile = {
  name: 'Lisandro Córdoba',
  email: 'lisandrocba_7@hotmail.com',
  phone: '+54 351 530-7392',
  phoneHref: 'tel:+543515307392',
  github: { label: 'github.com/Lisandrocba', href: 'https://github.com/Lisandrocba' },
  linkedin: { label: 'linkedin.com/in/lisandrocordoba', href: 'https://www.linkedin.com/in/lisandrocordoba' },
  cvHref: `${import.meta.env.BASE_URL}Lisandro-Cordoba-Full-Stack-Developer-CV-ES.pdf`,
}

export const sectionIds = {
  top: 'inicio',
  about: 'sobre-mi',
  stack: 'stack',
  work: 'experiencia',
  education: 'estudios',
  contact: 'contacto',
} as const

export const navLinks = [
  { label: 'Sobre mí', href: `#${sectionIds.about}` },
  { label: 'Stack', href: `#${sectionIds.stack}` },
  { label: 'Experiencia', href: `#${sectionIds.work}` },
  { label: 'Estudios', href: `#${sectionIds.education}` },
]
