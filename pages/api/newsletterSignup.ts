import { NextApiResponse, NextApiRequest } from 'next'


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const email: string = req.body;

  try {
    const result = await fetch('https://www.getrevue.co/api/v2/subscribers', {
      method: "POST",
      headers: {
        Authorization: `Token ${process.env.REVUE_API_KEY}`,
        "Content-Type": 'application/json',
      },
      body: JSON.stringify({
        email: email,
        double_opt_in: false
      })
    });

    const response = await result.json();

    if (response.status >= 400) {
      console.log(response);
      return res.status(400).json({
        error: "Error subscribing to the newsletter. DM me on twitter @_yashKarthik"
      })
    }

    res.status(200).json({error: "no error"})

  } catch (error) {
    console.log(error)
    res.status(503).json({error: "Could not add subscribed, please retry."})
  }
}
