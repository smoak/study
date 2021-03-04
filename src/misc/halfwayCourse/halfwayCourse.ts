type Course = string;
type Prereq = Course;
export type PrereqAndCourse = [Prereq, Course];
interface CourseInfo {
  prereq?: Prereq;
  course: Course;
}

type FindHalfwayCourse = (courses: PrereqAndCourse[]) => string;
export const findHalfwayCourse: FindHalfwayCourse = (courses) => {
  const seenCourses: Record<Course, CourseInfo> = {};

  for (let i = 0; i < courses.length; i++) {
    const [prereq, course] = courses[i];

    seenCourses[prereq] = seenCourses[prereq] || {};
    seenCourses[prereq].course = course;

    seenCourses[course] = seenCourses[course] || {};
    seenCourses[course].prereq = prereq;
  }

  const firstCourse = Object.keys(seenCourses).find((course) => !seenCourses[course].prereq);

  const path: Course[] = [];
  let currentCourse = firstCourse;
  while (currentCourse) {
    path.push(currentCourse);
    currentCourse = seenCourses[currentCourse].course;
  }

  const halfwayIndex = Math.floor((path.length - 1) / 2);
  return path[halfwayIndex];
};
