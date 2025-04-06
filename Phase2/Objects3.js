//destructuring the arrays 

const course={
    coursename:"js i hindi",
    price:"999",
    courseInstructor:"hitesh",
}

//course.courseInstructor
//to stop this repititive typing

const {courseInstructor}=course;

console.log(courseInstructor);

//if I fell that the CoursseINstructor is an huge nae tham I can use this synatax;
//destructoring
const {courseInstructor:courIns}=course;
console.log(courIns);

//API
//JSON

// {
//     "name":"hitesh",
//     "courseName":"js in hindi",
//     "price":"free",
// }

//api objects ke form mein miltw hai

//arrays ke form mein bhi milte hai


