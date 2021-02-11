export type ImageProps = {
  alternativeText: string
  url: string
}

export type ButtonProps = {
  label: string
  url: string
}

export type TechIconsProps = {
  icon: ImageProps
  title: string
}

export type ConceptsProps = {
  title: string
}

export type ModulesProps = {
  title: string
  subtitle: string
  description: string
}

export type HeaderProps = {
  title: string
  description: string
  button: ButtonProps
  image: ImageProps
}

export type SectionAboutProjectProps = {
  title: string
  description: string
  image: ImageProps
}

export type SectionTechProps = {
  title: string
  techIcons: TechIconsProps[]
}

export type SectionConceptsProps = {
  title: string
  concepts: ConceptsProps[]
}
export type SectionModulesProps = {
  title: string
  modules: ModulesProps[]
}
export type SectionAgendaProps = {
  title: string
  description: string
}

export type PricingBoxProps = {
  totalPrice: number
  numberIntallments: number
  priceInstallment: number
  benefits: string
  button: ButtonProps
}

export type SocialLinks = {
  title: string
  url: string
}

export type AuthorProps = {
  name: string
  photo: ImageProps
  role: string
  description: string
  socialLinks: SocialLinks[]
}

export type SectionAboutUsProps = {
  title: string
  authors: AuthorProps[]
}

export type ReviewsProps = {
  id: string
  name: string
  text: string
  photo: ImageProps
}

export type SectionReviewsProps = {
  title: string
  reviews: ReviewsProps[]
}

export type QuestionProps = {
  question: string
  answer: string
}

export type SectionFaqProps = {
  title: string
  questions: QuestionProps[]
}

export type LandingPageProps = {
  logo: ImageProps
  header: HeaderProps
  sectionAboutProject: SectionAboutProjectProps
  sectionTech: SectionTechProps
  sectionConcepts: SectionConceptsProps
  sectionModules: SectionModulesProps
  sectionAgenda: SectionAgendaProps
  pricingBox: PricingBoxProps
  sectionAboutUs: SectionAboutUsProps
  sectionReviews: SectionReviewsProps
  sectionFaq: SectionFaqProps
}
