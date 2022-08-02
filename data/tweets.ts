const userImages = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWpQ_0xqMyhrzhvYGbK6AVR7OFrKoNaJ0_mvMv0rLlptDfTWgxTvB8US_t8_Ak92lm9G0&usqp=CAU",
  "data:image/jpeg;base64,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",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYmkp9a2rrD1Sskb9HLt5mDaTt4QaIs8CcBg&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU",
];

const tweets = [
  {
    id: "t1",
    user: {
      id: "u1",
      username: "SavinVadim_",
      name: "Vadim Savin",
      image: userImages[0],
    },
    createdAt: "2022-08-01T12:00:00.000Z",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image:
      "https://i.insider.com/5d03aa8e6fc9201bc7002b43?width=1136&format=jpeg",
    numberOfComments: 123,
    numberOfRetweets: 11,
    numberOfLikes: 10,
  },
  {
    id: "t2",
    user: {
      id: "u2",
      username: "vasya_",
      name: "Vasya Utkin",
      image: userImages[1],
    },
    createdAt: "2020-08-27T12:00:00.000Z",
    content:
      "Hey Hey Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    numberOfComments: 4,
    numberOfRetweets: 11,
    numberOfLikes: 99,
  },
  {
    id: "t3",
    user: {
      id: "u3",
      username: "Serik_",
      name: "Serik Berik",
      image: userImages[2],
    },
    createdAt: "2020-08-27T12:00:00.000Z",
    content: "Hello World",
    numberOfComments: 4,
    numberOfRetweets: 11,
    numberOfLikes: 99,
  },
  {
    id: "t4",
    user: {
      id: "u4",
      username: "trustSSC_",
      name: "Elon Musk",
      image: userImages[3],
    },
    createdAt: "2020-08-27T12:00:00.000Z",
    content:
      "Hey Hey Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    numberOfComments: 4,
    numberOfRetweets: 11,
    numberOfLikes: 99,
  },
];

export default tweets;
