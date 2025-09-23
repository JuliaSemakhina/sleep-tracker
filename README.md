##Mood tracking Site (inspired by challenge on Frontend Mentor)
[Mood tracking Site Preview (home page)](../public/Mood1.jpg)
## Welcome!👋


### The challenge 
- The optimal layout for the site depending on device's screen size
- Hover states for all interactive elements on the page
- Users can log and see their mood, feelings, reflections, and sleep each day
- Users can see a random mood quote
- Users can see their average mood and sleep from the past five check-ins and see how they compare with the previous five
- Users can update their name through registration form
- Local Storage to save details for a separate user on their devices (separate page for all logged days)

### Screenshot

[Mood tracking Site Preview (planet info)](../public/Mood2.jpg)

### Links

- Live Site URL: [link](https://juliasemakhina/sleep-tracker)


### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- [React](https://reactjs.org/) - JS library
- [hamburger-react](https://hamburger-react.netlify.app) - For animated Hamburger Menu
- [React Hook Form](https://react-hook-form.com/) - for User's registration

### What I learned

- Using custom hooks (for Modal and Local Storage)
- Complex nested structure of submission form's tabs within modal window
- Using simple react-hook-form to display user's name on the main page and using two different methods to display authentication errors (validation (only letters, ≥3 characters), showing errors, clearing after submission)
- Visualization of entered data without complex and heavy libraries (including simple chart)
- Reusable input component

```
```
```css
.mood-radio input[type="radio"] {
  position: absolute;
  opacity: 0;
}

.radio_label {
  display: inline-block;
  width: var(--fs-size);
  height: var(--fs-size);
  border: 1px solid var(--accent-blue);
  border-radius: 50%;
  position: relative;
  transition: all .5ms ease-in-out;
}

.mood-radio input:checked+.radio_label {
  background-color: var(--primary-orange);
}
```
```js
        {errors.lastName?.type === "required" && (
          <small className='error_msg'>Last name is required</small>
        )};
or
                <ErrorMessage
          errors={errors}
          name="firstName"
          render={({ messages }) =>
            messages &&
            Object.entries(messages).map(([type, message]) => (
              <small className='error_msg' key={type}>{message}</small>
            ))
          }
        />
```
```js
  function getAverage(arr, key) {
    const freq = arr.reduce((m, o) => {
      const v = o[key];
      m[v] = (m[v] || 0) + 1;
      return m;
    }, {});

    let maxVal = null;
    let maxCnt = 0;
    for (const [value, count] of Object.entries(freq)) {
      if (count > maxCnt) {
        maxCnt = count;
        maxVal = value;
      };
    };
    return maxVal;
  }; 

```
```js
  const Input = (props) => {
  const { label, ...inputProps } = props;
  return (
    <>
      <label >
        {label}
        <input
          {...inputProps}
        />
      </label>
    </>
  );
};

```

### Will be working on the following improvements

- More complex authentication form (with e-mail, passwords and back-end);
- Buttons on cahrt to sort out weeks/months of entered data 
- Add English with "i18n"

## Author

- Website - [Yuliya Semakhina](https://github.com/JuliaSemakhina/)