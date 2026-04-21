'use client';

import { FC } from 'react';

// Reputably: "Continue with Google" social-login is disabled. Postiz's
// social-login OAuth client is NOT configured in our deployment — we only
// wire up GOOGLE_GMB_CLIENT_ID for the Google Business Profile integration.
// Real Reputably<->Posting SSO is scheduled as Phase 3 of the integration
// plan. Until then, users sign in with email once per instance and postiz's
// session cookie keeps them authenticated.
export const GoogleProvider: FC = () => null;
