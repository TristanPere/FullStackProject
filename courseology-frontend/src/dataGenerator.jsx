import React from 'react'
import { mockcourse } from './courseJSON';
const dataGenerator = () => {
    let profs = mockcourse.courses.map((courses) => {
        return courses.professor;
      });
      profs = [...new Set(profs)];
      let profsCourse = profs.map((profs) => {
        let courses = mockcourse.courses.filter((course) => {
          return course.professor == profs;
        });
        let coursesTitle = courses.map((course) => {
          return course.courseTitle;
        });
        let coursesSchool = courses.map((course) => {
          return course.school;
        });
        return [profs, coursesTitle, coursesSchool[0]];
      });
      let professors = [];
      for (let i = 0; i < 21; i++) {
        professors[i] = {
          id: 
          profs[i].split(" ")[1].slice(0, 3),
          firstName: profs[i].split(" ")[1],
          lastName: profs[i].split(" ")[2],
          email:
            profs[i].split(" ")[2].slice(0, 3).toLocaleLowerCase() +
            profs[i].split(" ")[1].slice(0, 3) +
            "@onlineC+.edu",
          school: profsCourse[i][2][0],
          courses: profsCourse[i][1],
          idImage: "",
          pre_nominals: profs[i].split(" ")[0],
        };
      }
      console.log(professors);
  return (
    <div>dataGenerator</div>
  )
}

export default dataGenerator