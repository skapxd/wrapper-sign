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

  const query = new URLSearchParams({
    status: status,
    documentHexid: documentHexid
  }).toString();
  // QA
  // fetch('https://backendonboardingqa.azurewebsites.net/loans/whatsignHooks', )
  // DEV
  // fetch('https://backendonboarding.azurewebsites.net/loans/whatsignHooks')
  // LOCAL
  const url = `https://khwsmpj9-8000.use2.devtunnels.ms/loans/whatsignHooks?${query}`
  const resp = await fetch(url)
    .catch((err) => console.log(err));

  // res.send({ name: 'John Doe' })
  res.status(200).send({ name: 'John Doe' })
}

