import { formatMembersForDisplay, sortGroupsByScore } from "../../helpers";

export type Person = {
  name: string;
  points: number;
};

export type ResultsTableProps = {
  name: string;
  points: number;
  members: Person[];
};

const ResultsTable = ({ data }: { data: ResultsTableProps[] }) => {
  let sortedGroups: ResultsTableProps[] = sortGroupsByScore(data);

  return (
    <>
      <div data-testid={"results-table"}>
        <p>Rank</p>
        <p>Team</p>
        <p>Points</p>
        <p>Members</p>
        {data &&
          sortedGroups.map((group, index) => (
            <div data-testid={"results-table-row"} key={index}>
              <p>index</p>
              <p>{group.name}</p>
              <p>{group.points}</p>
              <p>
                {group.members
                  ? formatMembersForDisplay({
                      members: group.members,
                    })
                  : undefined}
              </p>
            </div>
          ))}
      </div>
    </>
  );
};

export default ResultsTable;
