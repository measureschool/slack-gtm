# Slack Webhook Template
This is a Google Tag Manager Tag Template for sending data to Slack channel via Custom App Webhook

## How to setup a Custom App Webhook in Slack

Loom: https://www.loom.com/share/0e684710de3b4482aceb704918b15add

Steps:
1. Login to Slack on your browser
2. Go to https://api.slack.com/apps?new_app=1 
2. Enter the name of your App and choose the Workspace
3. Click on Incoming Webhooks (Screenshot: https://take.ms/HVt8M)
4. Activate Incoming Webhooks and click on the button Add incoming Webhook to Workspace
5. Choose your channel and click allow
5. Copy your Webhook URL to the Template

## Template Options

* **Slack Webhook URL** - Holds the value of the Slack Webhook URL
* **Slack Message Text** - Holds the message that will be sent to the slack Channel by the App when the executes
* **Use advanced Variable** - When ticked the message can be replace by a GTM Variable you define. This allow for advanced message displays as explained here https://api.slack.com/block-kit The Variable needs to return a valid Block Kit format for the webhook to be able to display the message

# Author
Julian Juenemannn (https://measureschool.com)

# Release
3/17/2021 Initial Release
