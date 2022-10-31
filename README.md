<h1 align="center">
  Guild Wars 2 Api Client
</h1>

<p align="center">
  Typed data for every endpoint from https://wiki.guildwars2.com/wiki/API:2.
</p>

<p align="center">
  Get started with the <b>Guild Wars 2 Api Client</b> by running <code>npm i guildwars2-api-client</code>
</p>

```ts
import { GW2ApiClient } from 'guildwars2-api-client';

const client = new GW2ApiClient({
  apiKey: process.env.GW2_TOKEN,
  acceptedStatusCodes: 'ONLY_200',
});

const displayData = async () => {
  const dailyAchievements = await client.achievements.getDaily();
  console.log(dailyAchievements);
};

displayData();
```

<h2>
  Logger examples
</h2>

<p>
  <img src="https://i.imgur.com/MNChC1j.png" />
</p>
<p>
  <img src="https://i.imgur.com/vYieqee.png" />
</p>
<p>
  <img src="https://i.imgur.com/3mBeNW4.png" />
</p>

<h2>
  Known status codes
</h2>

<h3>Success</h3>
<li><b>200</b> Status - all of the requested data has been returned</li>
<li><b>206</b> Status - at least one, but not all of the provided IDs are valid
</li>

<h3>Error</h3>
<li><b>401</b> Error - attempting to access an authenticated endpoint without a valid API key, or with a valid API key without the necessary permissions</li>
<li><b>403</b> Error - attempting to access an authenticated endpoint without a valid API key, or with a valid API key without the necessary permissions
</li>
<li><b>404</b> Error - the endpoint does not exist, or all of the provided IDs are invalid</li>
<li><b>503</b> Error - the endpoint is disabled</li>
