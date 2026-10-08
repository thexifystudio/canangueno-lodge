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
 *  ⚠️ Datos generales de la reserva (año de creación, superficie y número de
 *  lagunas) tomados de fuentes públicas: revisarlos con el cliente
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
export const cuyabenoFacts: { value: Localized; label: Localized }[] = [
  {
    value: { es: "1979", en: "1979", de: "1979", fr: "1979" },
    label: {
      es: "año en que se creó la reserva",
      en: "year the reserve was created",
      de: "Gründungsjahr des Reservats",
      fr: "année de création de la réserve",
    },
  },
  {
    value: { es: "603.380 ha", en: "603.380 ha", de: "603.380 ha", fr: "603.380 ha" },
    label: {
      es: "de selva protegida",
      en: "of protected rainforest",
      de: "geschützter Regenwald",
      fr: "de forêt protégée",
    },
  },
  {
    value: { es: "14", en: "14", de: "14", fr: "14" },
    label: {
      es: "lagunas unidas por ríos",
      en: "lagoons linked by rivers",
      de: "durch Flüsse verbundene Lagunen",
      fr: "lagunes reliées par des rivières",
    },
  },
  {
    value: { es: "Miles", en: "Thousands", de: "Tausende", fr: "Des milliers" },
    label: {
      es: "de especies de plantas y animales",
      en: "of plant and animal species",
      de: "von Pflanzen- und Tierarten",
      fr: "d’espèces de plantes et d’animaux",
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
    mediaId: "cuyabeno-forest",
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
  {
    id: "hoatzin",
    mediaId: "animal-hoatzin",
    name: { es: "Hoatzín", en: "Hoatzin", de: "Hoatzin", fr: "Hoazin" },
    note: {
      es: "Anida en las ramas sobre el agua, en grupos ruidosos.",
      en: "It nests in branches over the water, in noisy groups.",
      de: "Er nistet in lauten Gruppen auf Ästen über dem Wasser.",
      fr: "Il niche sur les branches au-dessus de l’eau, en groupes bruyants.",
    },
  },
  {
    id: "tortugas",
    mediaId: "animal-turtles",
    name: { es: "Tortugas de río", en: "River turtles", de: "Flussschildkröten", fr: "Tortues de rivière" },
    note: {
      es: "Toman el sol en los troncos caídos de la orilla.",
      en: "They sunbathe on fallen logs along the bank.",
      de: "Sie sonnen sich auf umgestürzten Stämmen am Ufer.",
      fr: "Elles prennent le soleil sur les troncs tombés de la rive.",
    },
  },
  {
    id: "capibara",
    mediaId: "animal-capybara",
    name: { es: "Capibara", en: "Capybara", de: "Wasserschwein", fr: "Capybara" },
    note: {
      es: "El roedor más grande del mundo, siempre cerca del agua.",
      en: "The world’s largest rodent, never far from the water.",
      de: "Das größte Nagetier der Welt, immer in Wassernähe.",
      fr: "Le plus grand rongeur du monde, toujours près de l’eau.",
    },
  },
  {
    id: "garza",
    mediaId: "animal-heron",
    name: { es: "Garza", en: "Heron", de: "Reiher", fr: "Héron" },
    note: {
      es: "Quieta en la orilla, esperando el momento de pescar.",
      en: "Still on the bank, waiting for the moment to fish.",
      de: "Reglos am Ufer, wartet sie auf den Moment zum Fischen.",
      fr: "Immobile sur la rive, il attend le moment de pêcher.",
    },
  },
  {
    id: "pirana",
    mediaId: "animal-piranha",
    name: { es: "Piraña", en: "Piranha", de: "Piranha", fr: "Piranha" },
    note: {
      es: "Vive en los ríos y lagunas; de cerca, sus dientes impresionan.",
      en: "It lives in the rivers and lagoons; up close, its teeth are impressive.",
      de: "Sie lebt in Flüssen und Lagunen; aus der Nähe beeindrucken ihre Zähne.",
      fr: "Il vit dans les rivières et les lagunes ; de près, ses dents impressionnent.",
    },
  },
  {
    id: "saki",
    mediaId: "animal-saki",
    name: { es: "Mono saki", en: "Saki monkey", de: "Saki-Affe", fr: "Singe saki" },
    note: {
      es: "Tímido y de pelo largo, se mueve alto entre los árboles.",
      en: "Shy and long-haired, it moves high up in the trees.",
      de: "Scheu und langhaarig, bewegt er sich hoch oben in den Bäumen.",
      fr: "Timide et à poils longs, il se déplace en haut des arbres.",
    },
  },
  {
    id: "rana-venenosa",
    mediaId: "animal-dartfrog",
    name: { es: "Rana venenosa", en: "Poison dart frog", de: "Pfeilgiftfrosch", fr: "Dendrobate" },
    note: {
      es: "Pequeña y de colores vivos: es su forma de avisar que es tóxica.",
      en: "Small and brightly coloured: its way of warning that it’s toxic.",
      de: "Klein und knallbunt: So warnt er, dass er giftig ist.",
      fr: "Petite et très colorée : sa façon d’avertir qu’elle est toxique.",
    },
  },
  {
    id: "mariposas",
    mediaId: "animal-butterfly",
    name: { es: "Mariposas", en: "Butterflies", de: "Schmetterlinge", fr: "Papillons" },
    note: {
      es: "Aparecen en los claros y en la arena a la orilla del río.",
      en: "They appear in clearings and on the sand along the river.",
      de: "Sie zeigen sich auf Lichtungen und im Sand am Flussufer.",
      fr: "Ils apparaissent dans les clairières et sur le sable au bord du fleuve.",
    },
  },
];

/** Los que se nombran en los itinerarios pero todavía no tienen foto propia. */
export const cuyabenoAlso: Localized[] = [
  { es: "Delfín rosado", en: "Pink river dolphin", de: "Rosa Flussdelfin", fr: "Dauphin rose" },
  { es: "Anaconda", en: "Anaconda", de: "Anakonda", fr: "Anaconda" },
  { es: "Martín pescador", en: "Kingfisher", de: "Eisvogel", fr: "Martin-pêcheur" },
  { es: "Loros y papagayos", en: "Parrots", de: "Papageien", fr: "Perroquets" },
  { es: "Serpientes arbóreas", en: "Tree snakes", de: "Baumschlangen", fr: "Serpents arboricoles" },
];

/**
 * Cuándo ir. Las temporadas y el clima salen de las FAQ de
 * cananguenolodge.com ("¿Cómo es el clima en la reserva Cuyabeno?").
 */
export const cuyabenoWhen = {
  eyebrow: {
    es: "Clima y temporadas",
    en: "Weather and seasons",
    de: "Klima und Jahreszeiten",
    fr: "Climat et saisons",
  },
  title: {
    es: "Cuándo ir",
    en: "When to go",
    de: "Wann reisen",
    fr: "Quand y aller",
  },
  body: {
    es: "Cuyabeno se visita todo el año. Es selva tropical: la lluvia es parte del viaje y el lodge te da botas y poncho. Lo que cambia con los meses es el agua.",
    en: "Cuyabeno can be visited all year round. It’s rainforest: rain is part of the trip, and the lodge provides boots and a poncho. What changes through the year is the water.",
    de: "Cuyabeno kann man das ganze Jahr besuchen. Es ist Regenwald: Regen gehört zur Reise, und die Lodge stellt Stiefel und Poncho. Was sich mit den Monaten ändert, ist das Wasser.",
    fr: "Cuyabeno se visite toute l’année. C’est la forêt tropicale : la pluie fait partie du voyage, et le lodge fournit bottes et poncho. Ce qui change au fil des mois, c’est l’eau.",
  },
  seasons: [
    {
      months: { es: "Diciembre – marzo", en: "December – March", de: "Dezember – März", fr: "Décembre – mars" },
      name: { es: "Temporada seca", en: "Dry season", de: "Trockenzeit", fr: "Saison sèche" },
      text: {
        es: "Llueve menos y el agua baja. La Laguna Grande puede quedar más baja de lo normal.",
        en: "Less rain and lower water. Laguna Grande can be lower than usual.",
        de: "Weniger Regen, niedrigeres Wasser. Die Laguna Grande kann niedriger sein als sonst.",
        fr: "Moins de pluie, l’eau baisse. La Laguna Grande peut être plus basse que d’habitude.",
      },
    },
    {
      months: { es: "Abril – julio", en: "April – July", de: "April – Juli", fr: "Avril – juillet" },
      name: { es: "Temporada de lluvias", en: "Rainy season", de: "Regenzeit", fr: "Saison des pluies" },
      text: {
        es: "Los ríos crecen y el bosque se inunda: la canoa llega más lejos, entre los árboles.",
        en: "The rivers rise and the forest floods: the canoe reaches further, in among the trees.",
        de: "Die Flüsse steigen und der Wald wird überflutet: Das Kanu kommt weiter, mitten zwischen die Bäume.",
        fr: "Les rivières montent et la forêt est inondée : la pirogue va plus loin, entre les arbres.",
      },
    },
    {
      months: { es: "Agosto – noviembre", en: "August – November", de: "August – November", fr: "Août – novembre" },
      name: { es: "Lluvia moderada", en: "Moderate rain", de: "Mäßiger Regen", fr: "Pluie modérée" },
      text: {
        es: "Un punto medio: agua suficiente para navegar y días más estables.",
        en: "A middle ground: enough water to navigate and steadier days.",
        de: "Ein Mittelweg: genug Wasser zum Befahren und beständigere Tage.",
        fr: "Un entre-deux : assez d’eau pour naviguer et des journées plus stables.",
      },
    },
  ],
  climate: [
    { value: "25 °C", label: { es: "temperatura media", en: "average temperature", de: "Durchschnittstemperatur", fr: "température moyenne" } },
    { value: "85–95 %", label: { es: "humedad", en: "humidity", de: "Luftfeuchtigkeit", fr: "humidité" } },
    { value: "3.000–4.000 mm", label: { es: "de lluvia al año", en: "of rain a year", de: "Regen pro Jahr", fr: "de pluie par an" } },
  ],
} as const;

/** La sección final: los tres tours, para pasar de mirar a reservar. */
export const cuyabenoCta = {
  eyebrow: {
    es: "Nuestros tours",
    en: "Our tours",
    de: "Unsere Touren",
    fr: "Nos circuits",
  },
  title: {
    es: "Vive Cuyabeno con nosotros",
    en: "Experience Cuyabeno with us",
    de: "Erlebe Cuyabeno mit uns",
    fr: "Vivez Cuyabeno avec nous",
  },
  body: {
    es: "Tres recorridos desde el lodge, de 3, 4 y 5 días. Todos entran por el río, todos pasan por la Laguna Grande y todos van con guías bilingües.",
    en: "Three routes from the lodge, of 3, 4 and 5 days. All of them enter by river, all of them visit Laguna Grande, and all go with bilingual guides.",
    de: "Drei Routen ab der Lodge, mit 3, 4 und 5 Tagen. Alle beginnen auf dem Fluss, alle führen zur Laguna Grande und alle mit zweisprachigen Guides.",
    fr: "Trois circuits au départ du lodge, de 3, 4 et 5 jours. Tous entrent par le fleuve, tous passent par la Laguna Grande et tous avec des guides bilingues.",
  },
  link: {
    es: "Ver todos los tours",
    en: "See all the tours",
    de: "Alle Touren ansehen",
    fr: "Voir tous les circuits",
  },
} as const;

/**
 * Los animales del adelanto de la portada. Distintos de los de `/cuyabeno`:
 * la página completa tiene que mostrar más, no repetir los mismos cuatro.
 */
export const cuyabenoTeaserAnimals: { id: string; name: Localized; mediaId: MediaId }[] = [
  { id: "hoatzin", mediaId: "animal-hoatzin", name: { es: "Hoatzín", en: "Hoatzin", de: "Hoatzin", fr: "Hoazin" } },
  { id: "tortugas", mediaId: "animal-turtles", name: { es: "Tortugas de río", en: "River turtles", de: "Flussschildkröten", fr: "Tortues de rivière" } },
  { id: "capibara", mediaId: "animal-capybara", name: { es: "Capibara", en: "Capybara", de: "Wasserschwein", fr: "Capybara" } },
  { id: "garza", mediaId: "animal-heron", name: { es: "Garza", en: "Heron", de: "Reiher", fr: "Héron" } },
];

/** El bloque de Cuyabeno en la portada: un adelanto que lleva a `/cuyabeno`. */
export const cuyabenoTeaser = {
  body: {
    es: "Ríos oscuros que reflejan el cielo como un espejo, lagunas escondidas en medio de la selva y un bosque que nunca se taló. En Cuyabeno los animales viven a la orilla del agua, y la mejor forma de verlos es en silencio, desde la canoa.",
    en: "Dark rivers that mirror the sky, lagoons hidden in the middle of the forest and woodland that has never been logged. In Cuyabeno, wildlife lives along the water’s edge, and the best way to see it is quietly, from the canoe.",
    de: "Dunkle Flüsse, die den Himmel spiegeln, Lagunen mitten im Regenwald und ein Wald, der nie abgeholzt wurde. In Cuyabeno leben die Tiere am Ufer, und am besten sieht man sie leise, vom Kanu aus.",
    fr: "Des rivières sombres qui reflètent le ciel comme un miroir, des lagunes cachées au milieu de la forêt et des bois jamais exploités. À Cuyabeno, les animaux vivent au bord de l’eau, et le meilleur moyen de les voir, c’est en silence, depuis la pirogue.",
  },
  cta: {
    es: "Conocer Cuyabeno",
    en: "Discover Cuyabeno",
    de: "Cuyabeno entdecken",
    fr: "Découvrir Cuyabeno",
  },
  /** Los dos enlaces debajo de las fotos de animales. */
  allSpecies: {
    es: "Ver todas las especies",
    en: "See all the species",
    de: "Alle Arten ansehen",
    fr: "Voir toutes les espèces",
  },
  allPhotos: {
    es: "Ver todas las fotos de Cuyabeno",
    en: "See all the photos of Cuyabeno",
    de: "Alle Fotos von Cuyabeno ansehen",
    fr: "Voir toutes les photos de Cuyabeno",
  },
} as const;
