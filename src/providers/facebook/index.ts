import { assignDefaults } from '../../utils/provider'
import ProviderPartialOptions from '../contracts/ProviderPartialOptions'
import FacebookProviderOptions from './contracts/FacebookProviderOptions'

export default function facebook(
  _nuxt,
  strategy: ProviderPartialOptions<FacebookProviderOptions>
) {
  const DEFAULTS: typeof strategy = {
    scheme: 'oauth2',
    endpoints: {
      authorization: 'https://facebook.com/v2.12/dialog/oauth',
      userInfo:
        'https://graph.facebook.com/v2.12/me?fields=about,name,picture{url},email'
    },
    scope: ['public_profile', 'email']
  }

  assignDefaults(strategy, DEFAULTS)
}
