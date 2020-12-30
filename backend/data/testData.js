const test = {
  _id: "5febfcafded39c17d844e4b1",
  createdAt: "2020-12-30T04:06:07.374Z",
  title: "test title",
  description: "test descrption",
  markdown: "# Test Morkdown\r\n## header two\r\n### header two\r\n> We're living the future so\r\n> the present is our past.\r\n\r\nhttp://github.com - automatic!\r\n[GitHub](http://github.com)\r\n\r\nI think you should use an\r\n`<addr>` element here instead.\r\n\r\n```javascript\r\nfunction fancyAlert(arg) {\r\n  if(arg) {\r\n    $.facebox({div:'#foo'})\r\n  }\r\n}\r\n```",
  slug: "test-title",
  sanitizedHtml: "<h1 id=\"test-morkdown\">Test Morkdown</h1>\n<h2 id=\"header-two\">header two</h2>\n<h3 id=\"header-two-1\">header two</h3>\n<blockquote>\n<p>We're living the future so\nthe present is our past.</p>\n</blockquote>\n<p><a href=\"http://github.com\">http://github.com</a> - automatic!\n<a href=\"http://github.com\">GitHub</a></p>\n<p>I think you should use an\n<code>&lt;addr&gt;</code> element here instead.</p>\n<pre><code class=\"language-javascript\">function fancyAlert(arg) {\n  if(arg) {\n    $.facebox({div:'#foo'})\n  }\n}</code></pre>\n",
}
const articles = [
  {
    _id: 1,
    title: "test article 1 title",
    description: "test article 1 description",
    markdown: "# test article 1 markdown",
    createdAt: "2020-11-30T04:06:07.374Z",
    slug: 'acticle one',
    sanitizedHtml: '<h1 id="test-morkdown">Test Morkdown</h1>'
  },
  test
]
export default articles