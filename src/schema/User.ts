import type { UserResolvers } from "./types.generated";

export const User: UserResolvers = {
  __resolveType: (p) => {
    return "AdminUser";
  },
};
