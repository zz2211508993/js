const { HYEventStore } = require("hy-event-store");
const axios = require("axios");
const eventStore = new HYEventStore({
  state: {
    name: "chen",
    age: 18,
    banners: [],
    recommends: [],
  },
  actions: {
    getHomeMulidata(ctx, payload) {
      axios.get("http://123.207.32.32:8000/home/multidata").then((res) => {
        const banner = res.data.data.banner;
        const recommend = res.data.data.recommend;
        // 赋值
        ctx.banners = banner;
        ctx.recommends = recommend;
      });
      console.log(payload);
    },
  },
});

eventStore.onState("name", (res) => {
  console.log(res);
});

eventStore.onState("age", (res) => {
  console.log(res);
});
eventStore.onState("banners", (res) => {
  console.log(res);
});

eventStore.onState("recommends", (res) => {
  console.log(res);
});

setTimeout(() => {
  eventStore.setState("name", "ccc");
  eventStore.setState("age", 111);
}, 1000);

eventStore.dispatch("getHomeMulidata", 12123);
