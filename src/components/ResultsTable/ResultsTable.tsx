import { formatMembersForDisplay } from "../../helpers";

export type Person = {
  name: string;
  points: number;
};

export type ResultsTableProps = {
  name: string;
  points: number;
  members: Person[];
};

const ResultsTable = ({ data: ResultsTableProps }) => {
  return (
    <>
      <div data-testid={"results-table"}>
        <p>Rank</p>
        <p>Team</p>
        <p>Points</p>
        <p>Members</p>
        {ResultsTableProps && (
          <>
            <p>1</p>
            <p>{ResultsTableProps.name}</p>
            <p>{ResultsTableProps.points}</p>
            <p>
              {ResultsTableProps.members
                ? formatMembersForDisplay({
                    members: ResultsTableProps.members,
                  })
                : undefined}
            </p>
          </>
        )}
      </div>
    </>
  );
};

export default ResultsTable;
