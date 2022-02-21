import React from 'react'
import {render,screen} from '@testing-library/react'
import Users from './components/Users'
import '@testing-library/jest-dom'
import fetch from 'node-fetch'


it('renders a loading text', () => {
    render(<Users/>)
    const Loading = screen.getByText('Loading...')
    expect(Loading).toBeInTheDocument()
})