function wakeDog(dogName, dogBreed) {
  const string = `Wake ${dogName} the ${dogBreed}`;
  console.log(string);
  return string;
};
function leashDog(dogName, dogBreed) {
  const string = `Leash ${dogName} the ${dogBreed}`;
  console.log(string);
  return string;
};
function walkToPark(dogName, dogBreed) {
  const string = `Walk to the park with ${dogName} the ${dogBreed}`;
  console.log(string);
  return string;
};
function throwFrisbee(dogName, dogBreed) {
  const string = `Throw the frisbee for ${dogName} the ${dogBreed}`;
  console.log(string);
  return string;
};
function walkHome(dogName, dogBreed) {
  const string = `Walk home with ${dogName} the ${dogBreed}`;
  console.log(string);
  return string;
};
function unleashDog(dogName, dogBreed) {
  const string = `Unleash ${dogName} the ${dogBreed}`;
  console.log(string);
  return string;
};

const routine = [
  wakeDog,
  leashDog,
  walkToPark,
  leashDog,
  walkToPark
];

// function exerciseDog(dogName, dogBreed) {
//   const summary = []
//   for (const i = 0; i < routine.length-1; i++;) {
//     function activity = routine[i];
//     const description = activity(dogName, dogBreed);
//     summary.push(description);
//   };
//   return summary;
// };

function exerciseDog(dogName, dogBreed) {
  const summary = []
  for (const activity of routine.entries()) {
    const description = activity(dogName, dogBreed);
    summary.push(description);
  };
  return summary;
};
