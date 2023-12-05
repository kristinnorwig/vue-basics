Vue.createApp({
  data() {
    return {
      fruitBasket: [
        "🍏 Apple",
        "🍌 Banana",
        "🍉 Melon",
        "🫐 Blueberry",
        "🍓 Strawberry",
        "🍍 Ananas",
        "🥭 Mango",
      ],
    };
  },
  methods: {
    removeFruit(fruit) {
      this.fruitBasket = this.fruitBasket.filter(
        (currFruit) => currFruit !== fruit
      );
    },
  },
}).mount("#app");
