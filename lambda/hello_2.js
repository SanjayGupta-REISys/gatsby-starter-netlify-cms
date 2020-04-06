// For more info, check https://www.netlify.com/docs/functions/#javascript-lambda-functions
/*export async function handler(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: `Hello world ${Math.floor(Math.random() * 10)}` })
  };
}*/


import fetch from 'node-fetch'

const API_ENDPOINT = 'https://www.ussbir.io/api/awards.xml?keyword=sbir'

export async function handler(event, context) {
  let response
  try {
    response = await fetch(API_ENDPOINT)
    // handle response
  } catch (err) {
    return {
      statusCode: err.statusCode || 500,
      body: JSON.stringify({
        error: err.message
      })
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      data: response
    })
  }
}



// Now you are ready to access this API from anywhere in your Gatsby app! For example, in any event handler or lifecycle method, insert:
/* fetch("https://www.ussbir.io/api/awards.xml?keyword=sbir")
    .then(response => response.json())
    .then(console.log)*/
// For more info see: https://www.gatsbyjs.org/blog/2018-12-17-turning-the-static-dynamic/#static-dynamic-is-a-spectrum
