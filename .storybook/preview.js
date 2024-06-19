/** @type { import('@storybook/react').Preview } */
// import './index.css'
// import '!style-loader!css-loader!sass-loader!./index.scss';
const preview = {
  parameters: {
    // actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
