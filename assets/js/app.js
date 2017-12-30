import "phoenix_html"

import socket from "./socket"

let channel = socket.channel("talk", {});
let list    = $('#msgList');
let msg = $('#msg');
let name    = $('#usrname');

msg.on('keypress', event => {
  if (event.keyCode == 13) {
    channel.push('new_message', { name: name.val(), msg: msg.val() });
    msg.val('');
  }
});

channel.on('new_message', payload => {
  list.append(`<b>${payload.name || 'Anonymous'}:</b> ${payload.msg}<br>`);
  list.prop({scrollTop: list.prop("scrollHeight")});
});

channel.join()
  .receive("ok", resp => { console.log("Joined successfully", resp) })
  .receive("error", resp => { console.log("Unable to join", resp) })