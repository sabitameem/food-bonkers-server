const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const chefData = require('./data/chefData.json')
app.use(cors());
app.get('/', (req, res) =>{
    res.send('Dragon is running')
});


app.get('/chefData', (req, res)=>{
    res.send(chefData)
})

// app.get('/chefData/:id/recipes', (req, res) => {
//     const { id } = req.params;
//     const chef = chefData.find(chef => chef.id == id);
  
//     if (!chef) {
//       return res.status(404).json({ message: `Chef with ID ${id} not found` });
//     }
  
//     const recipes = chef.recipes;
//     res.json(recipes);
//   });
  app.get('/chefData/:id/recipes', (req,res)=>{
    const { id } = req.params;
    const chef = chefData.find(chef => chef.id == id);
    if(!chef){
        return res.status(404).json({message: `Chef with ID ${id} not found`});
    }

    const recipes = chef.recipes;
    res.json(recipes);
  })
//   app.get('/chefData/:id/recipes', (req, res) => {
//     const chefId = req.params.id;
//     const chef = chefData.find(chef => chef.id === chefId);
//     const chefRecipes = recipes.filter(recipe => recipe.chef_id === chefId);
//     const chefDataWithRecipes = { chef, recipes: chefRecipes };
//     res.send(chefDataWithRecipes);
//   });


app.listen(port, () => {
    console.log(`Dragon API is running on port: ${port}`)
})