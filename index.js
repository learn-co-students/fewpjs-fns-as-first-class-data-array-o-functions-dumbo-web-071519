const wakeDog = (dogName, dogBreed) =>{
    let wake = `Wake ${dogName} the ${dogBreed}`;
    console.log(wake);
    return wake;

}

const leashDog = (dogName, dogBreed) =>{
    let leash = `Leash ${dogName} the ${dogBreed}`;
    console.log(leash)
    return leash;

}


const walkToPark = (dogName, dogBreed) =>{
    let park = `Walk to the park with ${dogName} the ${dogBreed}`;
    console.log(park);
    return park;

}

const throwFrisbee = (dogName, dogBreed) =>{
    let fris = `Throw the frisbee for ${dogName} the ${dogBreed}`
    console.log(fris);
    return  fris

}
const walkHome = (dogName, dogBreed) => {
    let output = `Walk home with ${dogName} the ${dogBreed}`
    console.log(output);
    return output

}

const unleashDog = (dogName,dogBreed) =>{
    let output = `Unleash ${dogName} the ${dogBreed}`
    console.log(output)
    return output

}

const routine = [
wakeDog,
leashDog,
walkToPark,
throwFrisbee,
walkHome,
unleashDog,

];

const exerciseDog =(dogName,dogBreed) =>{
    let results = [];
    for (let i = 0; i < routine.length; i++){
        let activity = routine[i];
        results += activity(dogName, dogBreed);

    }
return results;
}

