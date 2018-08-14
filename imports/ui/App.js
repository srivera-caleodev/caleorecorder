import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

const App = ({ data }) => {
  if (data.loading) return null;
  return (
    <div>
      <h1>Test 1</h1>
      <ul>
        {data.table_userskill.map(userskill => (
          <li key={userskill.UserSkillID}>{userskill.UserID}-{userskill.SkillID}</li>
        ))}
      </ul>
    </div>
  );
};

const tableQuery = gql`
  {
    table_userskill {
    UserSkillID
  	UserID
    SkillID
    }
  }
`


export default graphql(tableQuery)(App);
