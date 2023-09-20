# Environment Variables

This project uses environment variables to configure various aspects of the application. You should create a `.env` file in the project's root directory to set these variables. Here's an example of the `.env` file with descriptions:


## Available Environment Variables

### `BASE_URL`

- **Description**: The base URL for fetching data from a public API.
- **Default Value**: `https://fakestoreapi.com/products`

---

**Note:** Make sure to replace the default value with the appropriate URL if you need to point to a different API.

## How to Set Environment Variables

To set or update environment variables in your project:

1. Create a new file named `.env` in the root directory of your project if it doesn't already exist.

2. Open the `.env` file in a text editor.

3. Add or modify the environment variable and its value in the following format:
BASE_URL=https://fakestoreapi.com/products


---

# Folder Structure

The project is organized into the following directory structure:

- **`app/`**: This directory contains the main source code of your application.

    - **`api/`**: Includes api query and schemas
        - **`queries/`**: Endpoint query files as hooks
        - **`schemas/`**: All the data models

    - **`components/`**: Includes common Reusable components, providers, templates 
        - **`common/`**: Includes custom reusable components such as: Button, Text, ...
        - **`providers/`**: Follows the providers design pattern for creating an HOC to implement components such as ionicons config
        - **`templates/`**: All the Components with simple logic that are used as template for other screens or elements are created here

    - **`constants/`**: All the global constant form of variable
        - **`enums/`**
        - **`routes/`**: Includes the navigation screen names
        - **`sizing/`**: Includes the global sizing values 
        - **`spacing/`**: Includes the global spacing values 

    - **`hooks/`**: Custom hooks for reusing in the global app
        - **`useSearchHook/`**: Includes custom reusable hook for handling search bar

    - **`navigators/`**: Contains navigation installation and containers
        - **`AppNavigator/`**: Main navigation screens setup

    - **`screens/`**: All the available screens are included in this directory also includes Container, Component structure
        - **`product/`**: Main/Home screen where user enters while opening the app
            - **`components/`**: This directory contains components without logic which are used for rendering UI and accepting props
                 - **`product.component.column`**: Renders product as a list of single item on each row
                 - **`product.component.grid`**: Renders product as a list of grid of two items on each row
            - **`product.container`**: The container of the Product screen which handles UI logic and passes the needed functions and props to the components Also handles search functionality, and toggles product UI renderer to Grid of 2 items on each row or a single column on each row.
        
        - **`productDetails/`**: Contains details screen's components
            - **`details.component.tsx`**: UI component holder for details screen
            - **`details.container.tsx`**: Logic component holder for details screen

    - **`theme/`**: Contains all the global variables that are related to theming such as: colors
        - **`colors`**: Specifies global color values used in the App
        - **`icons`**: Specifies and contains ionicon icons names

    - **`.env`**: Include all the critical values such as base url, keys and ... => (Note: If you don't have a .env please create one and follow the first step to be able to create Endpoints query)

--- 

# API query useGetProducts Hook


The `useGetProducts` hook is a custom React hook designed to simplify the process of fetching and managing product data from an API in your React application. It provides functions and state variables for efficient data retrieval and updating.

## Usage

To use the `useGetProducts` hook in your application:

1. Import the hook:

   ```javascript
   import useGetProducts from './useGetProducts';

---


