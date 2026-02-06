export async function getEnv() {
  const res = await fetch("../.env");
  const text = await res.text();

  const lines = text.split("\n");
  const env = {};

  lines.forEach(line => {
    const [key, value] = line.split("=");
    if (key && value) env[key.trim()] = value.trim();
  });

  return env;
}
