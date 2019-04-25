// var $form = $('form#test-form'),
//   url = 'https://script.google.com/macros/s/AKfycbxT6noDUFGTdY2EICMi-I75j9Cv64Ni9_dp8Dj-Ztcg4Bjfzi7J/exec'

// $(document).ready(function () {

//     var name = $('#name').val();
//     var email = $('#email').val();
//     var phone = $('#phone').val();
//     var project = $('#project_name').val();
  
//     $.ajax({
//       url: "https://script.google.com/macros/s/AKfycbxT6noDUFGTdY2EICMi-I75j9Cv64Ni9_dp8Dj-Ztcg4Bjfzi7J/exec",
//       data: {
//         name: name,
//         email: email,
//         phone: phone,
//         project: project
//       },
//       type: "POST",
//       dataType: "jsonp",
//       statusCode: {
//         0: function () {
//           console.log("si");
//           // window.location.replace("ThankYou.html");
//         },
  
//         200: function () {
//           console.log("no");
//           // window.location.replace("ThankYou.html");
//         }
//       }
//     });

// });



// FUNCIONA MAE, SE ME OLVIDABA QUE AY QUE METERLO DENTRO DE DOCUMENT READY A CARAI!
  // $('form.test-form').submit(function (e) {

  //   var name = $('#name').val();
  //   var email = $('#email').val();
  //   var phone = $('#phone').val();
  //   var project = $('#project_name').val();

  //   $.ajax({
  //     url: "https://script.google.com/macros/s/AKfycbxT6noDUFGTdY2EICMi-I75j9Cv64Ni9_dp8Dj-Ztcg4Bjfzi7J/exec",
  //     data: {
  //       name: name,
  //       email: email,
  //       phone: phone,
  //       project: project
  //     },
  //     type: "POST",
  //     dataType: "json",
  //     statusCode: {
  //       0: function () {
  //         console.log("si");
  //         // window.location.replace("ThankYou.html");
  //       },

  //       200: function () {
  //         console.log("no");
  //         // window.location.replace("ThankYou.html");
  //       }
  //     }
  //   });
  // })