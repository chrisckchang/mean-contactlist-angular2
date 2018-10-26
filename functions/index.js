// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require("firebase-functions");

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require("firebase-admin");
admin.initializeApp();

exports.countPostsChange = functions.database
  .ref("/posts/{datetime}")
  .onWrite(change => {
    const collectionRef = change.after.ref.parent;
    const countRef = collectionRef.parent.child("count_posts");

    let increment;
    if (change.after.exists() && !change.before.exists()) {
      increment = 1;
    } else if (!change.after.exists() && change.before.exists()) {
      increment = -1;
    } else {
      return null;
    }

    // Return the promise from countRef.transaction() so our function
    // waits for this async event to complete before it exits.
    return countRef
      .transaction(current => {
        return (current || 0) + increment;
      })
      .then(() => {
        return console.log("Counter updated.");
      });
  });
