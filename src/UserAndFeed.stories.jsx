import { UserAndFeed, GetUserQuery, GetFeedQuery } from './UserAndFeed';

export default {
  component: UserAndFeed,
  tags: ['autodocs']
};

export const Default = {
  parameters: {
    urql: (op) => {
      if (op.query === GetUserQuery) {
        return {
          data: { user: { id: 1234, name: 'Steve' } }
        };
      }

      if (op.query === GetFeedQuery) {
        return {
          data: { feed: [{ id: 1, title: 'Fake news' }] }
        };
      }
    }
  }
};
