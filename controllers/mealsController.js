let meals = [];

exports.getMeals = (req, res) => {
  res.status(200).json(meals);
};

exports.addMeal = (req, res) => {
  const { name, calories } = req.body;
  if (!name || !calories) {
    return res.status(400).json({ error: 'Missing fields' });
  }
  const newMeal = { id: meals.length + 1, name, calories };
  meals.push(newMeal);
  res.status(201).json(newMeal);
};
