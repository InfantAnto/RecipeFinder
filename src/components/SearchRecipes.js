import React, { Component } from 'react';
import { Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';

class SearchRecipes extends Component {
    render() {
        const SPACE = ' ';
        return(
            <Form inline>
                <FormGroup>
                    <ControlLabel>Ingredients</ControlLabel>
                    {SPACE}
                    <FormControl type="text" placeholder="garlic, chicken" />
                </FormGroup>
                {SPACE}
                <FormGroup>
                    <ControlLabel>Dish</ControlLabel>
                    {SPACE}
                    <FormControl type="text" placeholder="Adobo" />
                </FormGroup>
                {SPACE}
                <Button>
                    Submit
                </Button>
            </Form>
        )
    }
}

export default SearchRecipes;
