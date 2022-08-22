import {
  Person,
  ResultsTableProps,
} from "./components/ResultsTable/ResultsTable";

export const formatMembersForDisplay = ({
  members,
}: {
  members?: Person[];
}) => {
  if (!members) return "";

  let sortedPeople = members.sort((a, b) => (a.points < b.points ? 1 : -1));
  let sortedString = "";
  sortedPeople.map((person, index) => {
    sortedString += person.name;
    sortedString += ` (${person.points})`;
    if (index != sortedPeople.length - 1) sortedString += ", ";
  });

  return sortedString;
};

export const sortGroupsByScore = (
  data: ResultsTableProps[]
): ResultsTableProps[] => {
  if (!data) return [] as ResultsTableProps[];

  let sortedGroups = data.sort((a, b) => (a.points < b.points ? 1 : -1));
  return sortedGroups;
};
