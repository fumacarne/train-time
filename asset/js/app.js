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
        var minutoslejos = $('#minutes').val();
        var proximallegada = $('#nextTrain').val();
        var frecuencia = $('#frecuency').val()
      console.log(searchInput);
      console.log(destinos);
      console.log(minutoslejos);
      console.log(proximallegada);
      console.log(frecuencia);

    db.collection("Schedule").doc(searchInput).set({
        Train: searchInput,
        Destination: destinos,
        Frecuency:frecuencia,
        Next_Arrival: proximallegada,
        Minutes_away:4,
    })
    .then(function() {
        console.log("Document successfully written!");
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);

    })
    db.collection("Schedule").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            $(".show").append(`${doc.id} => ${doc.data()}`);
            console.log("DEBUG")
            count = doc.data().text;
            text.textContent = count;
            $(".show").append(count);
        });
    });;})