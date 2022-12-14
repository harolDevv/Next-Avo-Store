import Document, { Html, Head, Main, NextScript } from 'next/document'



class MyDocument extends Document {


  render() {
    return (
      <Html>
        <Head>
            {/* Stylesshets */}
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;600;800;900&display=swap" rel="stylesheet" /> 
        </Head>
        <body className='body'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
