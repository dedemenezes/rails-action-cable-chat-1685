class ChatroomChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    # subscribe to a SPECIFIC CHATROOM
    # find the chatroom
    chatroom = Chatroom.find(params[:id])
    # stream to the right chatrooom
    stream_for chatroom
    # binding.b
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
