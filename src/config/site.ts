export type JsonLd = Record<string, unknown>;

export interface NavigationItem {
  label: string;
  href: string;
}

export interface SocialProfile {
  label: string;
  url: string;
}

/**
 * Project-specific identity and content settings.
 * Keep only facts confirmed by the site owner in this file.
 */
export const siteConfig = {
  name: "BL Ambiental",
  legalName: "",
  locale: "pt-BR",
  url: "",
  description: "Paisagismo, implantação, reforma e manutenção de jardins em São Paulo e Grande São Paulo.",
  logo: "/logo.png",
  favicon: "/logo.png",

  contact: {
    email: "",
    phone: "",
    whatsapp: "5511973313795",
  },

  navigation: [
    { label: "Serviços", href: "#servicos" },
    { label: "Como começar", href: "#como-comecar" },
    { label: "A BL Ambiental", href: "#sobre" },
    { label: "Contato", href: "#contato" },
  ] as NavigationItem[],
  socialProfiles: [] as SocialProfile[],

  seo: {
    titleTemplate: "{page} | {site}",
    defaultImage: "",
    noindex: true,
  },

  /**
   * Add a verified Organization, Person, LocalBusiness, or other schema
   * here when the project has enough confirmed information.
   */
  schema: undefined as JsonLd | JsonLd[] | undefined,
} as const;
