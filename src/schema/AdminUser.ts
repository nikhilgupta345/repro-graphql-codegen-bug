import type { AdminUserResolvers } from "./types.generated";
export const AdminUser: AdminUserResolvers = {
  adminName: (p) => {
    return "admin name of " + p.id;
  },
    type: async (_parent, _arg, _ctx) => { /* AdminUser.type resolver is required because AdminUser.type exists but AdminUserMapper.type does not */ }
};
