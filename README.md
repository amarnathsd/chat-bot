# Project Documentation

### Authentication

The project is built using Next.js and Tailwind CSS, with Firebase handling authentication.

It supports two authentication methods:

Google Authentication

Email and Password Authentication (Includes email verification upon registration)

### Landing Page

The main website initially had a strong commercial feel, which negatively impacted UX. To improve this:

Additional sections with animations were added to create a better user experience.

These modifications also enhance message delivery without making it seem overly sales-driven.

Due to time constraints, more focus was given to UX and functionality, while UI enhancements and image selection were not prioritized.

Framer Motion was used for smooth animations.

### Login

Users cannot access any setup pages without logging in.

### Setup Page

Users need to input the following details:

Company Name

Company Website

Meta Description (Auto-fetched from the website, but can also be manually entered)

On clicking Submit, a loader appears while the website data is scraped for chatbot training.

Once completed, it displays data based on the pages present on the website.

### Bot Addition Page

Test Chatbot Button: Navigates to another page where the chatbot can be tested.

Integration Button:

Provides an option to email integration instructions to the developer.

Alternatively, it can display instructions for chatbot integration.

Test Integration Button:

Triggers confetti animation upon successful integration.

### Feedback Form

Users need to provide:

Name

Rating

Optional message (if any feedback needs to be shared)

Email field is pre-filled for convenience.


### Deplyed Site ###
https://chat-bot-ohq5.vercel.app/
