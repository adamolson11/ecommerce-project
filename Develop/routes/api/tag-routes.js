const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// get all tags
router.get('/', async (req, res) => {
  try {
    const tags = await Tag.findAll({
      include: [
        {
          model: Product, // Include associated Products
          through: ProductTag, // Use the ProductTag model to establish the association
          as: 'products', // Name the association as 'products'
        },
      ],
    });

    res.json(tags);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// get one tag by its `id`
router.get('/:id', async (req, res) => {
  const tagId = req.params.id;
  
  try {
    const tag = await Tag.findByPk(tagId, {
      include: [
        {
          model: Product,
          through: ProductTag,
          as: 'products',
        },
      ],
    });

    if (!tag) {
      return res.status(404).json({ error: 'Tag not found' });
    }

    res.json(tag);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// create a new tag
router.post('/', async (req, res) => {
  try {
    const tag = await Tag.create(req.body);

    res.status(200).json(tag);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// update a tag's name by its `id` value
router.put('/:id', async (req, res) => {
  const tagId = req.params.id;
  
  try {
    const [updatedRowCount] = await Tag.update(
      { tag_name: req.body.tag_name },
      {
        where: {
          id: tagId,
        },
      }
    );

    if (updatedRowCount === 0) {
      return res.status(404).json({ error: 'Tag not found' });
    }

    const updatedTag = await Tag.findByPk(tagId);

    res.json(updatedTag);
  } catch (err) {
    console.error(err);
    res.status(400).json(err);
  }
});

// delete one tag by its `id` value
router.delete('/:id', async (req, res) => {
  const tagId = req.params.id;
  
  try {
    const deletedTag = await Tag.destroy({
      where: {
        id: tagId,
      },
    });

    if (!deletedTag) {
      return res.status(404).json({ error: 'Tag not found' });
    }

    res.json(deletedTag);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;
