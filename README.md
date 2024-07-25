# Product Catalog Application

## Overview

This is a React-based web application for displaying and managing a catalog of products. It features a data grid with search and filter functionalities, pagination, sorting, and a detailed view for each product.

## Features

- **DataGrid Display:** Uses Material-UI's DataGrid to display products with pagination and sorting.
- **Search Filter:** Allows users to search products by name.
- **Category Filter:** Provides a dropdown to filter products by category.
- **Product Details:** Displays detailed information about each product when clicked.
- **Responsive Design:** Ensures the application is accessible and user-friendly on various devices.
- **Error Handling:** Includes error handling and a loading state for a better user experience.

## Setup

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher) or Yarn

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/your-repository.git
    cd your-repository
    ```

2. Install dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

3. Start the development server:

    ```bash
    npm start
    # or
    yarn start
    ```

4. Open your browser and go to `http://localhost:3000`.

## Usage

### Search and Filter

- Use the search input to filter products by name.
- Use the category dropdown to filter products by category.

### DataGrid

- **Pagination:** Navigate through pages using the pagination controls.
- **Sorting:** Click on column headers to sort by price in ascending or descending order.

### Product Details

- Click on a product row to view detailed information about the product.

## API

The application fetches data from the following API endpoint:

- **Base URL:** `https://catalog-management-system-dev-ak3ogf6zea-uc.a.run.app/cms/products`

## Components

- `DataGridComponent.js`: Displays the DataGrid with products.
- `SearchFilter.js`: Provides a search input for filtering products by name.
- `CategoryFilter.js`: Provides a dropdown for filtering products by category.
- `ProductDetails.js`: Displays detailed information about a selected product.
- `Loader.js`: Displays a loading spinner during data fetches.

## CSS Styling

All styling is managed in `App.css`. This file includes:

- **General Styling:** Basic layout and design elements for the application.
- **Search Filter:** Styling for the search input field, including padding, width, and border radius.
- **Category Filter:** Styling for the category dropdown, including padding, width, and border radius.
- **DataGrid:** Border styling for the DataGrid component to improve its appearance.
- **Responsive Design:** Media queries to ensure the application is responsive on different screen sizes.


## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -am 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions, feel free to contact:

- **G Pavan** - [pavansai0022@gmail.com]
