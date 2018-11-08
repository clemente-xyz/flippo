const { GraphQLID } = require("graphql");

const _ = require("lodash");

const { ChallengeType } = require("../Types");

var challenge = [
  { name: "Chanllege 1", id: "1", difficulty: 1 },
  { name: "Chanllege 2", id: "2", difficulty: 2 },
  { name: "Chanllege 3", id: "3", difficulty: 3 }
];

module.exports = {
  type: ChallengeType,
  args: { id: { type: GraphQLID } },
  resolve(patern, args) {
    return _.find(challenge, { id: args.id });
  }
};
