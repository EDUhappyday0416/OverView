import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePlaneData = defineStore("planeData", {
  state: () => ({
    planeData: [
      {
        "id": 1,
        "flight": {
          "departure": "BNE",
          "destination": "SYD",
          "flightNumber": "RS 11",
          "duration": "2h 30m"
        },
        "date": "09/06/2023",
        "departureTime": "17:45",
        "passenger": "John Doe",
        "gateSeat": "A1/1A",
        "qrcode": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/QRcode_image.svg/1200px-QRcode_image.svg.png"
      },
      {
        "id": 2,
        "flight": {
          "departure": "SYD",
          "destination": "MEL",
          "flightNumber": "RS 12",
          "duration": "3h 30m"
        },
        "date": "10/06/2023",
        "departureTime": "12:30",
        "passenger": "Jane Smith",
        "gateSeat": "B2/2B",
        "qrcode": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/QRcode_image.svg/1200px-QRcode_image.svg.png"
      },
      {
        "id": 3,
        "flight": {
          "departure": "MEL",
          "destination": "ADL",
          "flightNumber": "RS 13",
          "duration": "1h 45m"
        },
        "date": "11/06/2023",
        "departureTime": "15:20",
        "passenger": "Alice Jones",
        "gateSeat": "C3/3C",
        "qrcode": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/QRcode_image.svg/1200px-QRcode_image.svg.png"
      },
      {
        "id": 3,
        "flight": {
          "departure": "MEL",
          "destination": "ADL",
          "flightNumber": "RS 13",
          "duration": "1h 45m"
        },
        "date": "11/06/2023",
        "departureTime": "15:20",
        "passenger": "Alice Jones",
        "gateSeat": "C3/3C",
        "qrcode": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/QRcode_image.svg/1200px-QRcode_image.svg.png"
      },
      {
        "id": 3,
        "flight": {
          "departure": "MEL",
          "destination": "ADL",
          "flightNumber": "RS 13",
          "duration": "1h 45m"
        },
        "date": "11/06/2023",
        "departureTime": "15:20",
        "passenger": "Alice Jones",
        "gateSeat": "C3/3C",
        "qrcode": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/QRcode_image.svg/1200px-QRcode_image.svg.png"
      },
      {
        "id": 3,
        "flight": {
          "departure": "MEL",
          "destination": "ADL",
          "flightNumber": "RS 13",
          "duration": "1h 45m"
        },
        "date": "11/06/2023",
        "departureTime": "15:20",
        "passenger": "Alice Jones",
        "gateSeat": "C3/3C",
        "qrcode": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/QRcode_image.svg/1200px-QRcode_image.svg.png"
      },
      {
        "id": 3,
        "flight": {
          "departure": "MEL",
          "destination": "ADL",
          "flightNumber": "RS 13",
          "duration": "1h 45m"
        },
        "date": "11/06/2023",
        "departureTime": "15:20",
        "passenger": "Alice Jones",
        "gateSeat": "C3/3C",
        "qrcode": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/QRcode_image.svg/1200px-QRcode_image.svg.png"
      },
      {
        "id": 3,
        "flight": {
          "departure": "MEL",
          "destination": "ADL",
          "flightNumber": "RS 13",
          "duration": "1h 45m"
        },
        "date": "11/06/2023",
        "departureTime": "15:20",
        "passenger": "Alice Jones",
        "gateSeat": "C3/3C",
        "qrcode": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/QRcode_image.svg/1200px-QRcode_image.svg.png"
      },
      {
        "id": 3,
        "flight": {
          "departure": "MEL",
          "destination": "ADL",
          "flightNumber": "RS 13",
          "duration": "1h 45m"
        },
        "date": "11/06/2023",
        "departureTime": "15:20",
        "passenger": "Alice Jones",
        "gateSeat": "C3/3C",
        "qrcode": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/QRcode_image.svg/1200px-QRcode_image.svg.png"
      },
      {
        "id": 3,
        "flight": {
          "departure": "MEL",
          "destination": "ADL",
          "flightNumber": "RS 13",
          "duration": "1h 45m"
        },
        "date": "11/06/2023",
        "departureTime": "15:20",
        "passenger": "Alice Jones",
        "gateSeat": "C3/3C",
        "qrcode": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/QRcode_image.svg/1200px-QRcode_image.svg.png"
      },
    ]
  }),

  getters: {
    
  },
  actions: {
    async increment() {
      try {
        const lastIndex = this.planeData.length - 1
        for (let i = lastIndex + 1; i < lastIndex + 8; i++) {
          this.planeData.push({
            id: i,
            flight: {
              departure: "BNE",
              destination: "SYD",
              flightNumber: "RS 11",
              duration: "2h 30m"
            },
            date: "09/06/2023",
            departureTime: "17:45",
            passenger: "John Doe",
            gateSeat: "A1/1A",
            qrcode: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/QRcode_image.svg/1200px-QRcode_image.svg.png"
          })
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
});