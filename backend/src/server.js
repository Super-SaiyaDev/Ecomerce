const app = require(`./app`);


app.listen(app.get("port"), () => {
  console.log(`We're at the port ${app.get("port")}`);
});
