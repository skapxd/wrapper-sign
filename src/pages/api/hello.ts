// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { status, documentHexid }: Record<string, any> = req.query ?? {};

  const config = { params: { status, documentHexid } }

  // QA
  axios.post('https://backendonboardingqa.azurewebsites.net/loans/whatsignHooks', config)
    .then(res => console.log('QA success'))
    .catch((err) => console.log('QA error', err.message))

  // DEV
  axios.post('https://backendonboarding.azurewebsites.net/loans/whatsignHooks', config)
    .then(res => console.log('DEV success'))
    .catch((err) => console.log('DEV error', err.message))

  // LOCAL
  axios.post(`https://khwsmpj9-8000.use2.devtunnels.ms/loans/whatsignHooks`, config)
    .then(res => console.log('LOCAL success'))
    .catch((err) => console.log('LOCAL error', err.message))
  // res.send({ name: 'John Doe' })
  res.status(200).json({ name: 'John Doe' })
}

