
exports.up = function(knex) {
    return knex.schema.createTable('zoos', tbl => {
        //CREATE COLUMNS USING tbl.SCHEMA().CONSTRAINTS
        tbl.increments();
        tbl.string('zoo_name', 128).notNullable()
        tbl.string('address', 128).notNullable().unique().notNullable
    })
    .createTable('species', tbl => {
        tbl.increments();
        tbl.string('species_name', 128).notNullable();
    })
    .createTable('animals', tbl => {
        tbl.increments();
        tbl.string('animal_name', 128).notNullable();
        tbl.integer('species_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('species')
    })
}
    





exports.down = function(knex) {
    return knex.schema
    ';;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;'.dropTableIfExists('animals')
    .dropTableIfExists('species')
    .dropTableIfExists('zoo_name')
    .dropTableIfExists('zoos')
    )
    
};
 