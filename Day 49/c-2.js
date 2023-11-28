let express = require("express");
let app = express();
app.get("/blog/:id", function (req, res) {
  console.log(req.params);
  res.send(`
 <div style="text-align: center">
 <h1>Blog post ${req.params.id}</h1>
 <h2>Blog post ${req.params.id} subtitle</h2>
 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, sapien vitae vestibulum tristique, mauris dui efficitur tortor, tempus viverra massa lacus nec sem. Proin risus felis, porta vel lorem vitae, lobortis pulvinar sapien. Integer condimentum libero in nibh ullamcorper pharetra. Integer faucibus rutrum eros, ac tincidunt felis consectetur sollicitudin. Nunc sed ultrices ex, in gravida diam. </p> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, sapien vitae vestibulum tristique, mauris dui efficitur tortor, tempus viverra massa lacus nec sem. Proin risus felis, porta vel lorem vitae, lobortis pulvinar sapien. Integer condimentum libero in nibh ullamcorper pharetra. Integer faucibus rutrum eros, ac tincidunt felis consectetur sollicitudin. Nunc sed ultrices ex, in gravida diam. </p> </div> 
 `);
});
app.listen(5000, () => {
  console.log("Server has started!");
});
