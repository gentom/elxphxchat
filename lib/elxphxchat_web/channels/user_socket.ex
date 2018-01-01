defmodule ElxphxchatWeb.UserSocket do
  use Phoenix.Socket

  ## Channels
  # channel "room:*", ElxphxchatWeb.RoomChannel
  channel "talk", ElxphxchatWeb.TalkChannel

  ## Transports
  # transport :websocket, Phoenix.Transports.WebSocket

  # heroku
  transport :websocket, Phoenix.Transports.WebSocket, timeout: 45_000
  
  # transport :longpoll, Phoenix.Transports.LongPoll

  def connect(_params, socket) do
    {:ok, socket}
  end

  def id(_socket), do: nil
end
