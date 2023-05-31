# Storybook + urql / Multiple quries running example

ref: https://github.com/urql-graphql/urql/discussions/3232

[The current description about Multiple queries use case](https://storybook.js.org/addons/@urql/storybook-addon) does not work with urql v4.0.0 or later (Neither `getQueryName` nor `getOperationName` is supported).
I implemented Multiple queries use case with comparing the query to the document nodes.

I suggest to update the document as like follows:

```js
MyStory.parameters = {
  urql: op => {
    if (op.query === GetUserQuery) {
      return { data: { user: { id: 1234, name: 'Steve' } } };
    }

    if (op.query === GetFeedQuery) {
      return { data: { feed: [{ id: 1, title: 'Fake news' }] } };
    }
  },
};
```

## Environment

- urql: v4.0.3
- @urql/storybook-addon: v2.0.1

# Install

```
$ pnpm install
```

# Run Storybook

```
$ pnpm storybook
```

Go to http://localhost:6006/?path=/story/src-userandfeed--default and you will see that it is working well :)
