# Adapter(s)
- dispatch action {type, contents}
  + dispatch notification {type, contents} (if window not active)

# Logger
Logger can be configured to ignore messages of certain type

- listenFor action {type, contents}

# StateManager
- dispatch sendMessages
- listenFor messages {type, contents}
  + merge all incoming messages into single data source to restore app state
- onInit:
  + dispatch action {type, contents} (loop through from store)

# Messages
- listenFor sendMessages
  + dispatch messages {contents}

# ServicesSidebar
- listenFor action {type, contents}
  + update unread indicator appropriately

# ChannelsSidebar
- listenFor action {type, contents}
  + update message count appropriately

# NotificationManager
- listenFor action {type, contents}
  + use to send desktop notifications / update application badge -- whatever
