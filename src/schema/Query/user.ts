import type { QueryResolvers } from "../types.generated";

export const user: NonNullable<QueryResolvers['user']> = async () => {
  return { id: "123" };
};
