type User1 = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

// Назву типу змінив через те що ТС сварився що в 6 завданні бейсиків є тип з аналогчною назвою

function createOrUpdateUser<User1>(initialValues: Partial<User1>) {
  // Оновлення користувача
}

createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});
