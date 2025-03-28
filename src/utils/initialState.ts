import { TodoState } from "./types";

export const initialState: TodoState = {
  tasks: [
    {
      id: "1",
      title: "Купить продукты",
      text: "Купить хлеб, молоко и яйца",
      completed: "Done",
      date: "2025-03-20",
    },
    {
      id: "2",
      title: "Выучить Redux",
      text: "Разобраться с RTK, useSelector и useDispatch",
      completed: "Done",
      date: "2025-03-15",
    },
    {
      id: "3",
      title: "Позаниматься спортом",
      text: "Сделать зарядку 15 минут",
      completed: "Done",
      date: "2025-03-10",
    },
    {
      id: "4",
      title: "Почитать книгу",
      text: "Прочитать 30 страниц",
      completed: "Done",
      date: "2025-03-21",
    },
    {
      id: "5",
      title: "Написать статью",
      text: "Подготовить текст для блога",
      completed: "newTask",
      date: "2025-03-22",
    },
    {
      id: "6",
      title: "Посмотреть фильм",
      text: "Выбрать интересный фильм и посмотреть",
      completed: "Done",
      date: "2025-03-23",
    },
    {
      id: "7",
      title: "Навести порядок",
      text: "Убрать рабочий стол",
      completed: "newTask",
      date: "2025-03-24",
    },
    {
      id: "8",
      title: "Позвонить родителям",
      text: "Поговорить о новостях",
      completed: "newTask",
      date: "2025-03-25",
    },
    {
      id: "9",
      title: "Сделать уборку",
      text: "Пропылесосить и вымыть полы",
      completed: "newTask",
      date: "2025-03-26",
    },
    {
      id: "10",
      title: "Записаться к врачу",
      text: "Проверить расписание и записаться",
      completed: "Done",
      date: "2025-03-27",
    },
    {
      id: "11",
      title: "Выучить новую технику программирования",
      text: "Разобраться с TypeScript",
      completed: "newTask",
      date: "2025-03-28",
    },
    {
      id: "12",
      title: "Сходить на прогулку",
      text: "Пройти 5 км в парке",
      completed: "newTask",
      date: "2025-03-29",
    },
    {
      id: "13",
      title: "Заплатить счета",
      text: "Оплатить коммунальные услуги",
      completed: "newTask",
      date: "2025-03-30",
    },
    {
      id: "14",
      title: "Приготовить ужин",
      text: "Сделать новое блюдо",
      completed: "newTask",
      date: "2025-03-31",
    },
    {
      id: "15",
      title: "Обновить резюме",
      text: "Добавить новый опыт работы",
      completed: "newTask",
      date: "2025-04-01",
    },
    {
      id: "16",
      title: "Послушать подкаст",
      text: "Выбрать интересный выпуск",
      completed: "newTask",
      date: "2025-04-02",
    },
    {
      id: "17",
      title: "Посетить музей",
      text: "Сходить в художественную галерею",
      completed: "newTask",
      date: "2025-04-03",
    },
    {
      id: "18",
      title: "Выучить иностранное слово",
      text: "Добавить 10 слов в словарь",
      completed: "inProgress",
      date: "2025-04-04",
    },
    {
      id: "19",
      title: "Подготовить презентацию",
      text: "Сделать слайды для доклада",
      completed: "inProgress",
      date: "2025-04-05",
    },
    {
      id: "20",
      title: "Пройти онлайн-курс",
      text: "Закончить модуль по JavaScript",
      completed: "newTask",
      date: "2025-04-06",
    },
    {
      id: "21",
      title: "Записаться на спорт",
      text: "Выбрать секцию",
      completed: "newTask",
      date: "2025-04-07",
    },
    {
      id: "22",
      title: "Купить подарок",
      text: "Выбрать презент для друга",
      completed: "inProgress",
      date: "2025-04-08",
    },
    {
      id: "23",
      title: "Посетить концерт",
      text: "Сходить на живую музыку",
      completed: "inProgress",
      date: "2025-04-09",
    },
    {
      id: "24",
      title: "Начать медитировать",
      text: "Выделить 10 минут на медитацию",
      completed: "newTask",
      date: "2025-04-10",
    },
    {
      id: "25",
      title: "Починить велосипед",
      text: "Заменить камеру и смазать цепь",
      completed: "inProgress",
      date: "2025-04-11",
    },
    {
      id: "26",
      title: "Разобраться с финансами",
      text: "Проанализировать бюджет",
      completed: "inProgress",
      date: "2025-04-12",
    },
    {
      id: "27",
      title: "Организовать поездку",
      text: "Выбрать маршрут и даты",
      completed: "inProgress",
      date: "2025-04-13",
    },
    {
      id: "28",
      title: "Написать другу",
      text: "Отправить сообщение или письмо",
      completed: "inProgress",
      date: "2025-04-14",
    },
    {
      id: "29",
      title: "Прокачать навык",
      text: "Упражняться в решении задач",
      completed: "newTask",
      date: "2025-04-15",
    },
    {
      id: "30",
      title: "Сделать комплимент",
      text: "Сказать что-то приятное человеку",
      completed: "inProgress",
      date: "2025-04-16",
    },
    {
      id: "31",
      title: "Попробовать йогу",
      text: "Сделать несколько упражнений",
      completed: "newTask",
      date: "2025-04-17",
    },
    {
      id: "32",
      title: "Нарисовать картину",
      text: "Использовать акварель или карандаш",
      completed: "newTask",
      date: "2025-04-18",
    },
    {
      id: "33",
      title: "Подписаться на интересный канал",
      text: "Найти что-то полезное",
      completed: "newTask",
      date: "2025-04-19",
    },
    {
      id: "34",
      title: "Посетить новую кофейню",
      text: "Попробовать необычный кофе",
      completed: "newTask",
      date: "2025-04-20",
    },
    {
      id: "35",
      title: "Выучить новый танец",
      text: "Разобраться с движениями",
      completed: "newTask",
      date: "2025-04-21",
    },
  ],
  filter: "Done",
  sort: "none",
};
