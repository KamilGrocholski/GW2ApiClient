<h1 align="center">
  Guild Wars 2 Api Client
</h1>

<p align="center">
  Typed data for every endpoint from https://wiki.guildwars2.com/wiki/API:2.
</p>

<p align="center">
  Get started with the <b color="blue">Guild Wars 2 Api Client</b> by running <code>npm i guildwars2-api-client</code>
</p>

    ```ts
    import { GW2ApiClient } from 'guildwars2-api-client';

    const client = new GW2ApiClient({
        apiKey: process.env.GW2_TOKEN,
        acceptedStatusCodes: 'ONLY_200'
    });

    const App = async () => {
        const dailyAchievements = await client.achievements.getDaily();
        console.log(dailyAchievements);
    };

    App();
    ```
