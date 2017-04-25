
//This code is for everyone. Could go in common.js
MusicMachine = new Mongo.Collection("musicMachine");

if (Meteor.isServer) {
//      MusicMachine.remove({});
      if (MusicMachine.find().count() === 0) {
      MusicMachine.insert(
          {
              t1S1: 50, t1S2: 50,
              t2S1: 50, t2S2: 50,
              t3S1: 50, t3S2: 50,
              t4S1: 50, t4S2: 50,
              t5S1: 50, t5S2: 50,
              t6S1: 50, t6S2: 50,
              t7S1: 50, t7S2: 50,
              t8S1: 50, t8S2: 50,
          
          });

    }


}