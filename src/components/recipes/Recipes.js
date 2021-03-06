import React, { Component } from 'react';
import { connect } from 'react-redux'

export class Recipes extends Component {
  render(){
    const recipes = this.props.recipes.map((recipe, index) => {
      return <li key={index}>Name: {recipe.name}, Calories: {recipe.calories}</li>
    })
    return(
        <div>
          <ul>
            {recipes}
          </ul>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes
  }
}

export const ConnectedRecipes = connect(mapStateToProps)(Recipes)
