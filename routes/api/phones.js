const router = require('express').Router();

const Phone = require('../../models/Phone');

router.get('/', (req, res) => {
  Phone.find()
    .then((phone) => {
      const arr = phone.map((phone) => ({
        ...phone.toObject(),
      }));
      res.json(arr);
    })
    .catch((error) => res.json({ error: error.message }));
});

router.post('/', (req, res) => {
  Phone.create(req.body)
    .then((phone) => res.json(phone))
    .catch((error) => res.json({ error: error.message }));
});

router.put('/:idPhone', (req, res) => {
  Phone.findByIdAndUpdate(req.params.idPhone, req.body, { new: true })
    .then((phone) => res.json(phone))
    .catch((error) => res.json({ error: error.message }));
});

router.delete('/:idPhone', (req, res) => {
  Producto.findByIdAndDelete(req.params.idPhone)
    .then((phone) => res.json(phone))
    .catch((error) => res.json({ error: error.message }));
});

module.exports = router;
