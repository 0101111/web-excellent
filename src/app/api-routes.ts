import { UniRoutes, UniRoutesGateways } from 'cos-common';


const gateway: Partial<UniRoutesGateways> = Object.freeze({
  publicGateWay: 'https://api-core-dev.caronsale.de/api',
  identityProvider: '',
  registeredClient: '',
});

export const apiRoutes: Partial<UniRoutes> = Object.freeze({
  prod: {
    urls: {
      loginUrl: `${gateway.publicGateWay}/v1/authentication/{email}`,
      checkLoginUrl: `${gateway.publicGateWay}/v1/authentication/{email}`,
      auctionsUrl: `${gateway.publicGateWay}/v2/auction/buyer/`
    },
  },

  mock: {
    urls: {
      loginUrl: `assets/mocks/user/profile.json`,
      checkLoginUrl: `${gateway.publicGateWay}/v1/authentication/{email}`,
      auctionsUrl: `assets/mocks/user/auctions.json`
    },
  },
});
