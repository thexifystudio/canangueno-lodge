import type { Localized } from "@/lib/i18n";
import type { MediaId } from "@/config/media";

/**
 * El lodge y la empresa. Contenido real de cananguenolodge.com/nosotros
 * (misión, visión, registro legal) y de las inclusiones del tour
 * (instalaciones). Nada agregado.
 */

export const about: {
  intro: Localized;
  mission: Localized;
  vision: Localized;
  company: Localized;
} = {
  intro: {
    es: "Canangueno Lodge está en la comunidad Siona–Seoqueya, dentro de la Reserva de Producción Faunística de Cuyabeno, a tres horas de canoa río adentro. No es un hotel con excursiones: es una casa en medio de la selva desde la que se sale a caminar, a remar y a mirar.",
    en: "Canangueno Lodge sits in the Siona–Seoqueya community, inside the Cuyabeno Wildlife Production Reserve, three hours upriver by canoe. It is not a hotel with excursions attached: it is a house in the middle of the rainforest that you set out from — to walk, to paddle and to look.",
  },
  company: {
    es: "Somos una operadora de turismo legalmente autorizada por el Ministerio de Turismo y el Ministerio del Ambiente del Ecuador, con registro forestal RNAB20168950448 para operar dentro del Patrimonio de Áreas Naturales del Estado. Nuestro representante legal, Pablo Flores, trabaja en turismo desde 2006 y mantiene una relación estrecha con las comunidades Siona–Seoqueya, con las que la empresa opera en conjunto.",
    en: "We are a tour operator legally licensed by Ecuador's Ministry of Tourism and Ministry of the Environment, holding forestry registration RNAB20168950448 to operate within the State's Natural Areas. Our legal representative, Pablo Flores, has worked in tourism since 2006 and maintains a close relationship with the Siona–Seoqueya communities, with whom the company works directly.",
  },
  mission: {
    es: "Garantizar una aventura amazónica inolvidable, mostrando responsabilidad por el medio ambiente y promoviendo un vínculo estrecho entre los viajeros, la naturaleza y la cultura de la Amazonía. Cuidamos la seguridad de visitantes y tripulación, promovemos el intercambio cultural con la comunidad Siona y trabajamos por la conservación de la biodiversidad y los ecosistemas de la Reserva Cuyabeno.",
    en: "To guarantee an unforgettable Amazon adventure, showing responsibility towards the environment and building a close bond between travellers, nature and Amazonian culture. We look after the safety of visitors and crew, encourage cultural exchange with the Siona community, and work for the conservation of the biodiversity and ecosystems of the Cuyabeno Reserve.",
  },
  vision: {
    es: "Ser un touroperador social y eco-responsable, con servicios y tours de excelencia, que opere según las preferencias de sus huéspedes y las frágiles condiciones de la selva amazónica, ofreciendo formas creativas de ecoturismo e intercambio cultural.",
    en: "To be a socially and ecologically responsible tour operator, with excellent service and tours, working around both our guests' preferences and the fragile conditions of the Amazon rainforest, offering creative forms of ecotourism and cultural exchange.",
  },
};

export type Facility = {
  id: string;
  title: Localized;
  body: Localized;
  mediaId: MediaId;
};

export const facilities: Facility[] = [
  {
    id: "cabanas",
    title: { es: "Cabañas", en: "Cabins" },
    body: {
      es: "Habitaciones con baño privado —sanitario, ducha y lavabo—, mosquitero y capacidad total para 40 huéspedes entre simples, dobles y compartidas.",
      en: "Rooms with a private bathroom — toilet, shower and sink — mosquito nets, and a total capacity of 40 guests across single, double and shared rooms.",
    },
    mediaId: "lodge-room",
  },
  {
    id: "comedor",
    title: { es: "Comedor", en: "Dining" },
    body: {
      es: "Todas las comidas del tour están incluidas: desayuno, almuerzo y cena, con agua purificada y té disponibles en el lodge.",
      en: "All meals during the tour are included: breakfast, lunch and dinner, with purified water and tea available at the lodge.",
    },
    mediaId: "lodge-dining",
  },
  {
    id: "equipo",
    title: { es: "Equipo de campo", en: "Field gear" },
    body: {
      es: "Impermeable, botas de caucho, mosquitero y chaleco salvavidas para cada huésped. Hay electricidad por horas para cargar cámaras y baterías.",
      en: "Rain jacket, rubber boots, mosquito net and life vest for every guest. Electricity is available at set hours to charge cameras and batteries.",
    },
    mediaId: "lodge-deck",
  },
];
