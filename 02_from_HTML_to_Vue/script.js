const app = Vue.createApp({
  data() {
    return {
      name: "John Doe",
      currDateAndTime: new Date().toLocaleString("en-GB"), // kann auch direkt in Mustache Tags in HTML gegeben werden
    };
  },
}).mount("#card");

// In JavaScript wird das Schlüsselwort new verwendet,
// um eine Instanz eines Objekts zu erstellen.
// => neue Instanz des "Date"-Objekts wird erstellt
