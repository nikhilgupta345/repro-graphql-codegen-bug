import type { MutationResolvers } from "./../types.generated";

export const createUser: NonNullable<MutationResolvers["createUser"]> = async (
  _parent,
  _arg,
  _ctx
) => {
  return { user: { id: "123" } };
};
