import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import cors from "cors";

const app= express();
const port= 3000;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Defining article router
const articleRouter = express.Router();

// Article route handler
articleRouter.get('/:id', async (req, res) => {
  const articleID = req.params.id;
  try {
    const newsAPI = await axios.get(`https://raddy.dev/wp-json/wp/v2/posts/${articleID}`);
    res.render('newsSingle.ejs', { article: newsAPI.data });
  } catch (error) {
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log('Error', error.message);
    }
  }
});

// Mount the article router
app.use('/article', articleRouter);

//Static files
app.use(express.static("public"));

//Templating Engine
app.set("view engine", "ejs");


app.get("", async(req,res)=>{
    try{
        const newsAPI=await axios.get(`https://raddy.dev/wp-json/wp/v2/posts/`);
        res.render("index.ejs", { articles: newsAPI.data});

    } catch(error){
        if(error.response){
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else if(error.request){
            console.log(error.request);
        } else{
            console.log("Error", err.message);
        }
    }
});


//single news page
app.get("/:id", async(req,res)=>{
    let articleID= req.params.id;
    try{
        const newsAPI=await axios.get(`https://raddy.dev/wp-json/wp/v2/posts/${articleID}`);
        res.render("newsSingle.ejs", { article: newsAPI.data});

    } catch(error){
        if(error.response){
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else if(error.request){
            console.log(error.request);
        } else{
            console.log("Error", err.message);
        }
    }
});


//search news
app.post("", async(req,res)=>{
    let search= req.body.search;
    try{
        const newsAPI=await axios.get(`https://raddy.dev/wp-json/wp/v2/posts?search=${search}`);
        res.render("index.ejs", { articles: newsAPI.data});

    } catch(error){
        if(error.response){
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else if(error.request){
            console.log(error.request);
        } else{
            console.log("Error", err.message);
        }
    }
});



//Running on port 3000
app.listen(port, ()=>{
  console.log(`Server is running on port ${port}`);
});