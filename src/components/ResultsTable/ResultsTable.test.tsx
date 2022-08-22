import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom'

import ResultsTable from "./ResultsTable";

describe('<ResultsTable>', () => {
    it("Displays the header 'Rank', 'Team', 'Points' and 'Members'", ()=>{
        render(<ResultsTable />);
        const rankHeader = screen.getByText("Rank");
        const teamHeader = screen.getByText("Team");
        const pointsHeader = screen.getByText("Points");
        const membersHeader = screen.getByText("Members");

        expect(rankHeader).toBeInTheDocument();
        expect(teamHeader).toBeInTheDocument();
        expect(pointsHeader).toBeInTheDocument();
        expect(membersHeader).toBeInTheDocument();
    })
});
