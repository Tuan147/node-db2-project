const db = require('../../data/db-config')

const getAll = () => {
  // DO YOUR MAGIC
  return db('cars')
};

const getById = (id) => {
  // DO YOUR MAGIC
  return db('cars').where('id', id).first()
};

const create = (cars) => {
  // DO YOUR MAGIC
  const [id] = db('cars').insert(cars)
  return getById
};

const getByVin = (vin) => {
  return db('cars').where('vin', vin).first();
}
module.exports = {
  getAll,
  getById,
  create,
  getByVin
}