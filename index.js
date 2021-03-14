const hello = () => {
  const what = (a) => {
    console.log(a);
  };
  return {
    food: "apple",
    what,
  };
};

const bye = () => {
  const { food, what } = hello();
  console.log(food);
  what("it's me");
};

bye();
