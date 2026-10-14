/**
 * Imagens usadas apenas no preview local. A presença no domínio antigo não
 * comprova autoria, licença transferível nem vínculo com um projeto da BL.
 * Substituir por arquivos locais autorizados antes da publicação.
 */
export const previewMedia = {
  hero: {
    src: "https://blambiental.com.br/wp-content/uploads/2020/02/chamada-bg-img-01.jpg",
    width: 1920,
    height: 1080,
    source: "Site público antigo da BL Ambiental",
    localDestination: "src/assets/jardim-hero.jpg",
    status: "provisória — direitos e autoria pendentes",
  },
  process: {
    src: "https://blambiental.com.br/wp-content/uploads/2020/02/img-01.jpg",
    width: 600,
    height: 450,
    source: "Site público antigo da BL Ambiental",
    localDestination: "src/assets/plantio-processo.jpg",
    status: "provisória — imagem ilustrativa, direitos e autoria pendentes",
  },
} as const;
