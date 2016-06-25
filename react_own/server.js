express = require("express")
require("babel/register")
//Include react transpiler
react = require("express-react-views")
server = express()


server.engine("jsx", react.createEngine())
server.set("view engine", "jsx")



server.get("/", (req, resp) => {

	resp.status(200)
	resp.render("index")

})


server.listen(3000)