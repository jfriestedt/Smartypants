const VoteApiUtil = {
  createVote (vote, cb) {
    $.ajax({
      url: "api/votes",
      method: "POST",
      data: {vote},
      success: function (receivedVote) {
        cb(receivedVote);
      }
    });
  }
};

module.exports = VoteApiUtil;
