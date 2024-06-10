import { Controller } from "@hotwired/stimulus"
import { createConsumer } from "@rails/actioncable"

// Connects to data-controller="chatroom-subscription"
export default class extends Controller {
  static targets = ['list']
  static values = {
    chatroomId: Number
  }
  connect() {
    console.log(this.chatroomIdValue)
    // console.log('Hello from chatroom subscription')
     this.subscription = createConsumer().subscriptions.create(
      { channel: 'ChatroomChannel', id: this.chatroomIdValue },
      { received: (data) => {
        // console.log(data)
        this.listTarget.insertAdjacentHTML('beforeend', data)
        // scroll to the bottom of the list container
        this.listTarget.scrollTo(0, this.listTarget.scrollHeight)
      }}
      // receive the new message content
      // add the to the dom
    )
  }

  resetForm(event) {
    // console.log(event.target)
    event.target.reset()
  }

  disconnect() {

  }
}
