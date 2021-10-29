import {render, fireEvent, screen} from '@testing-library/react'

import Typeahead from './Typeahead.component';

const data = [
    {id: 1, name: 'mike'},
    {id: 2, name: 'tony'},
    {id: 3, name: 'john'},
    {id: 4, name: 'mary'},
    {id: 5, name: 'tom'},
    {id: 6, name: 'henry'},
    {id: 7, name: 'alton'},
    {id: 8, name: 'ethan'},
    {id: 9, name: 'odelia'},
    {id: 10, name: 'michael'},
    {id: 11, name: 'hayden'},
    {id: 12, name: 'cam'}
  ];

render(<Typeahead data={data} />)

const inputNode = screen.getByPlaceholderText('Search')

test('textbox', ()=> {
    expect(inputNode.value).toBe("");
})

//fireEvent.change(inputNode, {target: {value: 'mar'}})


// test("input - mar", () => {
//     expect(inputNode.value).toBe("mar")
// })

// const mary = screen.getByText(/mary/i)
// test("mary found in dropdown", ()=> {
//     expect(mary.innerText).toBe("mary")
// })

//console.log(inputNode)
