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
            // mit map bekommt jeder user einen connectionStatus mit "Connect"
            contact.connectionStatus = "Connect";
            return contact;
          });
        });
    },

    getOneContact() {
      return fetch(
        "https://dummy-apis.netlify.app/api/contact-suggestions?count=1"
      )
        .then((response) => response.json())
        .then((jsonData) => {
          const newContact = jsonData[0];
          newContact.connectionStatus = "Connect";
          this.users.push(newContact);
          return newContact;
        });
    },

    removeContact(contact) {
      this.users = this.users.filter((currContact) => currContact !== contact); //  filtert den user aus this.users, der gleich dem übergebenen contact ist => neues Array dass den USer nicht enthält
      this.getOneContact();
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
