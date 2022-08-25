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
          <div className={"results-table-header-item"}>Rank</div>
          <div className={"results-table-header-item"}>Team</div>
          <div className={"results-table-header-item"}>Points</div>
          <div className={"results-table-header-item"}>Members</div>
        </div>
        <div className={"results-table-body"}>
          {sortedGroups.map((group, index) => (
            <div
              data-testid={"results-table-row"}
              className={"results-table-row"}
              key={index}
            >
              <div className={"results-table-row-item"}>{index + 1}</div>
              <div className={"results-table-row-item"}>{group.name}</div>
              <div className={"results-table-row-item"}>{group.points}</div>
              <div className={"results-table-row-item"}>
                {group.members
                  ? formatMembersForDisplay({
                      members: group.members,
                    })
                  : undefined}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ResultsTable;
