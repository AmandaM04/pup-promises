const domString = require('./dom');

// const getAllPups = () => {
//   let pups = [];
//   $.get('./db/pup1.json')
//     .done((data1) => {
//       pups = [...data1.pup1,];
//       $.get('./db/pup2.json')
//         .done((data2) => {
//           pups = [...pups, ...data2.pup2,];
//           $.get('./db/pup3.json')
//             .done((data3) => {
//               pups = [...pups, ...data3.pup3,];
//               domString(pups);
//             })
//             .fail((error3) => {
//               console.error(error3);
//             });
//         })
//         .fail((error2) => {
//           console.error(error2);
//         });
//     })
//     .fail((error1) => {
//       console.error(error1);
//     });
// };

const firstPupJSON = () => {
  return new Promise((resolve, reject) => {
    $.get('./db/pup1.json')
      .done((data) => {
        resolve(data.pup1);
      })
      .fail((error) => {
        reject(`Oi got an error!`, error);
      });
  });
};

const secondPupJSON = () => {
  return new Promise((resolve, reject) => {
    $.get('./db/pup2.json')
      .done((data) => {
        resolve(data.pup2);
      })
      .fail((error) => {
        reject(`Oi got an error!`, error);
      });
  });
};

const thirdPupJSON = () => {
  return new Promise((resolve, reject) => {
    $.get('./db/pup3.json')
      .done((data) => {
        resolve(data.pup3);
      })
      .fail((error) => {
        reject(`Oi got an error!`, error);
      });
  });
};

// const getAllPups = () => {
//   let dogos = [];
//   return firstPupJSON()
//     .then((result) => {
//       dogos = [...result,];
//       return secondPupJSON();
//     }).then((result2) => {
//       dogos = [...dogos, ...result2,];
//       return thirdPupJSON();
//     }).then((result3) => {
//       dogos = [...dogos, ...result3,];
//       return Promise.resolve(dogos);
//     })
//     .catch((errorMsg) => {
//       console.error(errorMsg);
//     });
// };

const getAllPups = () => {
  return Promise.all([firstPupJSON(), secondPupJSON(), thirdPupJSON(),])
    .then((results) => {
      const dogos = [...results[0], ...results[1], ...results[2],];
      return Promise.resolve(dogos);
    }).catch((error) => {
      console.error(error);
    });
};

// const singlePup = () => {
//   getAllPups.then((pups) => {
//     const foodId = pups[0].favFoodId;
//   });
// };

const initializer = () => {
  getAllPups().then((dogos) => {
    domString(dogos);
  });
};

module.exports = {
  initializer,
  // singlePup,
};
