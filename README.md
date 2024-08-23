# React Portfolio Project

This project is a modern, interactive portfolio website built with React, Material-UI, and Three.js. It showcases a developer's skills, projects, and personal information in an engaging and visually appealing manner.

## Features

- Responsive design using Material-UI components
- Interactive 3D elements powered by Three.js and React Three Fiber
- Tabbed interface for easy navigation between different sections
- Custom theme with carefully selected color palette and typography
- Animated elements to enhance user experience
- Integration with social media and contact links

## Technologies Used

- React
- Material-UI (MUI)
- Three.js
- React Three Fiber
- React Three Drei
- Google Fonts

## Dependencies

This project relies on the following main dependencies:

- React
- @mui/material
- @emotion/react
- @emotion/styled
- @react-three/fiber
- @react-three/drei
- three
- @fontsource/roboto
- @fontsource/playfair-display
- @fontsource/montserrat
- @fontsource/pacifico

For a complete list of dependencies and their versions, refer to the `package.json` file.

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/react-portfolio.git
   ```

2. Navigate to the project directory:
   ```
   cd react-portfolio
   ```

3. Install the dependencies:
   ```
   npm install
   ```

   Alternatively, if you prefer using Yarn:
   ```
   yarn install
   ```

This will install all the necessary dependencies listed in the `package.json` file.

## Running the Application

To start the development server, run:

```
npm start
```

Or if you're using Yarn:

```
yarn start
```

The application will be available at `http://localhost:3000`.

## Project Structure

- `src/`: Contains the source code for the React application
  - `components/`: React components used in the app
  - `theme/`: Custom Material-UI theme configuration
  - `data/`: Static data for projects and skills
- `public/`: Public assets and HTML template

## Customization

To customize the portfolio for your own use:

1. Update the personal information, projects, and skills in the respective arrays in the main component.
2. Modify the theme colors and typography in the `createTheme` function to match your preferred style.
3. Replace the 3D elements and animations in the `Scene` component to showcase your own creative ideas.

## Deployment

To build the project for production, run:

```
npm run build
```

Or with Yarn:

```
yarn build
```

This will create a `build` directory with optimized production-ready files. You can then deploy this directory to your preferred hosting platform.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

If you have any questions or want to reach out, please contact Neal Kapadia at nrk220003@utdallas.edu.