// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Tweet, User } = initSchema(schema);

export {
  Tweet,
  User
};