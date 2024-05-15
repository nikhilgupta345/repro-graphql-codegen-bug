import type { UserResolvers } from "./types.generated";
export const User: UserResolvers = {
  // typeof Parent should be UserMapper
  __resolveType: (parent) => {
    if (parent.isAdmin) {
      return "AdminUser";
    }
    return "CustomerUser";
  },
};
