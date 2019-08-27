function wakeDog(dogName, dogBreed) {
    return `Wake ${dogName} the ${dogBreed}`;
}

function leashDog(dogName, dogBreed) {
    return `Leash ${dogName} the ${dogBreed}`;
}
function walkToPark(dogName, dogBreed) {
    return `Walk to the park with ${dogName} the ${dogBreed}`;
}

function throwFrisbee(dogName, dogBreed) {
    return `Throw the frisbee for ${dogName} the ${dogBreed}`;
}

function walkHome(dogName, dogBreed) {
    return `Walk home with ${dogName} the ${dogBreed}`;
}

function unleashDog(dogName, dogBreed) {
    return `Unleash ${dogName} the ${dogBreed}`;
}

let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

function exerciseDog(dogName, dogBreed){
    let activities =[];
    for (let i = 0; i<routine.length; i++) {
        let activity = routine[i];
        
        activities.push(activity(dogName, dogBreed)); 
    }
    return activities;
}