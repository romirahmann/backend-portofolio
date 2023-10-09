const project = require("../database/projects.config");

const getAll = async () => await project.select("*").from("images");

const insert = async (data) => await project("images").insert(data);

module.exports = {
    getAll,
    insert
  };