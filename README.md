## Clone Repository

To get started, clone this repository to your local machine using the following commands:

```bash
# Clone the repository
https://github.com/HarshitTomer/todos-server

# Navigate to the project directory
cd todos-server

Running the Application
npm start


also clone the frontend from 
https://github.com/HarshitTomer/todos
```

i have also updated .env file dont think i am an idiot it just for the your setup

# Todos Backend README

This README provides an overview of the backend server for the Todos application, including the authentication flow and security measures implemented.


### User Registration

1. Users send a POST request to the `/register` endpoint with their desired username and password in JSON format.
2. The server validates the request by checking for duplicate usernames or other necessary validations.
3. If registration is successful, the server securely stores the user's credentials. Typically, this involves hashing and salting the password.
4. The server responds with a success message, such as `{ "message": "Registration successful" }`, and a status code of 200.
5. In case of registration failure (e.g., due to validation errors or a duplicate username), the server sends an error response with an appropriate error message and a status code other than 200.

### User Login

1. Users send a POST request to the `/login` endpoint with their registered username and password in JSON format.
2. The server verifies the provided credentials by comparing the password with the stored hashed password for the corresponding username.

3. The server responds with  success message, such as `{  "message": "Login successful" }`.
4. If login fails (e.g., due to incorrect credentials), the server sends an error response with an appropriate error message.



