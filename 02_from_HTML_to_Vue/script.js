const app = Vue.createApp({
  data() {
    return {
      name: "John Doe",
      currDateAndTime: new Date().toLocaleString("en-GB"),
    };
  },
}).mount("#card");
