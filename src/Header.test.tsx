import React from 'react'
import {render, screen} from '@testing-library/react'
import Header from './components/Header'
import '@testing-library/jest-dom'

it('renders a header', () => {
    render(<Header/>)
        const heading = screen.getByText('Users Database')
        expect(heading).toBeInTheDocument()
})