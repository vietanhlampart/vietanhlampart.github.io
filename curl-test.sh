#!/bin/bash
curl -X POST -H "Authorization: key=AAAAtFaCE0A:APA91bGmTL7FQVExTtYxIOc9-BS68L2TNPw5jzFPHT09jjMd0wsy0MgmIMpPZrE9YPNHw1Nd-wL0J2pw0L5B_W1xbbanuZEu4J5FsiBsk1OCBR4sOMIrx7I2Z7H8Do1HNWho0t1MekVf" -H "Content-Type: application/json" \
   -d '{
  "data": {
    "notification": {
        "title": "Viet Anh Notification",
        "body": "Hello Việt Em",
        "icon": "/itwonders-web-logo.png",
    }
  },
  "to": "fC2yMrv3ULffR4bVWQ46Zm:APA91bE1Uf7aTBQHjWBCNQ89o6wG60bdAwKPDPrN2Ox1hTqABRmAiubZYdOpNXtFTxv9-hCBH2_uNcQynrWFiJJm1E6S0QQImsxyWnxUS0KpxTPYNZeUr6xvdP1fVsy_oyCEKPZfRZI3"
}' https://fcm.googleapis.com/fcm/send
