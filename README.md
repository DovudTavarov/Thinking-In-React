# Thinking in React
React can change how you think about the designs you look at and the apps you build. When you build a user interface with React, you will first break it apart into pieces called components. Then, you will describe the different visual states for each of your components. Finally, you will connect your components together so that the data flows through them.
# Break the UI into a component hierarchy
![view1](https://github.com/agaparkg/thinking-in-react-starter/raw/main/src/assets/hierarchy.png)
| Component                | Color   | Description                                                 |
|--------------------------|---------|-------------------------------------------------------------|
| **FilterableProductTable** | Grey    | Contains the entire app.                                    |
| **SearchBar**            | Blue    | Receives the user input.                                    |
| **ProductTable**         | Lavender | Displays and filters the list according to the user input. |
| **ProductCategoryRow**   | Green   | Displays a heading for each category.                       |
| **ProductRow**           | Yellow  | Displays a row for each product.                            |
# UI output
![view1](https://github.com/agaparkg/thinking-in-react-starter/raw/main/src/assets/view.png)
# React + Vite
This project was generated using Vite build tool.
