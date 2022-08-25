import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ResultsTable, { ResultsTableProps } from "./ResultsTable";
import {
  exampleTeamData,
  exampleDataTwoTeams,
  exampleDataFourTeams,
} from "../../testData";
import React from "react";

describe("<ResultsTable>", () => {
  let component;

  const renderComponent = (data?: ResultsTableProps[]) => {
    if (component) component.unmount();
    component = render(<ResultsTable data={data ?? []} />);
  };

  beforeEach(() => {
    renderComponent();
  });

  it("Displays a table with data-testid 'results-table'", async () => {
    const resultsTable = await screen.findByTestId("results-table");
    expect(resultsTable).toBeInTheDocument();
  });

  it("Displays the header 'Rank', 'Team', 'Points' and 'Members'", () => {
    const rankHeader = screen.getByText("Rank");
    const teamHeader = screen.getByText("Team");
    const pointsHeader = screen.getByText("Points");
    const membersHeader = screen.getByText("Members");

    expect(rankHeader).toBeInTheDocument();
    expect(teamHeader).toBeInTheDocument();
    expect(pointsHeader).toBeInTheDocument();
    expect(membersHeader).toBeInTheDocument();
  });

  describe("when there is one entry to show", () => {
    beforeEach(() => {
      renderComponent([exampleTeamData]);
    });

    it("displays the team rank and name", () => {
      const teamRank = screen.getByText("1");
      const teamName = screen.getByText("team name");

      expect(teamRank).toBeInTheDocument();
      expect(teamName).toBeInTheDocument();
    });

    it("displays the team score", () => {
      const teamScore = screen.getByText("200");

      expect(teamScore).toBeInTheDocument();
    });

    it("displays the team crest before the team name", () => {
      const teamCrest = screen.getByTestId("team-crest");

      expect(teamCrest).toBeInTheDocument();
    });

    it("displays the team members, with their scores, in sorted from higher to lower", () => {
      const teamScore = screen.getByText("One (120), Two (80)");
      expect(teamScore).toBeInTheDocument();
    });

    it("displays the team members, with their scores, in sorted from higher to lower", () => {
      const teamScore = screen.getByText("One (120), Two (80)");
      expect(teamScore).toBeInTheDocument();
    });
  });

  describe("when there is more than one entry to show", () => {
    beforeEach(() => {
      renderComponent(exampleDataFourTeams);
    });

    it("displays all rows", () => {
      const rows = screen.getAllByTestId("results-table-row");
      expect(rows).toHaveLength(4);
    });

    it("sorts teams by score, higher to lower", () => {
      const rows = screen.getAllByTestId("results-table-row");

      expect(rows[0]).toHaveTextContent("1");
      expect(rows[0]).toHaveTextContent("team winner");

      expect(rows[1]).toHaveTextContent("2");
      expect(rows[1]).toHaveTextContent("team two");

      expect(rows[3]).toHaveTextContent("4");
      expect(rows[3]).toHaveTextContent("team loser");
    });

    it("does not display the team crest before the team name after the fourth line", () => {
      const teamCrests = screen.getAllByTestId("team-crest");
      expect(teamCrests).toHaveLength(3);
    });
  });
});
