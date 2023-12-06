Vue.createApp({
  data() {
    return {
      darkMode: false,
    };
  },
  methods: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode;

      if (this.darkMode) {
        document.body.classList.add("body-dark");
        // return "body-dark", "button-dark"
      } else {
        document.body.classList.remove("body-dark");
      }

      if (document.title === "Good Morning") {
        document.title = "Good Night";
      } else {
        document.title = "Good Morning";
      }
    },
  },
}).mount("#app");

/* 
 let darkMode = false; 
const btn = document.querySelector("button");
btn.addEventListener("click", function (event) {
  
  darkMode = !darkMode; 
  if (darkMode) {
    document.body.classList.add("body-dark");
    btn.classList.add("button-dark");
    
  } else {
    document.body.classList.remove("body-dark");
    btn.classList.remove("button-dark");
  }

  if (document.title === "Good Morning") {
    document.title = "Good Night";
  } else {
    document.title = "Good Morning";
  }
}); */
