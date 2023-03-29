# Text to Web Display

This is a simple webapp that displays texts sent to a Twilio number.

Once a text is sent to the number, the app consumes the webhook and loads the latest text into the MongoDB collection. 

To display the most recent text, the React frontend calls the Next.js API, which reads from the database, every sixty seconds with useSWR to fetch the latest text.