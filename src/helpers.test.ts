import { formatMembersForDisplay, sortGroupsByScore } from "./helpers";
import { ResultsTableProps } from "./components/ResultsTable/ResultsTable";
import { exampleDataTwoTeams } from "./testData";

describe("the formatMembersForDisplay", () => {
  it("given undefined, returns an empty string", () => {
    const formattedText = formatMembersForDisplay({ members: undefined });
    expect(formattedText).toEqual("");
  });

  it("returns the member names followed by their score, sorted highest to lowest, comma separated", () => {
    const formattedText = formatMembersForDisplay({
      members: [
        { name: "Two", points: 30 },
        { name: "One", points: 50 },
      ],
    });
    expect(formattedText).toEqual("One (50), Two (30)");
  });
});

describe("the sortGroupsByScore", () => {
  it("given undefined returns an empty array", () => {
    const result = sortGroupsByScore(undefined);
    expect(result).toEqual([]);
  });

  it("given an empty array returns an empty array", () => {
    const result = sortGroupsByScore([] as ResultsTableProps[]);
    expect(result).toEqual([]);
  });

  it("given an array with 2 groups will sort them by score, highest to lowest", () => {
    const result = sortGroupsByScore(exampleDataTwoTeams);
    expect(result[0]).toHaveProperty("name", "team winner");
    expect(result[1]).toHaveProperty("name", "team loser");
  });
});
