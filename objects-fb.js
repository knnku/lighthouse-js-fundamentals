/*
 * Programming Quiz: Facebook Friends (7-5)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have an object `facebookProfile`
 * - The `facebookProfile` object should have the `name` (string), `friends` (number), and `messages` (array of strings) property
 * - Your `facebookProfile` object should have the `postMessage()`, `deleteMessage()`, `addFriend()` and `removeFriend()` method
 * - Carefully implement the desired functionality of each method, as decribed above
 */


// TIP - 
// In an array, 
// - addition at the end is done using push() method
// - addition at a specific index is done using splice() method
// - deletion from the beginning is done using pop() method
// - deletion from a specific index is done using splice() method

// your code goes here


var facebookProfile = {
  name: "John Doe",
  friends: 500,
  messages: ["this", "that", "shit"],

  addFriend: function() {
    this.friends += 1;
    return this.friends;
  },
  removeFriend: function() {
    this.friends -= 1;
    return this.friends;
  },
  deleteMessage: function (index) {
    this.messages.splice(index -1,1)
    return this.messages;
  },
  postMessage: function addMessage(message) {
    this.messages.push(message);
    return this.messages;
  }
}

console.log(facebookProfile.deleteMessage(2));

