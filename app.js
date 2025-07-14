//firebase configurations
const firebaseConfig = {
  apiKey: "AIzaSyDhXBA_byjG0KxXagr0R_v5RCZxW-C9faU",
  authDomain: "smartroom-35228.firebaseapp.com",
  databaseURL: "https://smartroom-35228-default-rtdb.firebaseio.com",
  projectId: "smartroom-35228",
  storageBucket: "smartroom-35228.firebasestorage.app",
  messagingSenderId: "462141562278",
  appId: "1:462141562278:web:90de089a5dc1652acb4367"
};

//initialize firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

//DOM elements
const connectionStatus = document.getElementById('connectionStatus');
const lightToggle = document.getElementById('lightToggle');
const fanToggle = document.getElementById('fanToggle');
const tvToggle = document.getElementById('tvToggle');
const lightStateusText = document.getElementById('lightStatusText');
const fanStateusText = document.getElementById('fanStatusText');
const tvStateusText = document.getElementById('tvStatusText');
const roomLightStatus = document.getElementById('roomLightStatus');
const roomFanStatus = document.getElementById('roomFanStatus');
const roomTvStatus = document.getElementById('roomTvStatus');
const lastUpdated = document.getElementById('lastUpdated');
const connectText = document.getElementById('connectText');

//update connection status
function updateConnectionStatus(connected){
    connectionStatus.classList.remove('connected', 'disconnected');
    if(connected){
        connectionStatus.classList.add('connected');
        connectText.textContent 
        = 'Connected';
    } else{
        connectionStatus.classList.add('disconnected');
        connectText.textContent 
        = 'Disconnected';
    }
}

//inialize connection status
updateConnectionStatus(false);

//listen for connection state changes
database.ref('.info/connected').on('value', (snapshot) => {
    updateConnectionStatus(snapshot.val());
})