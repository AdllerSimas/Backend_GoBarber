import { container } from 'tsyringe';
import mailConfig from '@config/mail';
import IMailProvider from './models/IMailProvider';

import EtherealMailProvider from './implementations/EtherealMailProvider';
import SESMailProvider from './implementations/SESMailProvider';

const providers = {
  ethereal: container.resolve(EtherealMailProvider),
  ses: container.resolve(SESMailProvider),
};

//a kind of singleton
container.registerInstance<IMailProvider>(
  'MailProvider',
  providers[mailConfig.driver],
);


