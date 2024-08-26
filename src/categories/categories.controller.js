const categoriesService = require("./categories.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function list(req, res) {
  const data = await categoriesService.list(); // function runs a knex query, which is an asynchronous operation.
  res.json( { data });
}

module.exports = {
  list: asyncErrorBoundary(list),
};