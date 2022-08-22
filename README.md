# Create A Grocery App

## The Goal

In this lab, you're going to build the front-end for a digital grocery store! Users will be able to add and remove items to and from their cart and see a live total updated as they make changes.

## Getting Started

1. Clone this repository using `git clone`
2. `cd` into the project folder
3. `npm install`
4. `npm start`

## The Lab

### Part One: Set Up Redux

This app doesn't have redux added to it yet. You'll need to manage the state of the user's `cart` in a redux store.

0. Install RTK in the terminal with `npm install @reduxjs/toolkit`.
1. Add a directory called "redux" inside the `src` of your app.
2. Add two files inside your "redux" directory called `store.ts` and `cartSlice.ts`
3. Import `configureStore` into your `store.ts` file; use it to create and export a store - you can pass in an empty object for now.
4. Import `createSlice` into your `cartSlice.ts` and use it to create a slice - remember that `createSlice` takes an object with three required properties: `name`, `initialState`, and `reducers`.
   - For consistency, consider using the object below as your `initialState`:

```js
const initialState = {
  cart: [
    {
      product: {
        name: "Apple",
        priceInCents: 199,
        productID: "a1582",
      } as InventoryItem,
      qty: 1,
    },
    {
      product: {
        name: "Loaf of Bread",
        priceInCents: 150,
        productID: "b2693",
      } as InventoryItem,
      qty: 1,
    },
    {
      product: {
        name: "Milk",
        priceInCents: 250,
        productID: "m3704",
      } as InventoryItem,
      qty: 1,
    },
  ],
};

// optional export to make writing your selector much easier later on.
export type cartState = typeof initialState;
```

5. Write out two reducers: one for `addItem` and one for `removeItem` - be as error-proof or as reckless as you care to be for now - we can refine these functions later. Remember that thanks to immer, you can now treat state as mutable.
6. Export the reducer and both actions.
7. Optional: Since actionCreator functions are created automatically, you may wish to confirm that the addItem function works as intended by running some test code like `console.log(addItem("a123"))`.

### Part Two: Wire up the add-remove functions

###### Core features:

1. Add a `Provider` to the application.
2. Import your store and add it to your provider as a prop.
3. In your `Product` component, import `useDispatch` and call it to get a dispatch function.
4. Configure the **add** button to dispatch actions that will add the designated item to your cart.
5. Open redux devtools and confirm that the dispatched action is working as intended.
6. Repeat the above two steps to make the **remove** button work as well. Remember to include some logic to account for what happens if you try to remove an item that isn't there.

###### Stretch features:

- Write a selector that lets you know which items are currently in your cart, and make the "remove" button either hidden or unclickable when there are no items of that type in your cart.

### Part Three: Build the shopping cart display

Now that state is updating, we need to get the contents on screen.

###### Core features:

1. Create and use a selector to access the store's cart. You can create the selector within your `ShoppingCart` component, or create it in a `selectors.ts` file in the `redux` folder and import it to the Shopping Cart.
2. Use `useSelector` to access the cart in your `ShoppingCart` component. Now that the data is available, write some code to compute and display that total where the hard-coded placeholder `200` is currently listed.
3. Find a way to avoid displaying items with a quantity of 0. This could mean reworking your reducers to make sure that state only includes items you have in the cart, or using a `.filter()` method to exclude some items from the list.
4. Create a check to see if your cart has at least one item in it. If not, display a message like `your cart is empty :(`.
5. Map over the items to display everything in your cart. Ensure that items with a quantity of zero do not display.
6. Display the item name, quantity, and total price of each item in the Shopping Cart.
7. Create a clickable "x" on each line that removes the item from your cart. This will need a dispatch.

###### Stretch features:

- Right now, you may be seeing unusual price formats like $3.5 instead of $3.50, and you may get some rounding errors in JavaScript that will lead to even wackier issues like $1.989999999999 (instead of $1.99). Consider creating a `priceFormatter` function to convert a number into a string that always has exactly two digits after the decimal point.

## Extensions

- Most stores have a `+` and `-` button to change quantities directly in the shopping cart. Add those. Consider removing the "remove item" from the `Product` component, since that feels unusual.
- Right now our inventory says which items we have for sale, but doesn't keep track of quantities, so if a user ordered more apples than we have in stock, we'd be unable to fulfill the order. Figure out how we can handle that.
- Add in 3 more products and group them into shelves by category - dairy, produce, etc. Notice how little extra work this took when we're using Redux (compared to if we needed to prop drill further down).
