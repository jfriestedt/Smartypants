const VoteApiUtil = require('../util/vote_api_util');
const AppDispatcher = require('../dispatcher/dispatcher');
const VoteConstants = require('../constants/vote_constants');

const VoteActions = ({
  createUpvote (vote) {
    VoteApiUtil.createVote(vote, this.receiveVote);
  },

  createDownvote (vote) {
    VoteApiUtil.createVote(vote, this.receiveVote);
  },

  receiveVote (vote) {
    AppDispatcher.dispatch({
      actionType: VoteConstants.VOTE_RECEIVED,
      vote: vote
    });
  }
});

module.exports = VoteActions;
