if(Meteor.isClient) {
  Template.Block.helpers({
    decrement: function(num) {
      return --num;
    }
  });

  var blockCreated = 0;
  Template.Block.onCreated(function() {
    this.data.creationOrder = ++blockCreated;
  });

  var blocksRendered = 0;
  Template.Block.onRendered(function() {
    this.find('.renderingOrder').textContent = ++blocksRendered;
  });
}