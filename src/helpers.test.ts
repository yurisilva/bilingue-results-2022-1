import { formatMembersForDisplay } from "./helpers";

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
