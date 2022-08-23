import React from "react";
import { formatMembersForDisplay, sortGroupsByScore } from "../../helpers";
import "./style.scss";

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
      <div data-testid={"results-table"} className={"results-table"}>
        <div className={"results-table-header"}>
          <div>Rank</div>
          <div>Team</div>
          <div>Points</div>
          <div>Members</div>
        </div>
        {sortedGroups.map((group, index) => (
          <div
            data-testid={"results-table-row"}
            className={"results-table-row"}
            key={index}
          >
            <p>{index + 1}</p>
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
