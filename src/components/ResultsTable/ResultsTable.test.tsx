import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ResultsTable, { ResultsTableProps } from "./ResultsTable";

describe("<ResultsTable>", () => {
  let component;

  const renderComponent = (data?: ResultsTableProps) => {
    if (component) component.unmount();
    component = render(<ResultsTable data={data ?? undefined} />);
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
    const teamData: ResultsTableProps = {
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

    beforeEach(() => {
      renderComponent(teamData);
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

    it("displays the team members, with their scores, in sorted from higher to lower", () => {
      const teamScore = screen.getByText("One (120), Two (80)");

      expect(teamScore).toBeInTheDocument();
    });
  });
});
