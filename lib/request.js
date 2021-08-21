import path from "path";
import maxmind from 'maxmind';

export async function getCountry(req, ip) {
  const lookup = await maxmind.open(path.resolve('./public/geo/GeoLite2-Country.mmdb'));

  const result = lookup.get(ip);

  return result;
}

export async function getCity(req, ip) {
  const lookup = await maxmind.open(path.resolve('./public/geo/GeoLite2-Country.mmdb'));

  const result = lookup.get(ip);

  return result;
}