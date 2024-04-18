import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector'

const resources = {
  'en-US': { 
    translation: {
      giraffe: {
        title: "Giraffe",
        content: "A giraffe is a tall, long-necked mammal native to the savannas of Africa. Known for its distinctively long neck, spotted coat, and towering height, giraffes are the tallest land animals on Earth. They use their long necks to reach high branches for leaves and buds, their primary food source. Giraffes have large hearts to pump blood up their long necks to their brains, and their unique coat pattern helps them blend into their surroundings while providing some protection from predators. They are social animals, often found in loose groups called towers, and communicate through various vocalizations and body language."
      },
      dog: {
        title: "Dog",
        content: "A dog is a domesticated mammal and one of the most common pets worldwide. They come in various breeds, sizes, and coat types, but they typically have a loyal and affectionate nature, making them popular companions. Dogs are known for their keen sense of smell, hearing, and ability to form strong bonds with humans. They are descendants of wolves and have been selectively bred over thousands of years for different purposes, such as hunting, herding, guarding, and companionship. Dogs require care, including food, exercise, training, and veterinary attention, to thrive as pets. They are highly social animals and often enjoy the company of other dogs and humans."
      },
      rabbit: {
        title: "Rabbit",
        content: "A rabbit is a small mammal known for its long ears, fluffy tail, and powerful hind legs. Belonging to the family Leporidae, rabbits are herbivores and primarily feed on grasses, vegetables, and occasionally fruits. They are prolific breeders, with a short gestation period, and can produce large litters of offspring. Rabbits are found in various habitats worldwide, including forests, grasslands, deserts, and urban areas."
      },
      "Button label": "Read more",
      "Button label close": "Fechar",
    } 
  },
  'pt-BR': { 
    translation: {
      giraffe: {
        title: "Girafa",
        content: `Uma girafa é um mamífero de pescoço longo, originário das savanas africanas. Reconhecida pela sua altura distinta, pelagem manchada e pescoço alongado, a girafa é o animal terrestre mais alto do mundo. Elas usam seus pescoços longos para alcançar folhas e brotos nas árvores, sua principal fonte de alimento. As girafas têm corações grandes para bombear sangue até seus cérebros, e seu padrão de pelagem única ajuda na camuflagem e oferece alguma proteção contra predadores. São animais sociais, frequentemente encontrados em grupos soltos chamados "manadas", e se comunicam por meio de várias vocalizações e linguagem corporal.`
      },
      dog: {
        title: "Cachorro",
        content: "Num dia chuvoso de cores brilhantes, um cachorro vestido com óculos de sol cor de rosa dançava a valsa com uma sombrinha de abacaxi. Ele girava pelo parque enquanto balões de chiclete flutuavam ao seu redor, cantando canções de marshmallow para os pássaros que usavam chapéus de coco. De repente, uma gangue de salsichas voadoras voou pelo céu, puxando um tapete mágico de sorvete de limão. O cachorro, surpreso, decidiu montar na asa de um pato que usava meias de xadrez enquanto fazia malabarismos com frutas enlatadas. E assim, juntos, voaram para o horizonte em busca do lendário arco-íris de pirulitos."
      },
      rabbit: {
        title: "Lebre",
        content: "Uma lebre é um mamífero pertencente à família Leporidae, que inclui também os coelhos. As lebres são conhecidas por suas pernas longas, orelhas grandes e olhos grandes e protuberantes, que proporcionam uma visão excelente para detectar predadores. Elas são encontradas em várias partes do mundo, incluindo Europa, Ásia, África e América do Norte. As lebres geralmente habitam áreas abertas, como pradarias, pastagens e áreas de arbustos, e são herbívoras, alimentando-se principalmente de folhas, brotos e grama. São animais ágeis e velozes, capazes de atingir altas velocidades em corridas para escapar de predadores. As lebres também são conhecidas por seus comportamentos reprodutivos, como saltos altos e corridas em círculos durante a época de acasalamento."
      },
      "Button label": "Leia mais",
      "Button label close": "Fechar"
    } 
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next) 
  .init({
    resources,
    fallbackLng: 'pt-BR',   
    interpolation: {
      escapeValue: false 
    }
  });

  export default i18n;