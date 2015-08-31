'use strict';

// Development specific configuration
// ==================================
module.exports = {
  // MongoDB connection options
  mongo: {
    uri: 'mongodb://localhost/tmp-dev'
  },


  facebook: {
    clientID:     '1490205011293309',
    clientSecret: '967a268d6319805afd4f0b6618440ccc',
    callbackURL:  (process.env.DOMAIN || '') + '/auth/facebook/callback'
  },

  twitter: {
    clientID:     process.env.TWITTER_ID || 'id',
    clientSecret: process.env.TWITTER_SECRET || 'secret',
    callbackURL:  (process.env.DOMAIN || '') + '/auth/twitter/callback'
  },

  google: {
    clientID:     '470523285933-o0c96q3na7e72obk6gdpsg9chherg674.apps.googleusercontent.com' || 'id',
    clientSecret: 'v6mjH94h6xWYPdkZ5U-DYgz3' || 'secret',
    callbackURL:  (process.env.DOMAIN || '') + '/auth/google/callback'
  },

  seedDB: true
};
