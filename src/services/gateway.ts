import {
  Person,
  ResultsTableProps,
} from "../components/ResultsTable/ResultsTable";
import { getGroups, getStudentsByGroup } from "./firebase";

const getFormattedGroup = async (group) => {
  let students: Person[] = [];
  let groupStudents = await getStudentsByGroup(group.key);
  let groupPoints = 0;
  let formattedStudent: Person;

  for (let student of groupStudents) {
    groupPoints += student.value.points;
    formattedStudent = {
      name: student.value.name,
      points: student.value.points,
    };
    students.push(formattedStudent);
  }

  const formattedGroup: ResultsTableProps = {
    name: group.value.name,
    imageUrl: group.value.imageUrl,
    points: groupPoints,
    members: students,
  };
  return formattedGroup;
};

export const getFormattedGroups = async () => {
  let groupInfo: ResultsTableProps[] = [];
  const rawGroups = (await getGroups()) || [];

  for (const group of rawGroups) {
    if (group.key) {
      const formattedGroup = await getFormattedGroup(group);
      groupInfo.push(formattedGroup);
    }
  }

  return groupInfo;
};
