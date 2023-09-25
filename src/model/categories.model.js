const project = require("../database/projects.config");

const getAll = async () => await project.select("*").from("category");
const getById = async (categoriesId) =>
  await project
    .select("*")
    .from("category")
    .where("categories_id", "=", categoriesId);

const insert = async (data) => await project("category").insert(data);

const update = async (categoriesId, data) =>
  await project("category").where("categories_id", "=", categoriesId).update(data);

const softDelete = async (categoriesId, data) =>
  await project("category").where("categories_id", "=", categoriesId).update(data);

  module.exports = {
    getAll,
    getById,
    insert,
    update,
    softDelete,
  };