This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

1. Recipes Model (r):
   id, title, description, main_imageURL, images =[ image1URL, image2URL,…], videoURL, ingredients=[{'id': ing1_id, 'amount': ing1_amount, 'umId': ing1_um_id},
   {'id': ing2_id, 'amount': ing2_amount, 'umId': ing2_um_id }, … ],
   u_id, created_date, last_edit_date, avg_pins
2. Ingedients Model (ing):
   id, name
3. Unit_measurement Model (um):
   id, measurement
4. Comments Model (c):
   id, r_id, description, pins, u_id, created_date
5. Users Model (u):
   id, firstname, lastname, imageURL, email, password, favourites_recipes=[ recipe1_id, recipe2_id,…], roles_id
6. Roles Model (roles):
   id, role
