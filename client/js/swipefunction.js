$("#swipe").swipe({
  swipe:function(event, direction, distance, duration, fingerCount) {
    $(this).text("You swiped " + direction );
  }
});