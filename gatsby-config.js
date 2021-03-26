module.exports = {
  siteMetadata: {
    title: 'profile-card-component',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    require('./gatsby-aliases'),
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/
        }
      }
    }
  ],
};
