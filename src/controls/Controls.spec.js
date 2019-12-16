import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import Controls from './Controls'
import { render, fireEvent } from '@testing-library/react'
import expectExport from 'expect'

test('closes gate when clicked', () =>{
    const toggleClosed = jest.fn()
    const {getByText} = render(<Controls locked={false} closed={false} toggleClosed={toggleClosed} /> )

    const gateBtn = getByText(/close gate/i)
    fireEvent.click(gateBtn);
    expect(toggleClosed).toHaveBeenCalled();
})