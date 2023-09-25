const project = require("../database/projects.config");

const getAll = async () => await project.select("*").from("projects");
const getByIdProject = async (projectId) =>
  await project
    .select("*")
    .from("projects")
    .where("project_id", "=", projectId);

const insert = async (data) => await project("projects").insert(data);

const update = async (projectId, data) =>
  await project("projects").where("project_id", "=", projectId).update(data);

const softDelete = async (projectId, data) =>
  await project("projects").where("project_id", "=", projectId).update(data);

module.exports = {
  getAll,
  getByIdProject,
  insert,
  update,
  softDelete,
};
