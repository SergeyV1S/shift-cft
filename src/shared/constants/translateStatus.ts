export const translateStatus: Record<number, { value: string; color: string }> = {
  0: {
    value: "Создан",
    color: "#FF7F00"
  },
  1: {
    value: "Отправлен",
    color: "#FFC300"
  },
  2: {
    value: "Прибыл в сортировочный центр",
    color: "#FFE135"
  },
  3: {
    value: "Ожидает в пункте выдачи",
    color: "#CBD834"
  },
  4: {
    value: "Вручён",
    color: "#40BF7F"
  }
};
