# Text to Web Display

This is a simple webapp that displays texts sent to a Twilio number.

1. A text is sent to the Twilio number
2. Twilio's webhook hits the [storeText](storeText.js) API endpoint. 
3. The text's information is added to MongoDB.
4. Every sixty seconds (or on a defaul reload) a custom React hook with useSWR calls the [getText](getText.js) endpoint to fetch the newest text. 
5. That text is displayed. 

Built using Next.js, Tailwind CSS, Prisma, and MongoDB. 