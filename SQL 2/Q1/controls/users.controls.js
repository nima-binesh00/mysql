import { user } from "../model/user.model.js";
export const createUser = async (q, r) => {
  const creat = await user.create(q.body);
  r.json(creat);
};
export const findall = async (q, r) => {
  const data = await user.findAll();
  r.json(data);
  console.log("ok");
};
export const update = async (q, r) => {
  const { id } = q.params;
  const data = await user.findByPk(id);
  if (isNaN(data)) {
    const update = await data.update(q.body);
    r.json(update);
  }
  return;
};

export const deletes = async (q, r) => {
  const { id } = q.params;
  const data = await user.findByPk(id);
  if (isNaN(data)) {
    await data.destroy();

    return r.json("data delete");
  } else return console.log("wrong");
};
