const RecipeList = ({ searchResults }) => {
    return (
      <div>
        {searchResults.map((recipe, index) => (
          <div key={index}> 
            <div>{recipe.title}</div>
          </div>
        ))}
      </div>
    );
  };
  