import type { QueryResolvers } from "./../types.generated";

// Resolver return type should be UserMapper
export const user: NonNullable<QueryResolvers['user']> = async (
  _parent,
  _arg,
  _ctx
) => {
  return {
    id: "123",
    isAdmin: true,
  };
};
