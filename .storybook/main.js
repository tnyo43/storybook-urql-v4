module.exports = {
  stories: ['../**/src/**/*.stories.jsx'],
  addons: [],
  features: {
    postcss: false
  },
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  docs: {
    autodocs: 'tag'
  }
};
