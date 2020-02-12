import { Request, Response, NextFunction} from 'express';
// import { OktaAuthService } from '@okta/okta-angular';

const OktaJwtVerifier = require('@okta/jwt-verifier');

const oktaJwtVerifier = new OktaJwtVerifier({
  issuer: 'https://dev-810851.okta.com/oauth2/default',
  clientId: '0oa1a9g8grSMSPfQp4x6'
});

export async function oktaAuth(req:Request, res:Response, next:NextFunction) {
    try {
      const token = (req as any).token;
      if (!token) {
        return res.status(401).send('Not Authorized');
      }
      const jwt = await oktaJwtVerifier.verifyAccessToken(token);
      req.body.user = {
        uid: jwt.claims.uid,
        email: jwt.claims.sub
      };
      next();
    }
    catch (err) {
      return res.status(401).send(err.message);
    }
  }
  