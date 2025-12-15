const getAge = function(birth, death){
    if(!death){
        death = new Date().getFullYear();
    }
    return death - birth;
}

const findTheOldest = function(people) {
    return people.reduce((current, next) => {
        const currentAge = getAge(current.yearOfBirth, current.yearOfDeath);
        const nextAge = getAge(next.yearOfBirth, next.yearOfDeath);
        return currentAge < nextAge ? next : current;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
