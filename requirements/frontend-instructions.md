# Project Overview
Use this guide to build a website that allows users to learn about Daydreamers Dog Training, a service through which Madeline Pape trains dogs for clients in New York City, Brooklyn and some surrounding areas.

# Feature Requirements
- The website should be as simple as possible, while still giving users lots of information about Madeline and her services, mainly through one homepage.
- There should be an easy way to contact Madeline through the website, and when a user submits the contact form, it should send an email to dogtraining@daydreamersnyc.com.
- Madeline has multiple certifications: Certified Professional Dog Trainer (CPDT-KA), Family Dog Mediation (FDM), and Catch Certified Trainer (CCDT). These certifications are important and should be displayed on the homepage.
- The website should have lightning-fast performance.
- The entire site should be extremely mobile-friendly.
- We will use Next.js, Shadcn, Lucid, Clerk, MongoDB, and Tailwind CSS to build the site.
- Ultimately, the website will be hosted at training.daydreamersnyc.com.

# Color Scheme
- The main color should be #f7f7f7.
- The secondary color should be #1513ff
- The accent color should be #FFCBBA
- Another accent color should be #FFEBB8
- The last accent color should be #F6502C
- The heading font should be Fredoka, which you can import from Google Fonts.
- The secondary font should be Quicksand, which you can also import from Google Fonts.


# Relevant Docs
This is the reference documentation for Clerk: https://clerk.com/docs/references/nextjs/
The PNG files in the /requirements folder show the current design of the website. Nothing is necessarily wrong with the current design, but you are encouraged to make it better. The current website is currently hosted at training.daydreamersnyc.com.

# Current File Structure
TRAINING-DAYDREAMERS-COM/
├── app/
│   ├── fonts/
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   └── ui/
│       ├── button.tsx
│       ├── card.tsx
│       └── input.tsx
├── lib/
│   └── utils.ts
├── node_modules/
├── requirements/
│   ├── frontend-instructions.md
│   └── .cursorrules
├── .eslintrc.json
├── .gitignore
├── components.json
├── next-env.d.ts
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── README.md
├── tailwind.config.ts
└── tsconfig.json


# Rules
- All new components should go in /components and be named like example-component.tsx unless otherwise specified.
- All new pages go in /app.