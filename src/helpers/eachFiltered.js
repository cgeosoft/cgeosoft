module.exports = function (articles) {
    console.log(articles[0])
    const excludes = ['nsfw']
    return articles.filter(a => (a.tags || []).indexOf(t => excludes[t]))
}