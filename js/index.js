(function() {
  jQuery(function($) {
    var $count, animString, count, disabled, elem, reset;
    if (Modernizr.localstorage) {
      if (localStorage["count"]) {
        count = parseInt(localStorage["count"]);
      } else {
        localStorage["count"] = 0;
        count = 0;
      }
    } else {
      count = 0;
    }
    $count = $("#count");
    $count.html(count);
    disabled = false;
    elem = $("#button");
    animString = "animated flash";
    elem.on('click', function() {
      if (!disabled) {
        if (Modernizr.localstorage) {
          localStorage["count"] = 1 + parseInt(localStorage["count"]);
        }
        count += 1;
        $count.html(count);
        $count.addClass(animString);
        elem.addClass(animString);
        disabled = true;
        return window.setTimeout((function() {
          $count.removeClass(animString);
          elem.removeClass(animString);
          return window.setTimeout((function() {
            return disabled = false;
          }), 10 * 1000);
        }), 2000);
      } else {
        return alert("No way you took another drink that fast, wait a few seconds!");
      }
    });
    reset = $("#reset");
    return reset.on('click', function() {
      var answer, correct, x, y;
      x = Math.floor(Math.random() * 15);
      y = Math.floor(Math.random() * 15);
      correct = x + y;
      answer = prompt("Prove that you're sober to reset your count:\n" + x + " + " + y + " = ");
      if (parseInt(answer) === correct) {
        if (Modernizr.localstorage) {
          localStorage["count"] = 0;
        }
        count = 0;
        $count.html(count);
        return disabled = false;
      } else {
        return alert("Sure you're not still buzzed? That was an easy problem...");
      }
    });
  });

}).call(this);
