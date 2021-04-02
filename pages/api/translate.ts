import { VercelRequest, VercelResponse } from '@vercel/node'
require('dotenv').config()
/* This template relies on the request module, a simplified and user friendly
way to make HTTP requests. */
import request from 'request'
import uuidv4 from 'uuid/v4'

const subscriptionKey: string = process.env.subscriptionKey
const endpoint: string = process.env.endpoint
const region: string = process.env.region

export default (req: VercelRequest, response: VercelResponse) => {
  const options = {
    method: 'POST',
    baseUrl: endpoint,
    url: 'translate',
    qs: {
      'api-version': '3.0',
      to: ['cs'],
    },
    headers: {
      'Ocp-Apim-Subscription-Key': subscriptionKey,
      'Ocp-Apim-Subscription-Region': region,
      'Content-type': 'application/json',
      'X-ClientTraceId': uuidv4().toString(),
    },
    body: [
      {
        text: req.query.string || 'Hello World!',
      },
    ],
    json: true,
  }

  request(options, function (_err, _res, body: any) {
    response.status(200).json(body)
  })
}
