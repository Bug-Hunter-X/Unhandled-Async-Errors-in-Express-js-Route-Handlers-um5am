# Unhandled Async Errors in Express.js

This repo demonstrates a common issue in Express.js applications: unhandled errors within asynchronous operations in route handlers.  The error silently crashes the app without any logging or HTTP error response.

## Bug

The `bug.js` file contains an Express.js app.  The `/` route uses `setTimeout` to simulate an asynchronous task that might throw an error.  The error is not handled properly, leading to a silent crash.

## Solution

The `bugSolution.js` file shows the fix.  It uses a `try...catch` block to handle the potential error and responds with an appropriate HTTP error status code if an error occurs.