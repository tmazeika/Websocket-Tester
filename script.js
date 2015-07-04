// Generated by CoffeeScript 1.9.3
(function() {
  var timestamp, ws;

  ws = void 0;

  $(function() {
    $('#server-form').on('submit', function() {
      ws = new WebSocket($('#server').val());
      $('#log').html('');
      ws.onopen = function() {
        return $('#ws-status').html('<span class="bg-green">Connected</span>');
      };
      ws.onclose = function() {
        return $('#ws-status').html('<span class="bg-red">Not connected</span>');
      };
      ws.onmessage = function(message) {
        return $('#log').prepend('<span class="green bold">' + timestamp() + '</span> ' + message.data + '<br/>');
      };
      return false;
    });
    $('#disconnect').on('click', function() {
      return ws.close();
    });
    return $('#console-form').on('submit', function() {
      if (ws !== void 0) {
        ws.send($('#console').val());
      }
      return false;
    });
  });

  timestamp = function() {
    var date, hours, minutes, seconds;
    date = new Date;
    hours = date.getHours();
    minutes = date.getMinutes();
    seconds = date.getSeconds();
    if (hours < 10) {
      hours = '0' + hours;
    }
    if (minutes < 10) {
      minutes = '0' + minutes;
    }
    if (seconds < 10) {
      seconds = '0' + seconds;
    }
    return hours + ':' + minutes + ':' + seconds;
  };

}).call(this);

//# sourceMappingURL=script.js.map
