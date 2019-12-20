
    // instantiate a moment object
    var NowMoment = moment().format('LTS');
    
    // instantiate a JavaScript Date object
    var NowDate = new Date();


    
    // display value of moment object in #displayMoment div
    var eDisplayMoment = document.getElementById('displayMoment');
    eDisplayMoment.innerHTML = NowMoment;


    // Firebase set up 


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

    db.collection("Schedule").add({
        Train: searchInput,
        Destination: destinos,
        Frecuency:frecuencia,
        Next_Arrival: proximallegada,
        Minutes_away:4,


    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
})