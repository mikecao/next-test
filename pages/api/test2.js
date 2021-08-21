import requestIp from 'request-ip';
import { getCity } from "../../lib/request";

export default async function test(req, res) {
  const ip = requestIp.getClientIp(req);

  const result = await getCity(req, ip);

  res.status(200).json(result);
};
