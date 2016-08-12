const VoteApiUtil = {
  createVote (vote, receiveVote) {
    $.ajax({
      url: "api/votes",
      method: "POST",
      data: {vote},
      success: function (receivedVote) {
        receiveVote(receivedVote);
      }
    });
  }
};

module.exports = VoteApiUtil;
