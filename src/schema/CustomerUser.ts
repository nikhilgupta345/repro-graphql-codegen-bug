import type { CustomerUserResolvers } from "./types.generated";
export const CustomerUser: CustomerUserResolvers = {
  customerName: (p) => {
    return "customer name of " + p.id;
  },
    type: async (_parent, _arg, _ctx) => { /* CustomerUser.type resolver is required because CustomerUser.type exists but CustomerUserMapper.type does not */ }
};
