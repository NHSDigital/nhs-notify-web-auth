import { signInWithRedirect } from '@aws-amplify/auth';
// eslint-disable-next-line import/no-unresolved
import amplifyOutputs from '@/amplify_outputs.json';

export type State = {
  redirectPath: string;
};

export function federatedSignIn(redirectPath: string) {
  const providers = amplifyOutputs.auth?.oauth?.identity_providers || [];
  if (providers.length !== 1) {
    throw new Error('Invalid OAUTH provider configuration');
  }
  const provider = providers[0];
  if (!provider) {
    throw new Error('Missing OAUTH custom provider configuration');
  }
  return signInWithRedirect({
    provider: {
      custom: provider,
    },
    customState: JSON.stringify({ redirectPath }),
  });
}
