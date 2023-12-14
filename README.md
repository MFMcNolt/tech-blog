# Tech Blog

## Description

Unforuntely for me, this challenge really challenge me and I was unsuccessful with rendering on Localhost which then stopped me from being able to deploy to Heroku. This was so challenging for me as I could not debug my system no matter what. I realize how useful the console.log usage is and I regret not using it in this challenge. I also learnt that I need to learn a better execution model. Throughout this course, I have found 'where to begin' with these challenges one of the hardest lessons!

Ideally, I was hoping to create a content management system that allows developers to publish blog posts, read articles from other developers, and engage in discussions through comments. This application follows the Model-View-Controller (MVC) architectural pattern and utilizes technologies such as Handlebars.js, Sequelize ORM, and the express-session npm package for authentication.

## Table of Contents
- [Installation](Installation)
- [Features](Features)
- [Tech Used](Technologies Used)
- [Usage](Usage)
- [Contributing](Contributing)
- [License](License)

## Installation
Clone the Repository: git clone https://github.com/MFMcNolt/tech-blog
Install Dependencies:  npm install
Database Setup:
Create a MySQL database.
Update the .env file with your database credentials.
Run the database schema using: npm run seed

## Features
User Authentication:
Users can sign up, log in, and log out securely. Passwords are hashed for security.

Blog Post Management:
Developers can create, edit, and delete their blog posts. The application follows a user-friendly interface for managing blog content.

Commenting System:
Users can comment on blog posts, fostering a sense of community and encouraging discussions.

MVC Architecture:
The project adheres to the MVC pattern, separating concerns for better maintainability and scalability.

## Technologies Used
Handlebars.js:
Handlebars.js is employed as the templating engine for rendering dynamic HTML content.

Sequelize ORM:
Sequelize is used as the Object-Relational Mapping (ORM) tool for database interactions, ensuring data integrity and ease of development.

Express-session:
The express-session npm package is utilized for secure user authentication and session management.

## Usage
Start the Application: npm start
Access the Tech Blog: Open your web browser and navigate to http://localhost:3001.
Sign Up and Enjoy: Create a new account, publish blog posts, and engage with the community through comments.

## Contributing
Contributions are welcome! Please follow the Contributor Covenant Code of Conduct.

## License
This project is licensed under the MIT License.

## Questions
If you have any questions or suggestions, feel free to reach out:
    GitHub: MFMcNolt
