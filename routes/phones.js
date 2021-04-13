const router = require('express').Router();

const Phone = require('../models/Phone');

router.get('/', async (req, res) => {
  const phones = await Phone.find();
  res.render('phones/list', { phones });
});

router.get('/new', (req, res) => {
  res.render('phones/form');
});

router.get('/delete/:idPhone', async (req, res) => {
  await Phone.findByIdAndDelete(req.params.idPhone);
  res.redirect('/phones');
});

router.get('/edit/:idProduct', async (req, res) => {
  const phone = await Phone.findById(req.params.idPhone);
  res.render('phones/edit', { phone });
});

router.post('/create', async (req, res) => {
  await Phone.create(req.body);
  res.redirect('/phones');
});

router.post('/update', async (req, res) => {
  await Phone.findByIdAndUpdate(req.body.id, req.body);
  res.redirect('/phones');
});

module.exports = router;
