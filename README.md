# Thai ID Card OCR Identification

A full-stack MERN project for Thai ID card OCR identification using the Google Cloud Vision API.

## Overview

This project utilizes the Google Cloud Vision API for text extraction from Thai ID card images. The extracted data is then cleaned using regular expressions, and the information is stored in a MongoDB database. The frontend, built with React, allows users to upload images, process them with the Vision API, and view the extracted details.

## Features

- OCR identification of Thai ID card details.
- Clean and store extracted data in MongoDB.
- User-friendly React frontend for image uploading and analysis.
### Installation
1. **Initialization:**

   ```bash
   git init
2. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/thai-id-card-ocr.git
## Backend Setup
    cd Backend
    npm i
    npm run dev
## Frontend Setup
    cd ..
    cd Frontend
    cd ocr
    npm i
    npm start
## Note
 - You need to have a google cloud vision api enabled and gloud cloud setup in local machine and after that create a service account and put json file in CREDENTIAL function in ocr.js file which is located in Backend directory.
### Prerequisites

Ensure you have the following installed:

- Node.js and npm
- MongoDB
- Google Cloud Vision API Key
- Express
- Multer
- Middlwares
- Axios

## Usage
So this is a full stack MERN project for thai id card ocr identification , so what i have done is used the cloud vision api for detecting the text fields from id card and i haved cleaned those data using regex. For the uploading part i have used react for frontend and for storing the images in my machine and for database i have used mongodb , so for the mongo db schema i have fields id number , first name , last name , date of birth , issue date and expiry date . These are the things i have used for schema and for rest api i have made some routes and for creation , updation and deletion . So now when i upload the image from frontend , it get stored in the public/Images directory in Backend and from that file location it goes to vision api and it processes  it and when i hit analyse button it gives a post request and shows the result in frontend.

## API Endpoints
- POST /api/users/upload Create a new ID card entry.
- PUT /api/users/:id Update an existing ID card entry.
- DELETE /api/users/:id Delete an ID card entry.
- GET /api/users Retrieve all ID card entries.
- GET /api/users/:id Retrieve one ID card entry using it id.

### Acknowledgments
Third party Servies used
- Multer
- Cloud vision

![pic](https://github.com/UTKARSH1210-tech/Thai-id-ocr-recognition/assets/75846474/7011a4e1-d592-4faa-bf60-d9e1fea01a1a)


