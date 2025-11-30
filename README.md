Title: Random Quote Generator is a simple yet engaging web application that displays quotes based on the user’s selected mood.
It enhances user experience through dynamic UI changes and voice-based quote reading.
Features
-Displays a random quote on the screen
-Allows users to filter quotes by mood:
-Inspirational, Funny, Life, Love, Technology, Happy, Sad
-Reads the displayed quote aloud using the Speech Synthesis API
-Dynamic background and container colors based on the selected mood
-Smooth transitions and modern UI styling

It consists 3 important files-
- quote.html - Creates the structure of the project (layout, elements, buttons, dropdown mood selector)
- quote.css - Styles the project using gradients, glassmorphism, transitions, and mood-based themes
- quote.js - Adds interactivity, fetches quotes from API, updates UI dynamically, and handles speech synthesis

How It Works

-User chooses a mood from the dropdown list.
-The app fetches a matching random quote using the corresponding API URL.
-The quote and author are displayed dynamically.
-The app changes background colors according to the selected mood.
-By clicking Read Quote, the displayed quote is read aloud.
