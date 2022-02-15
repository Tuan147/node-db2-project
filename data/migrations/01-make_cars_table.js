exports.up = function (knex) {
  // DO YOUR MAGIC
  return knex.schema.table('cars', (tbl) => {
    tbl.increment();
    tbl.string('vin', 128).unique().notNullable();
    tbl.string('make', 128).notNullable();
    tbl.string('model', 128).notNullable();
    tbl.numeric('mileage', 128).notNullable();
    tbl.string('title', 128);
    tbl.string('transmission', 128)
  })
};

exports.down = function (knex) {
  // DO YOUR MAGIC
  return knex.schema.dropTableIfExists('cars')
};
