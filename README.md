# Lingo Bingo: A Vocabulary Learning Application

## Project Overview

**Lingo Bingo** is a fun and interactive language learning application designed to help users expand their vocabulary and improve their communication skills in multiple languages. Learning a new language can be challenging, especially when it comes to retaining vocabulary. Lingo Bingo aims to make this process easier and more enjoyable.

## Project Theme

This project focuses on providing users with a dynamic and engaging platform to learn vocabulary in a specific language—Turkish. Users can start learning with a simple click and track their progress through various lessons and activities.

## Key Features

- **User Authentication**: Users must log in to access the vocabulary lessons. Authentication is handled by Firebase.
- **Single-Page Application**: The application uses a single-page layout for a seamless user experience.
- **Interactive Learning Activities**: Includes games, quizzes, and other interactive elements to enhance learning.
- **Daily Practice Challenges**: Provides users with daily tasks to maintain their learning momentum.
- **Responsive Design**: Fully responsive on mobile, tablet, and desktop devices.
- **Winter-Themed Design**: Incorporates a winter theme to create a visually appealing environment.
- **Hosting and Deployment**: Deployed on Netlify, ensuring smooth navigation without errors on page reloads.

## Project Structure

### Layout Components

- **Header**: Includes a welcome message, user login/logout options, and a navigation bar with links to Home, Start Learning, Tutorials, About Us, and My Profile (if logged in).✅
- **Footer**: Displays contact information, social media links, and a copyright notice.
- **Main Section**: Displays different pages based on the route.✅

### Pages

- **Home Page**: Features a banner/slider section, an about section, a success section (using react-count-up for animations), and additional custom sections.✅
- **Let’s Learn Page**: Contains static cards for each lesson, a tutorial section with an embedded YouTube video, and a “View More” button linking to tutorials.
- **Lessons/:lesson_no**: Displays vocabulary for the specified lesson number, with colored cards based on difficulty and modals for detailed word information.
- **Authentication Pages**: Separate login and registration pages with form validation and social login (Google).✅
- **My Profile**: Shows user information and provides an option to update profile details.
- **Tutorial Page**: Contains embedded YouTube videos for language learning.
- **Error Page**: Displays a 404 message for invalid routes.✅

### JSON Data

The application uses a JSON data array of Turkish vocabulary words with the following structure:✅

<!-- ```json
[
  {
    "id": "unique_id_1",
    "word": "merhaba",
    "pronunciation": "mer-ha-ba",
    "meaning": "hello",
    "part_of_speech": "noun",
    "difficulty": "easy",
    "lesson_no": 1,
    "when_to_say": "Used as a greeting.",
    "example": "Merhaba! Nasılsın?"
  },
  ...
] -->
## Authentication System

### User Login

- **Login Form**: The login page includes a form with fields for Email and Password.✅
- **Forgot Password**: There is a link to the "Forgot Password" page for users who need to reset their password.
- **Social Login**: Users can also log in using their Google account through Firebase authentication.✅
- **Navigation**: Upon successful login, users are redirected to their desired route or the Home page.✅ If the login fails, an error message is displayed using a toast or an inline error message.✅

### User Registration

- **Registration Form**: The registration page includes a form with fields for Name, Email, Photo URL, and Password.✅
- **Password Validation**: Passwords must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long.✅
- **Social Registration**: Users can register using their Google account through Firebase authentication.✅
- **Navigation**: Upon successful registration, users are redirected to the Home page.✅ If registration fails, an error message is displayed.✅

### Forgot Password

- **Reset Form**: The forgot password page includes a form with an email field and a reset password button.
- **Email Prefill**: If the user navigates from the login page where they already entered their email, the email field is prefilled.
- **Functionality**: When the reset button is clicked, the user is redirected to their email provider to complete the password reset process.

### Profile Update

- **Update Form**: The profile update page includes a form with fields for updating the Photo URL and Name.
- **Update Button**: Clicking the update button saves the changes to the user's profile in Firebase and navigates back to the profile page.
- **Navigation**: Users can access this page from the "My Profile" section.

## Challenges

### Implement an Animation Package on the Home Page✅

- **AOS (Animate On Scroll)**: Add smooth scrolling animations to various elements on the Home page.✅
- **Animate.css**: Alternatively, use Animate.css to add CSS animations to elements on the Home page.✅

### Forgot Password Feature

- **Form**: The forgot password feature includes a form with an email input field and a reset password button.
- **Redirect**: Clicking the reset button redirects the user to their email provider for password reset.

### Update Information Feature

- **Profile Update**: Allow users to update their profile information (Photo URL and Name) directly from their profile page.
- **Firebase Integration**: Ensure the updated information is saved in Firebase and reflected in the user's profile.

### Speak Up Your Vocabularies

- **Audio Pronunciation**: Implement a feature where clicking on a vocabulary card pronounces the word using the Web Speech API.
- **Implementation**: Use the Web Speech API to convert text to speech. Refer to [this CodePen example](https://codepen.io/Ferdous-Zihad/pen/QWeoRMo) for guidance on integrating text-to-speech in a React project.

## Deployment

### Netlify

- **Configuration**: Ensure that the site does not throw any errors on page reloads. Add the domain for authorization in Firebase.
- **Environment Variables**: Secure Firebase configuration keys using environment variables.

### GitHub Commits

- **Commits**: Include at least 10 meaningful commits with descriptive messages.

## Additional Resources

### Winter-Themed Design

- **Design Elements**: Incorporate winter-themed elements into the design of the application. Use resources from the provided blog for inspiration and assets.

## Conclusion

Lingo Bingo aims to create an engaging and effective learning experience for users. By incorporating interactive activities, daily challenges, and a responsive design, the application helps users to overcome the challenges of vocabulary retention and makes language learning enjoyable.
