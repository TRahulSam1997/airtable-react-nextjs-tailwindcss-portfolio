# Basic Portfolio Built With Airtable API, React, Next.js & Tailwind CSS
  This application will allow you to set your portfolio information: title, description and image URL in an Airtable base and it will be rendered in a React (Next.js) application.

### What does this service do?
  It allows you to use Airtable as a backend/CMS for your portfolio website.

### How to use?
  1) Clone `airtable-react-nextjs-tailwindcss-portfolio` repository into your project folder.
  ```https://github.com/TRahulSam1997/airtable-react-nextjs-tailwindcss-portfolio```
  3)  Set the **.env** variables to connect with Airtable in `.env`
      ```
          AIRTABLE_API_KEY: undefined
          AIRTABLE_BASE_ID: undefined
          AIRTABLE_TABLE_NAME: undefined
          NEXT_PUBLIC_FIRST_NAME= undefined
          NEXT_PUBLIC_SECOND_NAME= undefined
          NEXT_PUBLIC_ABOUT= undefined
          NEXT_PUBLIC_TWITTER= undefined
      ```
      Get your values here: https://airtable.com/api
  3) Make sure your Airtable base has the fields **title, description and image**.
        - Fields are **case sensitive**.
        - Make sure the **image** fields is a **URL** type.
  4) Run ```cd airtable-react-nextjs-tailwindcss-portfolio; npm i; npm run dev```

**This project is still in progress.*