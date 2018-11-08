const { GraphQLID } = require("graphql");

const _ = require("lodash");

const { UserType } = require("../Types");

var user = [
  {
    name: "Clemente Serrano",
    id: "1",
    email: "clemente@gmail.com",
    password: "clemente"
  },
  {
    name: "Antonia Biggs",
    id: "2",
    email: "antonia@gmail.com",
    password: "antonia"
  },
  {
    name: "Maria Jesus Bigss",
    id: "3",
    email: "jesus@gmail.com",
    password: "jesus"
  }
];

module.exports = {
  type: UserType,
  args: { id: { type: GraphQLID } },
  resolve(patern, args) {
    return _.find(user, { id: args.id });
  }
};
