/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
    import type   { Resolvers } from './types.generated';
    import    { AdminUser } from './AdminUser';
import    { CreateUserPayload } from './CreateUserPayload';
import    { CustomerUser } from './CustomerUser';
import    { createUser as Mutation_createUser } from './Mutation/createUser';
import    { user as Query_user } from './Query/user';
import    { User } from './User';
    export const resolvers: Resolvers = {
      Query: { user: Query_user },
      Mutation: { createUser: Mutation_createUser },
      
      AdminUser: AdminUser,
CreateUserPayload: CreateUserPayload,
CustomerUser: CustomerUser,
User: User
    }