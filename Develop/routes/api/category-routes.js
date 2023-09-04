const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {// find all categories
  try {
    const categories = await Category.findAll({
      include: Product, // Include associated Products  // be sure to include its associated Products
    });
    res.json(categories);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});


 

// find one category by its `id` value
router.get('/:id', async (req, res) => { 
  
  const id = req.params.id
  
  try{
    const categories = await Category.findByPk(id)
   res.json(categories)
// include: Product, 
  }catch (err) {
  console.error(err);
  res.status(500).json(err);
}
  
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;


