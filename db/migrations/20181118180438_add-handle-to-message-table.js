exports.up = function(knex, Promise) {
  return knex.schema.table("messages", function(t) {
    t.string("handle")
      .notNull()
      .defaultTo("empty");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table("messages", function(t) {
    t.dropColumn("handle");
  });
};
