# Applitools Test Layout Project

This repo illustrates a discovered issue with Applitools VRT testing, where an
internally scrolled element will fail to properly be tested in Applitools with the
region / fully configurations when that element uses the CSS
`scroll-behavior: smooth` declaration.

You can test this by running a VRT test with this property enabled, vs disabled.

When enabled, the test will fail to capture the full window, and the result you will
see in Applitools will be a windowed screenshot of an arbitrary part of the content.

Disabling the CSS property will yield the expected results.

## How to use

1. Create a dotenv (`.env`) file in the project root with the following variables:

- `APPLITOOLS_API_KEY`: Your Applitools API Key
- `APPLITOOLS_SERVER`: Applitools server to hit

2. Start server `npm start`
3. With server running, run the Applitools test `npm test`
