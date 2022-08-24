import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type TweetMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Tweet {
  readonly id: string;
  readonly content?: string | null;
  readonly User?: User | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly tweetUserId?: string | null;
  constructor(init: ModelInit<Tweet, TweetMetaData>);
  static copyOf(source: Tweet, mutator: (draft: MutableModel<Tweet, TweetMetaData>) => MutableModel<Tweet, TweetMetaData> | void): Tweet;
}

export declare class User {
  readonly id: string;
  readonly username?: string | null;
  readonly name?: string | null;
  readonly email?: string | null;
  readonly image?: string | null;
  readonly Tweet?: Tweet | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}