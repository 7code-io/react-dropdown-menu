### Prompt

We want to build a select / dropdown component like the one pictured in `src/image/dropdown.png`

- When the user lands on the screen, the dropdown should display the currently selected value or (if no value is selected) a placeholder.
- When the user clicks the selected value, it should expand to show the available options.
- When the user clicks and option, the menu should collapse and the value should be replaced with the selected option.
- This component will be re-used in several parts of our apps, so we should design it in a flexible and exensible manner, as if it were part of a design system.

### Extended

- Can we have the dropdown collapse when the user clicks outside of the menu?
- Currently our dropdown supports mouse events. Can we also add support for keyboard events (e.g. tab to focus, arrow keys + enter to select options)?
