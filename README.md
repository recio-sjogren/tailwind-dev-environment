# tailwind-dev-environment
This is a Tailwind development environment with hot reloading so you can quick start a Tailwind playgound.

Run the following command to start the dev server: `npm run dev` 

## What did I do for this develepment environment?

1. The frontend environment is setup using Vite.
2. I have installed three other dependencies: tailwindcss, postcss and autoprefixer
3. I created a dev script that runs the vite server 
4. I generated a default tailwind config file
5. I generated a postcss config file
6. We can now work from an html file that reads directly from the tailwind.css entry file
7. Every time we make changes in the html file, the live server updates