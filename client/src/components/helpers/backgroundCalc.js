module.exports = (articles) => {

  // If user is logged in
  if (articles && articles._id) {
  // If user have red more than 9 articles
    if (articles.article.length > 9) {

      // Get number of left & right articles
      const redLeftArticles = articles.article.filter( article => article.stance === 1).length;
      const blueRightArticles = articles.article.filter( article => article.stance === 10).length;

      // Calculate proportion of stance
      const leftUserStance = redLeftArticles / (redLeftArticles + blueRightArticles);
      const rightUserStance = blueRightArticles / (redLeftArticles + blueRightArticles);

      if (leftUserStance > 0.5) {
      // If stance sways left, render red background and white opacity according to stance
        const opacity = rightUserStance * 2;
        return ['#E11F1C', opacity];
      } else if (leftUserStance === 0.5) {
      // If stance sways is in middle, render gray background and 0 opacity
        return ['rgb(250, 249, 248)', 0];
      } else {
      // If stance sways right, render blue background and white opacity according to stance
        const opacity = leftUserStance * 2;
        return ['#1b87bb', opacity];
      }
    } else {
    // If user has red less than 10 articles, render gray background and 0 opacity
      return ['rgb(250, 249, 248)', 0];
    }
  } else {
    // If user is not logged in, return grey background
    return ['rgb(250, 249, 248)', 0];
  }
};