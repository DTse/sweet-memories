import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
            <meta name="viewport" content="width=device-width,initial-scale=1.0, maximum-scale=1.0,shrink-to-fit=no,user-scalable=no"/>
            <link href="/static/css/App.css" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css?family=Comfortaa:300&amp;subset=greek" rel="stylesheet" />
            <link prefetch href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}