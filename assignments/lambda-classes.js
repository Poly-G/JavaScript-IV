// CODE here for your Lambda Classes.
class Person {
    constructor(attributes){
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
    speak(){
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`)
    }
}

class Instructor extends Person {
    constructor(attributes){
        super(attributes);
        this.specialty = attributes.specialty;
        this.favLanguage = attributes.favLanguage;
        this.catchPhrase = attributes.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    }
    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`)
    }
}

class Student extends Person {
    constructor(attributes){
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubject = attributes.favSubject;
    }
    listsSubjects(){
        this.favSubject.forEach(subject => {
            console.log(subject);
        });
          
    }
    PRAssignment(student, subject){
        console.log(`${student.name} has submitted a PR for ${subject}`)
    }
    sprintChallenge(student, subject){
        console.log(`${student.name} has begun sprint challenge on ${subject}`)
    }
}

class ProjectManager extends Instructor {
    constructor(attributes){
        super(attributes);
        this.gradClassName = attributes.gradClassName;
        this.favInstructor = attributes.favInstructor;
    }
    standUp(channel){
        console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }
    debugsCode(student, subject){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
    }
}

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
});

const bob = new Instructor({
    name: 'Bob',
    location: 'FL',
    age: 30,
    gender: 'male',
    favLanguage: 'Java',
    specialty: 'OOP',
    catchPhrase: `Java is the best`
});

const poly = new Student({
    name: 'Poly',
    location: 'NV',
    age: 26,
    gender: 'female',
    previousBackground: 'Military',
    className: 'PT4',
    favSubject: ['HTML', 'CSS', 'JS']
});

const sam = new Student({
    name: 'Sam',
    location: 'CA',
    age: 29,
    gender: 'female',
    previousBackground: 'College',
    className: 'PT4',
    favSubject: ['HTML', 'CSS']
});

const dave = new ProjectManager({
    name: 'Dave',
    location: 'AZ',
    age: 32,
    gender: 'male',
    gradClassName: 'CS1',
    favInstructor: 'Bob'
});

const ryan = new ProjectManager({
    name: 'Ryan',
    location: 'WA',
    age: 34,
    gender: 'male',
    gradClassName: 'CS3',
    favInstructor: 'Jim'
});

//tests
console.log(poly.age);
ryan.speak();
bob.demo('JavaScript');
bob.grade(poly,'JavaScript');
poly.PRAssignment(poly, 'blah');
sam.sprintChallenge(sam, 'blah');
ryan.standUp('general');
dave.debugsCode(poly,'JavaScript');


poly.listsSubjects(poly);