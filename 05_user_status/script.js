Vue.createApp({
  data() {
    return {
      state: [
        {
          username: "David",
          status: "online",
          lastActivity: 10,
        },
        {
          username: "Lucy",
          status: "offline",
          lastActivity: 22,
        },
        {
          username: "Bob",
          status: "online",
          lastActivity: 104,
        },
        {
          username: "mimi",
          status: "online",
          lastActivity: 2,
        },
        {
          username: "andreas",
          status: "offline",
          lastActivity: 200,
        },
      ],
    };
  },
  methods: {
    renderLastAct(user) {
      if (user.status === "online" && user.lastActivity <= 10) {
        return "bg-green";
      } else if (user.status === "online" && user.lastActivity > 10) {
        return "bg-red";
      } else if (user.status === "offline") {
        return "bg-grey";
      }
    },
  },
}).mount("#app");

/*
function whosOnline(friends) {
  const status = {};

  for (let i = 0; i < friends.length; i++) {
    const currentUser = friends[i];

    // ist die Person offline?
    if (currentUser.status === "offline") {
      if (status.offline === undefined) {
        status.offline = [currentUser.username]; // Array für User mit status offline
      } else {
        status.offline.push(currentUser.username);
      }
      // ist die person online?
    } else if (
      currentUser.status === "online" &&
      currentUser.lastActivity <= 10
    ) {
      if (status.online === undefined) {
        status.online = [currentUser.username];
      } else {
        status.online.push(currentUser.username);
      }
    }

    //ist der User away? Aktivity größer als 10
    else if (currentUser.status === "online" && currentUser.lastActivity > 10) {
      if (status.away === undefined) {
        status.away = [currentUser.username];
      } else {
        status.away.push(currentUser.username);
      }
    }
  }

  return status;
} */
