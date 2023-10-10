const project = require("../database/projects.config");

const getProjectOnly = async() => await project.select('*').from('projects');
const getAll = async () => await project
.select(
  'p.project_id',
  'p.project_title',
  'p.description',
  'p.categories_id',
  'p.created_at',
  'p.updated_at',
  'p.is_deleted',
  'i.project_id as image_project_id',
  'i.image_name',
  'c.categories_name'
)
.from('projects as p')
.leftJoin('images as i', 'p.project_id', 'i.project_id')
.join('category as c', 'p.categories_id', 'c.categories_id');
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

const getAllData = async () => await project
.select(
  'p.project_id',
  'p.project_title',
  'p.description',
  'p.categories_id',
  'p.created_at',
  'p.updated_at',
  'p.is_deleted',
  project.raw('GROUP_CONCAT(i.image_name) as image_names'),
  'c.categories_name'
)
.from('projects as p')
.leftJoin('images as i', 'p.project_id', '=', 'i.project_id')
.join('category as c', 'p.categories_id', '=', 'c.categories_id')
.groupBy(
  'p.project_id',
  'p.project_title',
  'p.description',
  'p.categories_id',
  'p.created_at',
  'p.updated_at',
  'p.is_deleted',
  'c.categories_name'
);

const getAllDataById = async (projectId) => await project
.select(
  'p.project_id',
  'p.project_title',
  'p.description',
  'p.categories_id',
  'p.created_at',
  'p.updated_at',
  'p.is_deleted',
  project.raw('GROUP_CONCAT(i.image_name) as image_names'),
  'c.categories_name'
)
.from('projects as p')
.leftJoin('images as i', 'p.project_id', '=', 'i.project_id')
.join('category as c', 'p.categories_id', '=', 'c.categories_id')
.where('p.project_id', '=', projectId)
.groupBy(
  'p.project_id',
  'p.project_title',
  'p.description',
  'p.categories_id',
  'p.created_at',
  'p.updated_at',
  'p.is_deleted',
  'c.categories_name'
);

module.exports = {
  getAll,
  getByIdProject,
  insert,
  update,
  softDelete,
  getAllData,
  getProjectOnly,
  getAllDataById
};
