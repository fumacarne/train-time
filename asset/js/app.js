var firebaseConfig = {
    apiKey: "AIzaSyATut6iwb6Zd6MSwuiJ2m1peFvMbUUP0AU",
    authDomain: "cachipun-ba30e.firebaseapp.com",
    databaseURL: "https://cachipun-ba30e.firebaseio.com",
    projectId: "cachipun-ba30e",
    storageBucket: "cachipun-ba30e.appspot.com",
    messagingSenderId: "114241077975",
    appId: "1:114241077975:web:2270c9fa81831b61536692"};

firebase.initializeApp(firebaseConfig);
     
    // instantiate a moment object
    var NowMoment = moment().format('LTS');
    
    // instantiate a JavaScript Date object
    var NowDate = new Date();
   
    // display value of moment object in #displayMoment div
    var eDisplayMoment = document.getElementById('displayMoment');
    eDisplayMoment.innerHTML = NowMoment;

var text=document.querySelector("#train")

var db = firebase.firestore();

    $("button").on("click", function() {
        var searchInput = $("#train").val();
        var destinos = $('#destination').val();
        var proximallegada = $('#nextTrain').val();
        var frecuencia = $('#minutes').val();
      console.log(searchInput);
      console.log(destinos);
      console.log(proximallegada);
      console.log(frecuencia);

    db.collection("Schedule").doc(searchInput).set({
        Train: searchInput,
        Destination: destinos,
        Next_Arrival: proximallegada,
        Frecuency:frecuencia,
       
    })
    .then(function() {
        console.log("Document successfully written!");
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    db.collection("Schedule").onSnapshot(function(snaps) {
        $("#train-times").empty();
        snaps.docs.forEach(function(doc) {
          const { Train, Destination, Next_Arrival, Frecuency } = doc.data();
          $("#train-times").append(`<tr>
            <td>${Train}</td>
            <td>${Destination}</td>
            <td>${Next_Arrival}</td>
            <td>${Frecuency}</td>
          </tr>`);
        });
      });})})
    function view (){db.collection("Schedule").onSnapshot(function(snaps) {
        $("#train-times").empty();
        snaps.docs.forEach(function(doc) {
          const { Train, Destination, Next_Arrival, Frecuency } = doc.data();
          $("#train-times").append(`<tr>
            <td>${Train}</td>
            <td>${Destination}</td>
            <td>${Next_Arrival}</td>
            <td>${Frecuency}</td>
          </tr>`);
        });
      });}


        view()