const fs = require('fs')
const path = require('path')
const cheerio = require('cheerio')

;(() => {
  writei18nIndexFiles()
})()

function writei18nIndexFiles() {
  const languages = [
    {
      title: 'Mapa de Runeterra - Runeterra RPG',
      metatags: [
        {
          name: 'description',
          content: 'Mapa de Runeterra'
        }
      ]
    },
    {
      tag: 'en',
      title: 'Runeterra Map - Runeterra RPG',
      metatags: [
        {
          name: 'description',
          content: 'Runeterra Map'
        }
      ]
    }
  ]

  const html = fs.readFileSync(path.join(__dirname, 'dist/index.html'))

  languages.forEach(language => {
    const $ = cheerio.load(html)

    // Append <title>
    $('head').append(`<title>${language.title}</title>`)

    // Append <meta>
    language.metatags.forEach(metatag => {
      $('head').append(
        `<meta name="${metatag.name}" content="${metatag.content}" />`
      )
    })

    // Write index.html with prefix (e.g. en_index.html)
    const prefix = language.tag ? `${language.tag}_` : ''
    fs.writeFileSync(path.join(__dirname, `dist/${prefix}index.html`), $.html())
  })
}
