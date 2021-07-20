import requestIp from 'request-ip';
import { getCountry } from "../../lib/request";

export default async function test(req, res) {
  const ip = requestIp.getClientIp(req);

  const result = await getCountry(req, ip);

  res.status(200).json(result);
};
