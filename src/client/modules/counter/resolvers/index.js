//import update from 'immutability-helper';

import COUNTER_QUERY_CLIENT from '../graphql/CounterQuery_client.graphql';

const TYPE_NAME = 'CounterState';

const defaults = {
  counterState: {
    counter: 1,
    __typename: TYPE_NAME
  }
};

const resolvers = {
  Query: {
    counterState: (_, args, { cache }) => {
      const { counterState: { counter } } = cache.readQuery({ query: COUNTER_QUERY_CLIENT });
      return {
        counter: counter,
        __typename: TYPE_NAME
      };
    }
  },
  Mutation: {
    addCounterState: (_, { amount }, { cache }) => {
      const { counterState: { counter } } = cache.readQuery({ query: COUNTER_QUERY_CLIENT });

      const newAmount = amount + counter;

      cache.writeData({
        data: {
          counterState: {
            counter: newAmount,
            __typename: TYPE_NAME
          }
        }
      });

      return null;
    }
  }
};

export default {
  defaults,
  resolvers
};
