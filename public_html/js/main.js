function findPl(data) {
    var dataPl = data;

}

var players;
$.ajax({
    type: "GET",
    url:   "/test_tallium/public_html/players.json" , // get info about players
    dataType: "json",
    success: function(data){
         players = data;
        return players;
    },
    error: function(data) {
        console.log ('error request;', data);
    }
});

      inpButt.addEventListener("click", function (event) {
          $('h3').remove();
          $('p').remove();
        var contentInputs = document.getElementsByTagName('input');
        var content = contentInputs[0].value;
          var arrayPlayer = [];
          var id = [];
              console.log ( players);
              var part = content.split(' ');
              var partHyphen = content.split('-');
         // if(content.length > 0){
         // for (var i=0; i<part.length; i++) {
              for (var j = 0; j < players.length; j++) {
                  for(var q in players[j]) {
                     // for (var y = 0; y < part.length; y++) {
                          if (players[j][q] === content) {
                              var flagContent = true;
                              $('#player').append('<div class="col-md-8 col-xs-4 col-lg-8 col-sm-4"><h3>' + players[j].name + '</h3>' +
                                  '<p> position: ' + players[j].position +
                                  ',  nationality: ' + players[j].nationality +
                                  ',  Number: ' + players[j].jerseyNumber +
                                  ',  Birthday: ' + players[j].dateOfBirth + '</p>' +
                                  '<p >contract: ' + players[j].contractUntil + '</p>' +
                                  '<p >salary: ' + players[j].marketValue + '</p></div>');

                          } else if (players[j][q] != undefined) {
                              //if(players[j][q] != undefined){
                              var partPlayer = players[j][q].toString().split(' ');

                              for (var f = 0; f < partPlayer.length; f++) {
                                  for (var y = 0; y < part.length; y++) {

                                              if (partPlayer[f] === part[y]) {
                                                  arrayPlayer.push(players[j]);
                                                  id.push(players[j].id);
                                              }
                                     }

                                  }


                              }
                          }

                      }
          if(arrayPlayer != undefined && flagContent !== true) {
              $('h3').remove();
              $('p').remove();
              var arrInf = [];
              var idInf = [];
              for (var j = 0; j < players.length - 1; j++) {
                  for (var q in players[j]) {
                      for (var t = 0; t < arrayPlayer.length - 1; t++) {

                          for (var r in arrayPlayer[t]) {
                              console.log(players[j][q], arrayPlayer[t][r]);
                              if (players[j][q] === arrayPlayer[t][r]) {
                                  arrInf.push(arrayPlayer[t]);
                                  idInf.push(arrayPlayer[t].id);
                                  console.log(arrInf);
                              }
                          }
                          for (var z = 0; z < idInf.length - 1; z++) {
                              for (var x = 0; x < arrInf.length - 1; x++) {
                                  if (idInf[z] === arrInf[x].id) {
                                      arrInf.splice(arrInf[x], 1);
                                  }
                              }
                          }
                      }
                  }
              }
              if (arrInf != undefined) {
                  for (var y = 0; y < arrInf.length; y++) {
                      arrayPlayer[y] = arrInf[y];
                  }
                  console.log(arrayPlayer);
              }
              for (var t = 0; t < arrayPlayer.length - 1; t++) {
                  for (var w = 0; w < id.length - 1; w++) {
                      console.log(arrayPlayer, id);

                      if (id[w] === arrayPlayer[t].id) {
                          arrayPlayer.splice(arrayPlayer[t], 1);
                      }console.log(arrayPlayer, id);
                  }
              }
              if (arrayPlayer.length != 0) {
              for (var d = 0; d < arrayPlayer.length; d++) {

                  console.log(arrayPlayer, id);
                  $('#player').append('<div class="col-md-8 col-xs-4 col-lg-8 col-sm-4"><h3>' + arrayPlayer[d].name + '</h3>' +
                      '<p> position: ' + arrayPlayer[d].position +
                      ',  nationality: ' + arrayPlayer[d].nationality +
                      ',  Number: ' + arrayPlayer[d].jerseyNumber +
                      ',  Birthday: ' + arrayPlayer[d].dateOfBirth + '</p>' +
                      '<p >contract: ' + arrayPlayer[d].contractUntil + '</p>' +
                      '<p >salary: ' + arrayPlayer[d].marketValue + '</p></div>');
                }
              }
          }
})
