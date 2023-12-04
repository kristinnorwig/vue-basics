Vue.createApp({
  data() {
    return {
      users: [],
      count: 0,
    };
  },

  methods: {
    getContact() {
      fetch("https://dummy-apis.netlify.app/api/contact-suggestions?count=8")
        .then((response) => response.json())
        .then((jsonData) => {
          console.log(jsonData);
          console.log(jsonData);
          this.users = jsonData.map((contact) => {
            contact.connectionStatus = "Connect";
            return contact;
          });
        });
    },

    getNewSuggestion() {
      return fetch(
        "https://dummy-apis.netlify.app/api/contact-suggestions?count=1"
      )
        .then((response) => response.json())
        .then((jsonData) => {
          const newContact = jsonData[0];
          newContact.connectionStatus = "Connect";
          this.users.push(newContact);
          // innerHTML = "";
          return newContact;
        });
    },

    removeContact(contact) {
      this.users = this.users.filter((c) => c !== contact);
      this.getNewSuggestion().then((newContact) => {
        this.users.push(newContact);
      });
    },

    toggleConnectStatus(contact) {
      if (contact.connectionStatus === "Connect") {
        contact.connectionStatus = "Pending";
        this.count += 1;
      } else if (contact.connectionStatus === "Pending") {
        contact.connectionStatus = "Connect";
        this.count -= 1;
      }
    },
  },
  created() {
    this.getContact();
  },
}).mount("#app");
