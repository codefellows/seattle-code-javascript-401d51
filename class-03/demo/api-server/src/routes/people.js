'use strict';

const express = require('express');
const { People } = require('../models');

const router = express.Router();

// RESTful Route Declarations
router.get('/people', getPeople);
router.get('/people/:id', getOnePerson);
router.post('/people', createPerson);
router.put('/people/:id', updatePerson);
router.delete('/people/:id', deletePerson);

// RESTful Route Handlers
async function getPeople(req, res) {
  let allPeople = await People.findAll();
  res.status(200).json(allPeople);
}

async function getOnePerson(req, res) {
  const id = parseInt(req.params.id);
  let person = await People.findOne({ where: { id: id } });
  res.status(200).json(person);
}

async function createPerson(req, res) {
  let obj = req.body;
  let person = await People.create(obj);
  res.status(200).json(person);
}

async function updatePerson(req, res) {
  const id = parseInt(req.params.id);
  const obj = req.body;
  let person = await People.findOne({ where: { id: id } });
  let updatedPerson = await person.update(obj);
  res.status(200).json(updatedPerson);
}

async function deletePerson(req, res) {
  let id = parseInt(req.params.id);
  let deletedPerson = await People.destroy({ where: { id } });
  res.status(204).json(deletedPerson);
}

module.exports = router;
