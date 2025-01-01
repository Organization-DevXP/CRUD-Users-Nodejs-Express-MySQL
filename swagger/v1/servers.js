// swagger/servers.js

const basePath = 'api';
const versionsApi = ['v1'];

const servers = [
    {
        url: "http://localhost:3000/{basePath}/{versionApi}",
        description: "Local server",
        variables: {
            basePath: {
                enum: [basePath],
                default: basePath
            },
            versionApi: {
                enum: versionsApi,
                default: versionsApi[0]
            },
        },
    },
    {
        url: "https://your-production-url.com/{basePath}/{versionApi}",
        description: "Production server",
        variables: {
            basePath: {
                enum: [basePath],
                default: basePath
            },
            versionApi: {
                enum: versionsApi,
                default: versionsApi[0]
            },
        },
    }
];

export default servers;
