(function($) {
  var trigger = '<span id="_toChannel" class="linkStatus">@channel</span> | ';
  $("#_toListSelectAll").before(trigger);
  $("#_toChannel").click(function(e){
    var currentChat = $("#_chatText").val();
    var $users = $("#_toList").find("ul._cwLTList").children("li");
    var to_strings = "";
    $users.each(function(index, user) {
      var id = $(user).attr("data-cwui-lt-value");
      to_strings += "[To:"+id+"]";
    });
    to_strings += "\n";
    $("#_chatText")
      .focus()
      .val(to_strings+currentChat);
  });
})($);

/***********************
how to

## jQuery is already loaded on Chatwork pages
## DOM of user list on that channel
$("#_toList").find("ul._cwLTList").children("li");

## where is user ID? (it's value of LI elements)
$(this).rel("data-cwui-lt-value");
*** but it's loaded with AJAX when "TO" is clicked. ***

## Chat Text DOM
$("_chatText");

## Format for "TO"
\[To:%ID%\]

## DOM of "Select All Users"
$("#_toListSelectAll");
********************/
