exports.up = function (knex) {
  return knex.schema.createTable("cars", tbl => {
    tbl.increments()
    tbl.text("vin", 20)
      .notNullable()
      .unique()
    tbl.text("make", 20)
      .notNullable()
    tbl.text("model", 20)
      .notNullable()
    tbl.integer("mileage", 20)
      .notNullable()
    tbl.text("title", 20)
    tbl.text("transmission", 20)
  })
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("cars")
};
