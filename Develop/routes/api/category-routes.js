const router = require('express').Router();
const { Category, Product } = require('../../../models');

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
    const categories = await Category.findByPk(id, {

    //  include: Product, 
    })

    res.json(categories)

  }catch (err) {
  console.error(err);
  res.status(500).json(err);
}
  
});

router.post('/', async (req, res) => {

  try {
    const categories = await Category.create(req.body)
    res.json(categories);

  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});
  // create a new category


  router.put('/:id', async (req, res) => {
    const categoryId = req.params.id;
    
    try {
      // this checks if the category exists
      const category = await Category.findByPk(categoryId);
  
      if (!category) {
        return res.status(404).json({ error: 'Category not found' });
      }
  
      // Update the category with the new data from req.body
      const updatedCategory = await category.update(req.body);
  
      res.json(updatedCategory);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  });
  
router.delete('/:id', async (req, res) => {
const id = req.params.id
  try {
    const categories = await Category.destroy({
      where: {
        id: id
      }
    })

    res.json(categories);

  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
  // delete a category by its `id` value
});

module.exports = router;


