import { FlickModel } from "../models";

class _FlickService {
  private flicks: FlickModel[] = [
    {
      id: 1,
      genre: "Fantasy",
      title: "Harry Potter and the Philosopher's Stone",
      image: "~/assets/hp1.jpg",
      url: "",
      description: `Harry Potter #1`,
      details: [
        {
          title: "Summary",
          body: "Harry Potter thinks he is an ordinary boy - until he is rescued by an owl, taken to Hogwarts School of Witchcraft and Wizardry, learns to play Quidditch and does battle in a deadly duel. The Reason ... HARRY POTTER IS A WIZARD!",
        },
      ],
    },
    {
      id: 2,
      genre: "Fantasy",
      title: "Harry Potter and the Chamber of Secrets",
      image: "~/assets/hp2.jpg",
      url: "",
      description: `Harry Potter #2`,
      details: [
        {
          title: "Summary",
          body: "Ever since Harry Potter had come home for the summer, the Dursleys had been so mean and hideous that all Harry wanted was to get back to the Hogwarts School for Witchcraft and Wizardry. But just as he’s packing his bags, Harry receives a warning from a strange impish creature who says that if Harry returns to Hogwarts, disaster will strike. And strike it does. For in Harry’s second year at Hogwarts, fresh torments and horrors arise, including an outrageously stuck-up new professor and a spirit who haunts the girls’ bathroom. But then the real trouble begins – someone is turning Hogwarts students to stone. Could it be Draco Malfoy, a more poisonous rival than ever? Could it possibly be Hagrid, whose mysterious past is finally told? Or could it be the one everyone at Hogwarts most suspects… Harry Potter himself!",
        },
      ],
    },
    {
      id: 3,
      genre: "Fantasy",
      title: "Harry Potter and the Prisoner of Azkaban",
      image: "~/assets/hp3.jpg",
      url: "",
      description: `Harry Potter #3`,
      details: [
        {
          title: "Summary",
          body: "Harry Potter, along with his best friends, Ron and Hermione, is about to start his third year at Hogwarts School of Witchcraft and Wizardry. Harry can't wait to get back to school after the summer holidays. (Who wouldn't if they lived with the horrible Dursleys?) But when Harry gets to Hogwarts, the atmosphere is tense. There's an escaped mass murderer on the loose, and the sinister prison guards of Azkaban have been called in to guard the school...",
        },
      ],
    },
    {
      id: 4,
      genre: "Fantasy",
      title: "Harry Potter and the Goblet of Fire",
      image: "~/assets/hp4.jpg",
      url: "",
      description: `Harry Potter #4`,
      details: [
        {
          title: "Summary",
          body: "It is the summer holidays and soon Harry Potter will be starting his fourth year at Hogwarts School of Witchcraft and Wizardry. Harry is counting the days: there are new spells to be learnt, more Quidditch to be played, and Hogwarts castle to continue exploring. But Harry needs to be careful - there are unexpected dangers lurking...",
        },
      ],
    },
    {
      id: 5,
      genre: "Fantasy",
      title: "Harry Potter and the Order of the Phoenix",
      image: "~/assets/hp5.jpg",
      url: "",
      description: `Harry Potter #5`,
      details: [
        {
          title: "Summary",
          body: "Harry Potter is about to start his fifth year at Hogwarts School of Witchcraft and Wizardry. Unlike most schoolboys, Harry never enjoys his summer holidays, but this summer is even worse than usual. The Dursleys, of course, are making his life a misery, but even his best friends, Ron and Hermione, seem to be neglecting him. Harry has had enough. He is beginning to think he must do something, anything, to change his situation, when the summer holidays come to an end in a very dramatic fashion. What Harry is about to discover in his new year at Hogwarts will turn his world upside down... ",
        },
      ],
    },
    {
      id: 6,
      genre: "Fantasy",
      title: "Harry Potter and the Half-Blood Prince",
      image: "~/assets/hp6.jpg",
      url: "",
      description: `Harry Potter #6`,
      details: [
        {
          title: "Summary",
          body: "It is the middle of the summer, but there is an unseasonal mist pressing against the windowpanes. Harry Potter is waiting nervously in his bedroom at the Dursleys' house in Privet Drive for a visit from Professor Dumbledore himself. One of the last times he saw the Headmaster was in a fierce one-to-one duel with Lord Voldemort, and Harry can't quite believe that Professor Dumbledore will actually appear at the Dursleys' of all places. Why is the Professor coming to visit him now? What is it that cannot wait until Harry returns to Hogwarts in a few weeks' time? Harry's sixth year at Hogwarts has already got off to an unusual start, as the worlds of Muggle and magic start to intertwine...",
        },
      ],
    },
    {
      id: 7,
      genre: "Fantasy",
      title: "Harry Potter and the Deathly Hallows",
      image: "~/assets/hp7.jpg",
      url: "",
      description: `Harry Potter #7`,
      details: [
        {
          title: "Summary",
          body: "Harry has been burdened with a dark, dangerous and seemingly impossible task: that of locating and destroying Voldemort's remaining Horcruxes. Never has Harry felt so alone, or faced a future so full of shadows. But Harry must somehow find within himself the strength to complete the task he has been given. He must leave the warmth, safety and companionship of The Burrow and follow without fear or hesitation the inexorable path laid out for him...\
        In this final, seventh installment of the Harry Potter series, J.K. Rowling unveils in spectacular fashion the answers to the many questions that have been so eagerly awaited.",
        },
      ],
    },
  ];

  getFlicks(): FlickModel[] {
    return this.flicks;
  }

  getFlickById(id: number): FlickModel | undefined {
    return this.flicks.find((flick) => flick.id === id) || undefined;
  }
}

export const FlickService = new _FlickService();
