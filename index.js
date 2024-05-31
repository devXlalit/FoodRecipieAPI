import express from "express";
const app = express();
import { foodRecipies } from "./data/foodRecipies.js";
const PORT = 8000;

// Get all recipies
app.get("/api/v1/", (req, res) => {
  res.send(foodRecipies);
});

// Get recipies by id
app.get("/api/v1/:id(\\d+)", (req, res) => {
  const item = foodRecipies.find((i) => i.id === parseInt(req.params.id));
  if (!item) {
    return res.status(404).json("Not found");
  }
  res.json(item);
});

// Get recipies by dishname(recipe name)
app.get("/api/v1/dishname/:dishname", (req, res) => {
  const dishname = req.params.dishname;
  const item = foodRecipies.filter(
    (i) => i.dishname.toLowerCase() === dishname.toLowerCase()
  );
  if (item.length === 0) {
    return res.status(404).json("Not found");
  }
  res.json(item);
});

//Get recipie by foodType(veg | nonveg)
app.get("/api/v1/foodtype/:foodtype", (req, res) => {
  const foodtype = req.params.foodtype;
  const item = foodRecipies.filter(
    (i) => i.foodType.toLowerCase() === foodtype.toLowerCase()
  );
  if (item.length === 0) {
    return res.status(404).json("Not found");
  }
  res.json(item);
});
// Get recipie by flovourType(sweet, bitter, salty , spicy)
app.get("/api/v1/flavourtype/:flavourtype", (req, res) => {
  const flavourtype = req.params.flavourtype;
  const item = foodRecipies.filter(
    (i) => i.flavour.toLowerCase() === flavourtype.toLowerCase()
  );
  if (item.length === 0) {
    return res.status(404).json("Not found");
  }
  res.json(item);
});

// Defalut server port
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
