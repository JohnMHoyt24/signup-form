# Frontend Mentor - Landing Page with Signup Form
A simple landing page with a signup form. A user provides their first name, last name, email address, and password.
They then click the button to submit their information.

## Initial State
<img width="1121" height="720" alt="image" src="https://github.com/user-attachments/assets/293f2f19-8006-4348-b900-12d6cba0e8f4" />

## Missing Values State
<img width="1178" height="854" alt="image" src="https://github.com/user-attachments/assets/c7ae3d3c-b002-4149-b427-4c59d3bbd8b1" />

## Invalid Email State
<img width="537" height="715" alt="image" src="https://github.com/user-attachments/assets/43008d72-ec65-4947-88ca-a553215623ff" />

## Invalid Password State
<img width="534" height="701" alt="image" src="https://github.com/user-attachments/assets/d7f829d4-503d-4883-ab67-0f9a290f7974" />

## John Hoyt
- Website - [John's World](https://www.your-site.com](https://accessible-portfolio-six.vercel.app/))
- Frontend Mentor - [@JohnMHoyt24]([https://www.frontendmentor.io/profile/yourusername](https://www.frontendmentor.io/profile/JohnMHoyt24))

## Technologies Used
- HTML
- JavaScript
- TypeScript
- CSS
- Flexbox
- React
- Vite

## What I Learned
- To check for certain combinations of characters entered, implement a regular expression.
  ## signup.tsx lines 19-35
  ```
    const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!firstName) newErrors.firstName = "First name is required";
    if (!lastName) newErrors.lastName = "Last name is required";
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email address is invalid";
    }
    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    }

    return newErrors;
  }
  ```
- The onChange attribute will automatically call the set function and the clearErrorOnChange function
  each time a user changes the input value, i.e. they type in the textboxes.
  ## signup.tsx lines 69-83
  ```
      return (
      <div>
        <form className="signup-container">
          <div>
            <input
              type="text"
              id="firstname"
              placeholder="Enter your first name..."
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
                clearErrorOnChange('firstName');
            }}
              className={errors.firstName ? 'invalid-input' : ''}
            />
  ```
