import { ResultsTableProps } from "./components/ResultsTable/ResultsTable";

export const exampleDataTwoTeams: ResultsTableProps[] = [
  {
    name: "team loser",
    points: 200,
    members: [
      {
        name: "One",
        points: 120,
      },
      {
        name: "Two",
        points: 80,
      },
    ],
  },
  {
    name: "team winner",
    points: 400,
    members: [
      {
        name: "One",
        points: 120,
      },
      {
        name: "Three",
        points: 50,
      },
      {
        name: "Four",
        points: 50,
      },
      {
        name: "Two",
        points: 80,
      },
    ],
  },
];

export const exampleTeamData: ResultsTableProps = {
  name: "team name",
  points: 200,
  members: [
    {
      name: "One",
      points: 120,
    },
    {
      name: "Two",
      points: 80,
    },
  ],
};
