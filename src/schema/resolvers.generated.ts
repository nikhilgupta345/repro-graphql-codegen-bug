/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
    import type   { Resolvers } from './types.generated';
    import    { user as Query_user } from './Query/user';
import    { AdminUser } from './AdminUser';
import    { CustomerUser } from './CustomerUser';
import    { User } from './User';
    export const resolvers: Resolvers = {
      Query: { user: Query_user },
      
      
      AdminUser: AdminUser,
CustomerUser: CustomerUser,
User: User
    }