exports.handler = async event => {
  if(event.headers.referer && event.headers.referer.includes('facebook')) {
    return {
      statusCode: 301,
      headers: {
        location: 'https://www.google.com/'
      }
    }
  } else {
    return {
      statusCode: 200,
      headers: {
        'Content-type': 'text/html; charset=UTF-8',
      },
      body: `


    `,
    }
  }
}
