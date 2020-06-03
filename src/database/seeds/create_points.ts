import Knex from "knex";

export async function seed(knex: Knex) {
  await knex("points").insert([
    {
      name: "willian",
      image: "fake_image",
      email: "willian@gmail.com",
      whatsapp: "11964032829",
      latitude: -40.1230918,
      longitude: -42.1230918,
      city: "Sorocaba",
      uf: "SP",
    },
  ]);
}
