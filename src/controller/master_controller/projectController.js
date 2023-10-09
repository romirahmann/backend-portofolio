const model = require("../../model/project.model");
const api = require("../../tools/common");

const getProjectsOnly = async (req, res) => {
  try {
    const dataProjects = await model.getProjectOnly();
    return api.ok(res, dataProjects);
  } catch {
    return api.error(res, "Gagal ambil seluruh data project!");
  }
};
const getAllProjects = async (req, res) => {
  try {
    const dataProjects = await model.getAll();
    return api.ok(res, dataProjects);
  } catch {
    return api.error(res, "Gagal ambil seluruh data project!");
  }
};

const getAllData = async (req, res) => {
  try {
    const dataProjects = await model.getAllData();
    return api.ok(res, dataProjects);
  } catch {
    return api.error(res, "Gagal ambil seluruh data project!");
  }
};

const getProjectByProjectId = async (req, res) => {
  const projectId = req.params.projectId;
  if (!isNaN(projectId)) {
    try {
      const dataProjects = await model.getByIdProject(projectId);
      return api.ok(res, dataProjects);
    } catch {
      return api.error(res, "Internal Server Error", 500);
    }
  }
};

const insertProject = async (req, res) => {
  const newData = req.body;
  console.log(newData);
  try {
    const data = await model.insert(newData);
    return api.ok(res, data);
  } catch {
    return api.error(res, "Gagal menambahkan Project", 500);
  }
};

const updateProject = async (req, res) => {
  const projectId = req.params.projectId;
  const newData = req.body;
  if (!isNaN(projectId)) {
    try {
      const data = await model.update(projectId, newData);
      return api.ok(res, data);
    } catch {
      return api.error("Gagal Update Data!");
    }
  } else {
    return api.error("Id tidak valid");
  }
};

const softDelete = async (req, res) => {
  const projectId = req.params.projectId;
  const newData = req.body;
  if (!isNaN(projectId)) {
    try {
      const data = await model.softDelete(projectId, newData);
      return api.ok(res, data);
    } catch {
      return api.error("Gagal Delete Data!");
    }
  } else {
    return api.error("Id tidak valid");
  }
};

module.exports = {
  getAllProjects,
  getProjectByProjectId,
  insertProject,
  updateProject,
  softDelete,
  getAllData,
  getProjectsOnly
};
