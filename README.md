# Upload API

see project board https://git.generalassemb.ly


### User Stories
As an unregistered user, I would like to sign up with email, pw, and pw confirmation
As a registered user, I would like to sign in with email and ps
As a logged in user, I would like to upload an image with a custom name
As a logged in user, I would like to view the images I uploaded

### Dependencies

#### AWS SDK Node.js

General setup
-https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/welcome.html
-https://docs.aws.amazon.com

Credentials

https://docs.aws.amazon
```
AWS_ACCESS_KEY_ID
AWS_SECRET_ACCESS_KEY
BUCKET
```

Upload to S3

s3Upload.js
-[view here](lib/s3 uplodad.js)
-returns a Promise

###Multer
