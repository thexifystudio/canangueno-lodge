import type { Localized } from "@/lib/i18n";
import type { MediaId } from "@/config/media";

/**
 * ────────────────────────────────────────────────────────────────────────────
 *  CUYABENO — la reserva
 * ────────────────────────────────────────────────────────────────────────────
 *  Todo el texto de `/cuyabeno`: qué es la reserva, cómo funciona el agua, qué
 *  animales se ven y cuándo ir. Los animales son los que nombran los propios
 *  itinerarios del lodge (ver `fauna.ts`), no una lista genérica del Amazonas.
 *
 *  ⚠️ Datos generales de la reserva (año de creación, superficie, número de
 *  lagunas y de aves) tomados de fuentes públicas: revisarlos con el cliente
 *  antes de publicar.
 */

export const cuyabenoPage = {
  metaTitle: {
    es: "Cuyabeno: la reserva, sus lagunas y su fauna",
    en: "Cuyabeno: the reserve, its lagoons and wildlife",
    de: "Cuyabeno: das Reservat, seine Lagunen und Tierwelt",
    fr: "Cuyabeno : la réserve, ses lagunes et sa faune",
  },
  metaDescription: {
    es: "Qué es la Reserva de Producción de Fauna Cuyabeno, por qué sus ríos son negros, qué animales se ven y cuándo ir. En la Amazonía de Ecuador.",
    en: "What the Cuyabeno Wildlife Reserve is, why its rivers run black, which animals you can see and when to go. In the Ecuadorian Amazon.",
    de: "Was das Cuyabeno-Wildreservat ist, warum seine Flüsse schwarz sind, welche Tiere man sieht und wann man reist. Im ecuadorianischen Amazonas.",
    fr: "Ce qu’est la réserve de faune de Cuyabeno, pourquoi ses rivières sont noires, quels animaux on y voit et quand y aller. En Amazonie équatorienne.",
  },
  eyebrow: {
    es: "Reserva de Producción de Fauna Cuyabeno",
    en: "Cuyabeno Wildlife Production Reserve",
    de: "Cuyabeno-Wildreservat",
    fr: "Réserve de faune de Cuyabeno",
  },
  title: { es: "Cuyabeno", en: "Cuyabeno", de: "Cuyabeno", fr: "Cuyabeno" },
  lead: {
    es: "Un rincón de la Amazonía ecuatoriana, al noreste del país, donde los ríos corren oscuros como un espejo, el bosque se inunda cada año y los animales viven a la orilla del agua. Aquí está Canangueno Lodge.",
    en: "A corner of the Ecuadorian Amazon, in the country’s northeast, where the rivers run dark as a mirror, the forest floods every year and wildlife lives along the water’s edge. This is where Canangueno Lodge stands.",
    de: "Ein Winkel des ecuadorianischen Amazonas im Nordosten des Landes, wo die Flüsse dunkel wie ein Spiegel fließen, der Wald jedes Jahr überflutet wird und die Tiere am Ufer leben. Hier steht die Canangueno Lodge.",
    fr: "Un coin de l’Amazonie équatorienne, au nord-est du pays, où les rivières coulent sombres comme un miroir, où la forêt est inondée chaque année et où les animaux vivent au bord de l’eau. C’est ici que se trouve Canangueno Lodge.",
  },
} as const;

/** La franja de datos bajo el título. */
export const cuyabenoFacts: { value: string; label: Localized }[] = [
  {
    value: "1979",
    label: {
      es: "año en que se creó la reserva",
      en: "year the reserve was created",
      de: "Gründungsjahr des Reservats",
      fr: "année de création de la réserve",
    },
  },
  {
    value: "603.380 ha",
    label: {
      es: "de selva protegida",
      en: "of protected rainforest",
      de: "geschützter Regenwald",
      fr: "de forêt protégée",
    },
  },
  {
    value: "14",
    label: {
      es: "lagunas unidas por ríos",
      en: "lagoons linked by rivers",
      de: "durch Flüsse verbundene Lagunen",
      fr: "lagunes reliées par des rivières",
    },
  },
  {
    value: "+500",
    label: {
      es: "especies de aves",
      en: "bird species",
      de: "Vogelarten",
      fr: "espèces d’oiseaux",
    },
  },
];

export type CuyabenoChapter = {
  id: string;
  title: Localized;
  body: Localized;
  mediaId: MediaId;
};

/** Los bloques texto + foto, alternando el lado como en la página de un tour. */
export const cuyabenoChapters: CuyabenoChapter[] = [
  {
    id: "aguas-negras",
    mediaId: "exp-river",
    title: {
      es: "Un río de aguas negras",
      en: "A blackwater river",
      de: "Ein Schwarzwasserfluss",
      fr: "Une rivière d’eaux noires",
    },
    body: {
      es: "El río Cuyabeno no es marrón como la mayoría de los ríos amazónicos: es oscuro, casi negro. Lo tiñen los taninos de las hojas que caen y se descomponen en el agua. De lejos parece té; de cerca es un espejo perfecto donde el bosque y el cielo se reflejan enteros. Se recorre en canoa, en silencio, y desde el agua es como mejor se ve la vida de la selva.",
      en: "The Cuyabeno river isn’t brown like most Amazon rivers: it’s dark, almost black. It’s stained by tannins from leaves that fall and break down in the water. From a distance it looks like tea; up close it’s a perfect mirror that reflects the forest and the sky in full. You travel it by canoe, quietly, and the water is the best place from which to see the life of the forest.",
      de: "Der Río Cuyabeno ist nicht braun wie die meisten Amazonasflüsse, sondern dunkel, fast schwarz. Gefärbt wird er von den Tanninen der Blätter, die ins Wasser fallen und sich zersetzen. Von weitem sieht er aus wie Tee; aus der Nähe ist er ein perfekter Spiegel, in dem sich Wald und Himmel vollständig spiegeln. Man befährt ihn leise im Kanu, und vom Wasser aus sieht man das Leben des Regenwalds am besten.",
      fr: "Le río Cuyabeno n’est pas brun comme la plupart des fleuves amazoniens : il est sombre, presque noir. Ce sont les tanins des feuilles tombées qui se décomposent dans l’eau qui le colorent. De loin, on dirait du thé ; de près, c’est un miroir parfait où la forêt et le ciel se reflètent en entier. On le parcourt en pirogue, en silence, et c’est depuis l’eau qu’on observe le mieux la vie de la forêt.",
    },
  },
  {
    id: "laguna-grande",
    mediaId: "gal-lagoon-1",
    title: {
      es: "La Laguna Grande",
      en: "Laguna Grande",
      de: "Die Laguna Grande",
      fr: "La Laguna Grande",
    },
    body: {
      es: "El río une un sistema de lagunas, y la más grande es el corazón de la reserva. En medio del agua se levantan los macrolobios, árboles que pasan parte del año con el tronco sumergido. Aquí se nada al final de la tarde, se buscan anacondas entre las raíces y se ve uno de los atardeceres más famosos del Ecuador. De noche, con linterna, aparecen en la orilla los ojos de los caimanes.",
      en: "The river links a system of lagoons, and the largest is the heart of the reserve. Macrolobium trees rise from the middle of the water, their trunks submerged for part of the year. This is where you swim in the late afternoon, look for anacondas among the roots and watch one of the most famous sunsets in Ecuador. At night, by flashlight, the eyes of caimans appear along the bank.",
      de: "Der Fluss verbindet ein System von Lagunen, und die größte ist das Herz des Reservats. Mitten im Wasser stehen Macrolobium-Bäume, deren Stämme einen Teil des Jahres unter Wasser liegen. Hier schwimmt man am späten Nachmittag, sucht zwischen den Wurzeln nach Anakondas und erlebt einen der bekanntesten Sonnenuntergänge Ecuadors. Nachts leuchten im Schein der Taschenlampe die Augen der Kaimane am Ufer.",
      fr: "Le fleuve relie un réseau de lagunes, et la plus grande est le cœur de la réserve. Au milieu de l’eau se dressent les macrolobiums, des arbres dont le tronc reste immergé une partie de l’année. C’est ici qu’on nage en fin d’après-midi, qu’on cherche les anacondas entre les racines et qu’on assiste à l’un des couchers de soleil les plus célèbres d’Équateur. La nuit, à la lampe, les yeux des caïmans apparaissent sur la rive.",
    },
  },
  {
    id: "bosque",
    mediaId: "exp-jungle",
    title: {
      es: "Bosque primario",
      en: "Primary forest",
      de: "Primärwald",
      fr: "Forêt primaire",
    },
    body: {
      es: "Lejos del río, la selva nunca fue talada. Los senderos pasan bajo ceibas —el árbol más grande de la Amazonía—, entre palmas de morete, heliconias y orquídeas. En el suelo y en las hojas hay ranas, hormigas, arañas e insectos que sólo se ven si alguien te enseña dónde mirar, y para eso van los guías.",
      en: "Away from the river, the forest has never been logged. The trails pass beneath ceibas — the largest tree in the Amazon — among morete palms, heliconias and orchids. On the ground and on the leaves live frogs, ants, spiders and insects you’ll only notice if someone shows you where to look, which is what the guides are there for.",
      de: "Abseits des Flusses wurde der Wald nie abgeholzt. Die Pfade führen unter Ceiba-Bäumen hindurch — den größten Bäumen des Amazonas — vorbei an Morete-Palmen, Helikonien und Orchideen. Auf dem Boden und auf den Blättern leben Frösche, Ameisen, Spinnen und Insekten, die man nur bemerkt, wenn einem jemand zeigt, wohin man schauen muss — dafür sind die Guides da.",
      fr: "Loin du fleuve, la forêt n’a jamais été exploitée. Les sentiers passent sous les fromagers — les plus grands arbres d’Amazonie —, parmi les palmiers morete, les héliconias et les orchidées. Au sol et sur les feuilles vivent grenouilles, fourmis, araignées et insectes qu’on ne remarque que si quelqu’un vous montre où regarder : c’est le rôle des guides.",
    },
  },
  {
    id: "comunidades",
    mediaId: "gal-community-3",
    title: {
      es: "Los pueblos del río",
      en: "The people of the river",
      de: "Die Menschen am Fluss",
      fr: "Les peuples du fleuve",
    },
    body: {
      es: "Cuyabeno no es una selva vacía. Dentro de la reserva viven comunidades indígenas —entre ellas Siona, Secoya, Cofán y Kichwa— que conocen este bosque desde hace generaciones. En los tours se visita a las comunidades Siona Taraveya de Tarapuy y de Seoqueya: su historia, sus artesanías y el casabe, el pan de yuca que se hace a mano.",
      en: "Cuyabeno isn’t an empty forest. Indigenous communities live inside the reserve — among them Siona, Secoya, Cofán and Kichwa — and have known this forest for generations. The tours visit the Siona Taraveya community of Tarapuy and the Seoqueya community: their history, their crafts and casabe, the cassava bread made by hand.",
      de: "Cuyabeno ist kein leerer Wald. Im Reservat leben indigene Gemeinschaften — darunter Siona, Secoya, Cofán und Kichwa —, die diesen Wald seit Generationen kennen. Auf den Touren besucht man die Siona-Taraveya-Gemeinschaft von Tarapuy und die Gemeinschaft Seoqueya: ihre Geschichte, ihr Kunsthandwerk und Casabe, das von Hand gebackene Yuca-Brot.",
      fr: "Cuyabeno n’est pas une forêt vide. Des communautés autochtones vivent dans la réserve — parmi elles les Siona, Secoya, Cofán et Kichwa — et connaissent cette forêt depuis des générations. Les circuits visitent la communauté Siona Taraveya de Tarapuy et celle de Seoqueya : leur histoire, leur artisanat et le casabe, le pain de manioc fait à la main.",
    },
  },
];

export const cuyabenoWildlifeCopy = {
  title: {
    es: "Los animales que se ven",
    en: "The animals you’ll see",
    de: "Die Tiere, die man sieht",
    fr: "Les animaux que l’on voit",
  },
  lead: {
    es: "Nada está garantizado: es selva, no un zoológico. Pero éstos son los que nuestros guías encuentran en los recorridos, y casi todos se ven desde la canoa.",
    en: "Nothing is guaranteed: it’s a rainforest, not a zoo. But these are the animals our guides find on the tours, and nearly all of them can be seen from the canoe.",
    de: "Garantiert ist nichts: Es ist Regenwald, kein Zoo. Aber diese Tiere finden unsere Guides auf den Touren, und fast alle sieht man vom Kanu aus.",
    fr: "Rien n’est garanti : c’est une forêt, pas un zoo. Mais ce sont les animaux que nos guides trouvent pendant les circuits, et presque tous se voient depuis la pirogue.",
  },
  alsoTitle: {
    es: "Y además",
    en: "And also",
    de: "Und außerdem",
    fr: "Et aussi",
  },
} as const;

export type CuyabenoAnimal = {
  id: string;
  name: Localized;
  note: Localized;
  mediaId: MediaId;
};

export const cuyabenoAnimals: CuyabenoAnimal[] = [
  {
    id: "tucan",
    mediaId: "gal-fauna-3",
    name: { es: "Tucán", en: "Toucan", de: "Tukan", fr: "Toucan" },
    note: {
      es: "Se oye antes de verlo, en lo alto de los árboles de la orilla.",
      en: "You hear it before you see it, high in the trees along the bank.",
      de: "Man hört ihn, bevor man ihn sieht, hoch oben in den Uferbäumen.",
      fr: "On l’entend avant de le voir, en haut des arbres de la rive.",
    },
  },
  {
    id: "guacamayos",
    mediaId: "gal-fauna-1",
    name: { es: "Guacamayos", en: "Macaws", de: "Aras", fr: "Aras" },
    note: {
      es: "Siempre en pareja, cruzando el río a primera hora.",
      en: "Always in pairs, crossing the river first thing in the morning.",
      de: "Immer paarweise, frühmorgens über den Fluss fliegend.",
      fr: "Toujours en couple, traversant le fleuve au petit matin.",
    },
  },
  {
    id: "mono-ardilla",
    mediaId: "story-wildlife",
    name: {
      es: "Mono ardilla",
      en: "Squirrel monkey",
      de: "Totenkopfäffchen",
      fr: "Singe-écureuil",
    },
    note: {
      es: "Van en tropas grandes y ruidosas, saltando de rama en rama.",
      en: "They move in large, noisy troops, leaping from branch to branch.",
      de: "Sie ziehen in großen, lauten Gruppen von Ast zu Ast.",
      fr: "Ils se déplacent en grandes troupes bruyantes, de branche en branche.",
    },
  },
  {
    id: "monos-aulladores",
    mediaId: "gal-fauna-4",
    name: {
      es: "Mono aullador",
      en: "Howler monkey",
      de: "Brüllaffe",
      fr: "Singe hurleur",
    },
    note: {
      es: "Su rugido al amanecer se escucha a kilómetros.",
      en: "Its roar at dawn carries for kilometres.",
      de: "Sein Brüllen im Morgengrauen hört man kilometerweit.",
      fr: "Son rugissement à l’aube porte à des kilomètres.",
    },
  },
  {
    id: "perezoso",
    mediaId: "gal-fauna-6",
    name: { es: "Perezoso", en: "Sloth", de: "Faultier", fr: "Paresseux" },
    note: {
      es: "Quieto en la copa de un árbol; hace falta el ojo del guía.",
      en: "Motionless in a treetop; it takes a guide’s eye to spot one.",
      de: "Reglos in einer Baumkrone; man braucht das Auge des Guides.",
      fr: "Immobile au sommet d’un arbre ; il faut l’œil du guide.",
    },
  },
  {
    id: "caiman",
    mediaId: "gal-fauna-2",
    name: { es: "Caimán", en: "Caiman", de: "Kaiman", fr: "Caïman" },
    note: {
      es: "De noche, en la orilla de la Laguna Grande.",
      en: "At night, along the edge of Laguna Grande.",
      de: "Nachts am Ufer der Laguna Grande.",
      fr: "La nuit, au bord de la Laguna Grande.",
    },
  },
  {
    id: "buhos",
    mediaId: "gal-fauna-5",
    name: { es: "Búhos", en: "Owls", de: "Eulen", fr: "Chouettes" },
    note: {
      es: "Parte de la caminata nocturna, cuando el bosque cambia de turno.",
      en: "Part of the night walk, when the forest changes shift.",
      de: "Teil der Nachtwanderung, wenn der Wald die Schicht wechselt.",
      fr: "Au programme de la marche nocturne, quand la forêt change d’équipe.",
    },
  },
  {
    id: "ranas",
    mediaId: "story-night",
    name: {
      es: "Ranas",
      en: "Frogs",
      de: "Frösche",
      fr: "Grenouilles",
    },
    note: {
      es: "Escondidas en heliconias y hojas: la noche es su momento.",
      en: "Hidden in heliconias and leaves: night is their time.",
      de: "Versteckt in Helikonien und Blättern: Die Nacht gehört ihnen.",
      fr: "Cachées dans les héliconias et les feuilles : la nuit est à elles.",
    },
  },
];

/** Los que se nombran en los itinerarios pero todavía no tienen foto propia. */
export const cuyabenoAlso: Localized[] = [
  { es: "Delfín rosado", en: "Pink river dolphin", de: "Rosa Flussdelfin", fr: "Dauphin rose" },
  { es: "Anaconda", en: "Anaconda", de: "Anakonda", fr: "Anaconda" },
  { es: "Martín pescador", en: "Kingfisher", de: "Eisvogel", fr: "Martin-pêcheur" },
  { es: "Garzas", en: "Herons", de: "Reiher", fr: "Hérons" },
  { es: "Loros y papagayos", en: "Parrots", de: "Papageien", fr: "Perroquets" },
  { es: "Serpientes arbóreas", en: "Tree snakes", de: "Baumschlangen", fr: "Serpents arboricoles" },
  { es: "Mariposas", en: "Butterflies", de: "Schmetterlinge", fr: "Papillons" },
];

export const cuyabenoWhen = {
  title: {
    es: "Cuándo ir",
    en: "When to go",
    de: "Wann reisen",
    fr: "Quand y aller",
  },
  body: {
    es: "Cuyabeno se visita todo el año. Es selva tropical húmeda: llueve entre 3.000 y 4.000 mm al año y la humedad ronda el 85–95 %, así que la lluvia es parte del viaje y el lodge da botas y poncho. El nivel del agua cambia con las estaciones: en los meses de más lluvia el bosque se inunda y la canoa llega más lejos; en los meses secos el agua baja y la Laguna Grande puede quedar más baja de lo normal.",
    en: "Cuyabeno can be visited year-round. It’s tropical rainforest: annual rainfall is 3,000–4,000 mm and humidity sits around 85–95%, so rain is part of the trip and the lodge provides boots and a poncho. The water level changes with the seasons: in the wettest months the forest floods and the canoe reaches further; in the drier months the water drops and Laguna Grande can be lower than usual.",
    de: "Cuyabeno kann man das ganze Jahr besuchen. Es ist tropischer Regenwald: Pro Jahr fallen 3.000–4.000 mm Regen, die Luftfeuchtigkeit liegt bei etwa 85–95 %, Regen gehört also zur Reise, und die Lodge stellt Gummistiefel und Poncho. Der Wasserstand ändert sich mit den Jahreszeiten: In den regenreichsten Monaten wird der Wald überflutet und das Kanu kommt weiter; in den trockeneren Monaten sinkt das Wasser und die Laguna Grande kann niedriger sein als gewöhnlich.",
    fr: "Cuyabeno se visite toute l’année. C’est une forêt tropicale humide : il tombe entre 3 000 et 4 000 mm de pluie par an et l’humidité tourne autour de 85–95 %. La pluie fait donc partie du voyage, et le lodge fournit bottes et poncho. Le niveau de l’eau change avec les saisons : pendant les mois les plus pluvieux, la forêt est inondée et la pirogue va plus loin ; pendant les mois plus secs, l’eau baisse et la Laguna Grande peut être plus basse que d’habitude.",
  },
} as const;

export const cuyabenoCta = {
  title: {
    es: "Conocerla por dentro",
    en: "See it from the inside",
    de: "Es von innen erleben",
    fr: "La découvrir de l’intérieur",
  },
  body: {
    es: "Tres recorridos desde el lodge, de 3, 4 y 5 días. Todos entran por el río, todos pasan por la Laguna Grande.",
    en: "Three routes from the lodge, of 3, 4 and 5 days. All of them enter by river, all of them pass through Laguna Grande.",
    de: "Drei Routen ab der Lodge, mit 3, 4 und 5 Tagen. Alle beginnen auf dem Fluss, alle führen zur Laguna Grande.",
    fr: "Trois circuits au départ du lodge, de 3, 4 et 5 jours. Tous entrent par le fleuve, tous passent par la Laguna Grande.",
  },
  link: {
    es: "Ver los tours",
    en: "See the tours",
    de: "Die Touren ansehen",
    fr: "Voir les circuits",
  },
} as const;

/** El bloque de Cuyabeno en la portada: un adelanto que lleva a `/cuyabeno`. */
export const cuyabenoTeaser = {
  body: {
    es: "Una reserva de selva inundada al noreste de Ecuador: ríos de aguas negras, lagunas unidas por el río, bosque primario y animales que se ven desde la canoa. Es el lugar donde está el lodge.",
    en: "A flooded rainforest reserve in northeastern Ecuador: blackwater rivers, lagoons linked by the river, primary forest and wildlife you can see from the canoe. It’s where the lodge stands.",
    de: "Ein überfluteter Regenwald im Nordosten Ecuadors: Schwarzwasserflüsse, durch den Fluss verbundene Lagunen, Primärwald und Tiere, die man vom Kanu aus sieht. Hier steht die Lodge.",
    fr: "Une réserve de forêt inondée au nord-est de l’Équateur : rivières d’eaux noires, lagunes reliées par le fleuve, forêt primaire et animaux visibles depuis la pirogue. C’est là que se trouve le lodge.",
  },
  cta: {
    es: "Conocer Cuyabeno",
    en: "Discover Cuyabeno",
    de: "Cuyabeno entdecken",
    fr: "Découvrir Cuyabeno",
  },
} as const;
