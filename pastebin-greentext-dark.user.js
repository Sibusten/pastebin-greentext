// ==UserScript==
// @name        Pastebin Greentext (Dark)
// @namespace   https://github.com/Sibusten
// @include     http://pastebin.com/*
// @include     https://pastebin.com/*
// @require     https://code.jquery.com/jquery-3.1.1.min.js
// @version     1.1
// @grant       none
// ==/UserScript==

$(document).ready(function(){
  $doc = $("#selectable > ol").first();
  if($doc.hasClass("text"))
  {
    $(".de1, .de2").each(function()
    {
      var text = $(this).text();
      var regex = /^>/;
      if(regex.test(text))
      {
        $(this).css('color', '#789922');
      }
      else
      {
        $(this).css('color', '#ffffff');
      }
      $(this).css('background-color', '#000000');
    });
  }
});
