type Grade = 'A' | 'B' | 'C' | 'D' | 'F';

const gradesToPoints: Record<Grade, number> = {
  A: 4,
  B: 3,
  C: 2,
  D: 1,
  F: 0,
};

const GRADE_LEVEL_MODIFIER = 0.3;

const roundToOneDecimal = (val: number): number => Math.round(val * 10) / 10;

const gradePoints = (grade: string): number => {
  if (grade.length === 1) {
    return gradesToPoints[grade as Grade];
  }

  const actualGrade = grade[0];
  const level = grade[1];
  const points = gradesToPoints[actualGrade as Grade];
  const modifier = level === '-' ? -1 : 1;

  return points + GRADE_LEVEL_MODIFIER * modifier;
};

export const calculateGPA = (grades: string[]): number => {
  const points = grades.reduce((accum, grade) => {
    const pointValue = gradePoints(grade);
    return accum + pointValue;
  }, 0);

  return roundToOneDecimal(points / grades.length);
};
