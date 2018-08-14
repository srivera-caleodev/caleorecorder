import { createApolloServer } from "meteor/apollo";
import { makeExecutableSchema } from "graphql-tools";
import merge from "lodash/merge";

import CaleoAdminResolvers from "../../api/caleoadmin/resolvers";
import CaleoCallsResolvers from "../../api/caleocalls/resolvers";
import CaleoAdminSchema from "../../api/caleoadmin/caleoadmin.graphql";
import CaleoCallsSchema from "../../api/caleocalls/caleocalls.graphql";


// refresh server comment

const table_queries = `type Query {
	table_userskill: [UserSkill]
	table_callsview: [CallsView]
}`;

const typeDefs = [table_queries, CaleoAdminSchema, CaleoCallsSchema];

const resolvers = merge(CaleoAdminResolvers,CaleoCallsResolvers);

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

createApolloServer({ schema });
