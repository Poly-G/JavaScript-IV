// CODE here for your Lambda Classes.
class Person {
    constructor(name, age, location, gender){
        this.name = name;
        this.age = age;
        this.location = location;
        this.gender = gender;
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
    grade(student) {
        console.log(`${student.name} receives a perfect score on ${subject}`)
    }
}

class Student extends Person {
    constructor(attributes){
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubject
    }
    listsSubjects(){
        this.favSubjects.forEach(subject => {
            console.log(subject);
        });
    }
    PRAssignment(){
        console.log(`${student.name} has submitted a PR for ${subject}`)
    }
    sprintChallenge(){
        console.log(`${student.name} has begun sprint challenge on ${subject}`)
    }
}

class ProjectManagers extends Instructor {
    constructor(attributes){
        super(attributes);
        this.gradClassName = attributes.gradClassName;
        this.favInstructor = attributes.favInstructor;
    }
    standUp(){
        console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }
    debugsCode(){
        console.log(`${name} debugs ${student.name}'s code on ${subject}`)
    }
}