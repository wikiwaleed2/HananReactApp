
import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import MessageList from '../messageList/';

const MessagesContainer = () => (
    <Query query={GET_MESSAGES}>
      {({ data, loading, error, subscribeToMore }) => {
        if (!data) {
          return null;
        }
        if (loading) {
          return <span>Loading ...</span>;
        }
        if (error) { 
          return <p>Sorry! Something went wrong.</p>;
        }
  
        return (<MessageList
            messages={data.allMessages}
            subscribeToMore={subscribeToMore}
          />);
      }}
    </Query>
  );

  const GET_MESSAGES = gql`
  query {
    allMessages {
      id,
      text, 
      isFavorite
    }
  }
`;

  export default MessagesContainer;