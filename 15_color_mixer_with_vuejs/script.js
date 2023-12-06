Vue.createApp({
  data() {
    return {
      red: 30,
      green: 144,
      blue: 255,
    };
  },
  methods: {
    giveRndmColor() {
      this.red = this.getRandomHexValue();
      this.green = this.getRandomHexValue();
      this.blue = this.getRandomHexValue();
    },

    getRandomHexValue() {
      return Math.floor(Math.random() * 256); // Zufällige Zahl zwischen 0 und 255
    },

    /*changeBgColor() {
      const redInput = document.getElementById("red").value;
      const blueInput = document.getElementById("blue").value;
      const greenInput = document.getElementById("green").value;
      bodyEl.style.backgroundColor =
        "rgb(" + redInput + ", " + greenInput + ", " + blueInput + ")"; //setzen des styles auf den Background
      valueHex(redInput, blueInput, greenInput);
    },

    valueHex(r, g, b) {
      r = Number(r).toString(16); // 16 bedeutet hier dass Zahl in Hexadezimalsystem umgewandelt wird (Zeichen 0-9 und den Buchstaben A-F)
      g = Number(g).toString(16);
      b = Number(b).toString(16);

      hexPEl.innerText = convertToHex(r) + convertToHex(g) + convertToHex(b);
    }, */

    convertToHex(value) {
      if (value < 16) {
        return "0" + value.toString(16);
      } else {
        return value.toString(16);
      }
    },
  },
  computed: {
    hexCode() {
      return (
        this.convertToHex(this.red) +
        this.convertToHex(this.green) +
        this.convertToHex(this.blue)
      );
    },
  },
}).mount("#app");
