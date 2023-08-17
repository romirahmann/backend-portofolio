const sakila = require('./../database/sakila.config');

getAll = async () => await sakila.select('*').from('actor');

getById = async ( id) => await sakila.select('*').from('actor').where('actor_id', id);

getWhere = async (column, value) => await sakila.select('*').from('actor').where(column, value);

insert = async (data) => await sakila('actor').insert(data);

update = async (id, data) => await sakila('actor').where('actor_id', id).update(data);

deleteData = async (id) => await sakila('actor').where('actor_id', id).del();

softDelete = async (id, data) => await sakila('actor').where('actor_id', id).update(data);

// getActorFilmInfo = async () => {
//     return await sakila
//         .select('actor.first_name', 'actor.last_name', 'film.title')
//         .from('actor')
//         .join('film_actor', 'actor.actor_id', '=', 'film_actor.actor_id')
//         .join('film', 'film_actor.film_id', '=', 'film.film_id');
// };

getActorFilmInfo = async () => {
    return await sakila
        .select('film.title')
        .select(sakila.raw("GROUP_CONCAT(CONCAT(actor.first_name, ' ', actor.last_name)) AS list_actor"))
        .from('film_actor')
        .join('film', 'film_actor.film_id', '=', 'film.film_id')
        .join('actor', 'film_actor.actor_id', '=', 'actor.actor_id')
        .groupBy('film.title');
};

module.exports = {
    getAll,
    getById,
    getWhere,
    insert,
    update,
    deleteData,
    softDelete,
    getActorFilmInfo
};