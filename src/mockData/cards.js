import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});

const cards = [
  {
    title: "Javascript ⚡️",
    description: lorem.generateSentences(5),
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
    imageRatio: 1
  },
  {
    title: "HTML 👷",
    description: lorem.generateSentences(5),
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
    imageRatio: 1
  },
  {
    title: "CSS 👩‍🎨",
    description: lorem.generateSentences(5),
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
    imageRatio: 1
  },
  {
    title: "React ⚛️",
    description: lorem.generateSentences(5),
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    imageRatio: 730 / 1030
  },
  {
    title: "Node 🛠️",
    description: lorem.generateSentences(5),
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
    imageRatio: 730 / 1030
  }
];

export default cards;
