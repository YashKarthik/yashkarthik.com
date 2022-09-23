import { NextApiResponse, NextApiRequest } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const userEmail: string = req.body;

  try {
    const result = await fetch('https://www.getrevue.co/api/v2/subscribers', {
      method: "POST",
      headers: {
        Authorization: `Token ${process.env.REVUE_API_KEY}`,
        "Content-Type": 'application/json',
      },
      body: JSON.stringify({
        email: userEmail,
        double_opt_in: false
      })
    });

    const response = await result.json();

    if (result.status == 200) {
      res.status(200).json({error: 'NO Error'})
    } else if (response.error.email == 'This email address has already been subscribed') {
      res.status(200).json({error: 'Already subbed'})
    } else {
      console.log(response);
      res.status(result.status).json({error: 'ERROR has ocurred, contact me on twitter @_yashkarthik'})
    }

  } catch (error) {
    console.log('Error in revue api request:', error)
    res.status(503).json({error: 'ERROR has ocurred, contact me on twitter @_yashkarthik'})
  }
}
