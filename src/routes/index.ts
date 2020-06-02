import { Router } from "express";
import knex from "../database/connection";

const routes = Router();

routes.get("/items", async (request, response) => {
  const items = await knex("items").select("*");

  return response.json(items);
});

export default routes;
