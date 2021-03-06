import React, { Component } from 'react';
import { Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';

import { connect } from 'react-redux';
import { setRecipes } from '../actions';

class SearchRecipes extends Component {
    constructor() {
        super();

        this.state = {
            ingredients: '',
            dish: ''
        }
    }

    search() {
        let {ingredients, dish} = this.state;
        const url = `http://www.recipepuppy.com/api?i=${ingredients}&q=${dish}`;

        // Fetch method to access API
        fetch(url, {
            method: 'GET'
        }).then(response => response.json())
          .then(json => {this.props.setRecipes(json.results)}
           );
    }

    render() {
        const SPACE = ' ';
        return(
            <Form inline>
                <FormGroup>
                    <ControlLabel>Ingredients</ControlLabel>
                    {SPACE}
                    <FormControl
                        type="text"
                        placeholder="garlic, chicken"
                        onChange={event => this.setState({ ingredients: event.target.value })}
                      />
                </FormGroup>
                {SPACE}
                <FormGroup>
                    <ControlLabel>Dish</ControlLabel>
                    {SPACE}
                    <FormControl
                        type="text"
                        placeholder="Adobo"
                        onChange={event => this.setState({dish: event.target.value})}
                        />
                </FormGroup>
                {SPACE}
                <Button onClick={() => this.search()}>
                    Submit
                </Button>
            </Form>
        )
    }
}

export default connect(null, {setRecipes}) (SearchRecipes);