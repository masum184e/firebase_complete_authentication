# Firebase Complete Authentication
This React application integrates with Firebase Authentication. It offers various authentication methods, such as email and password, Google, and Facebook login including reset password by sending email

# Preview
<img src="/preview.png">
<a href="https://auth-89be2.firebaseapp.com" target="_blank">Live Preview</a> 

# Requirements
[Install Node On Your Device](https://nodejs.org/)

# How to Run
```
git clone https://github.com/masum184e/firebase_complete_authentication.git
cd firebase_complete_authentication
npm install
npm run dev
```

# Environment Variables
```
VITE_APIKEY=your-api-key
VITE_AUTHDOMAIN=your-auth-domain
VITE_PROJECTID=your-project-id
VITE_STORAGEBUCKET=your-storage-bucket
VITE_MESSAGINGSENDERID=your-messaging-sender-id
VITE_APPID=your-app-id
VITE_MEASUREMENTID=your-measurement-id
```
Copy and paste it from your firebase project setting.

# Libraries
|          Library          |                                           Uses                                             |
| ------------------------- |--------------------------------------------------------------------------------------------|
| vite                      | A fast build tool and development server.                                                  |
| react                     | JavaScript library for building user interfaces.                                           |
| react-router-dom          | Library for handling routing in React applications.                                        |
| firebase                  | JavaScript SDK for Firebase services such as authentication, database, storage, and more   |
| react-icons               | Library for including popular icon packs in React applications.                            |
| react-toastify            | Library for displaying customizable toast notifications in React.                          |
| prop-types                | Runtime type checking for React props.                                                     |
| tailwindcss               | Utility-first CSS framework for rapid UI development.                                      |
| daisyui                   | Plugin for Tailwind CSS that provides pre-designed UI components.                          |
| eslint                    | Pluggable JavaScript linter.                                                               |

# Key Features
- Registration and Login
    - Email(Form)
    - Google(Popup)
    - Facebook(Redirect)
- Current User
- Sign Out
- Update Profile
- Change Password
- Email Verification
- Reset Password

# Feel free to contribute
- Multi-Factor Authentication (MFA)
- Firebase Firestore or Realtime Database
- Firebase Storage(Files)
- Firebase Cloud Messaging (FCM)
- Firebase Admin
- Firebase Performance Monitoring
