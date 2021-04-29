console.log("Destructuring");

const Book = {
  title: "Ego is the Enemy",
  author: "Ryan Holiday",
  publisher: {
    name: "Penguin",
  },
};

const { name: publisherName = "Self-Published" } = Book.publisher;
console.log(publisherName);

const item = ["Coffee(hot)", "$2.00", "$2.50", "$2.75"];
const [name, , medium] = item;
console.log(`A Medium ${name} costs ${medium}`);
