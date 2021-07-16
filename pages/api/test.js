import path from 'path';
import maxmind from 'maxmind';
import requestIp from 'request-ip';

export default async function test(req, res) {
  const ip = requestIp.getClientIp(req);

  const lookup = await maxmind.open(path.resolve(`./public/geo/GeoLite2-Country.mmdb`));

  const result = lookup.get(ip);

  res.status(200).json(result);
};
