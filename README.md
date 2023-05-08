# Meeting-Management
Meeting Management Test - Full Stack Web App (MySQL, Node.js and React)

# Dependencies:
react: ^18.2.0

MySQL with phpMyAdmin

## Import the Database:
1. Open phpMyAdmin - I used XAMPP to run a MariaDB MySQL Server.
2. Import meetingsManagement.sql to a new database named meetingsManagement.
3. Make sure the following MySQL connection settings are correct inside the file config-dev.json located in the Backend:
    - Database Host: localhost
    - Database Name: meetingsManagement
    - Database User: root
    - Database Default Password: (empty)

## Download and Install:
1. Download my project and cd into it using the following commands:
```
git clone https://github.com/Niv-Yulevitch/Meeting-Management.git
cd Meeting-Management
```
2. Install required node modules for the Backend and the Frontend using the following commands:
```
cd Frontend
npm i
cd ../Backend
npm i
```

## Run Instructions:
1. Make sure the MySQL server is up and running – For XAMPP you also need to make sure that Apache and MySQL are running to be able to access phpMyAdmin.
2. First, Run the Backend: (Make sure you’re on the Meeting-Management folder)
```
cd Backend
npm start
```
3. Next, Run the Frontend:
```
cd ../Frontend
npm start
```

The project should open up on http://localhost:3000/ and load up!

## Screenshots:
#### Home page:
![Screenshot 2023-05-08 154953](https://user-images.githubusercontent.com/98215470/236830466-096a11e4-2b1a-463e-bf7f-dca6d299c866.png)
![Screenshot 2023-05-08 155409](https://user-images.githubusercontent.com/98215470/236830487-77c589bc-a6ca-4587-bef4-10a7589ffbef.png)
![Screenshot 2023-05-08 155007](https://user-images.githubusercontent.com/98215470/236830490-647e9171-3d20-4021-82e1-9baa0c65e217.png)
![Screenshot 2023-05-08 155018](https://user-images.githubusercontent.com/98215470/236830493-df241d47-3882-4e44-b0b3-deb3ad8e8873.png)
![Screenshot 2023-05-08 155423](https://user-images.githubusercontent.com/98215470/236830509-c13ad35a-a842-4e63-b328-3eb6e679f367.png)
