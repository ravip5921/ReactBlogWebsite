# **React Blog Website**

###A simple blog website for users to write,edit and delete posts.

To get the system up and running on your device *with your device as **localhost***, you will need to install the following:
- node.js
Add the following packages to node using npm or yarn
- express
- dotenv
- mongoose
- multer
- cors
- path


# Configure connection to MongoDB by creating a .env file in api folder and add the following:
MONGO_URL = "Your mongo url"

## Somre problems which are not fixed as of now
- Image uploaded with post is uploaded with a seemingly random filename, cause unknown.
- If login is attempted with incorrect credentials, backend throws a ERR_HTTP_HEADERS_SENT error.
