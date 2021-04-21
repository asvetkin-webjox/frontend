const itemData = {
  penoplast30: { price: 22.96, consumption: 1 },
  penoplast40: { price: 31, consumption: 1 },
  penoplast50: { price: 38.59, consumption: 1 },
  penoplast100: { price: 77.3, consumption: 1 },
  expenoplast: { price: 104.2, consumption: 0.72 },
  grunt: { price: 23, consumption: 0.5 },
  klei: { price: 97, consumption: 0.1 },
  gvozdi: { price: 100, consumption: 0.1 },
};
const {
  penoplast30,
  penoplast40,
  penoplast50,
  penoplast100,
  expenoplast,
  grunt,
  klei,
  gvozdi,
} = itemData;

const formula = (area, type) => {
  const totalConsumption = area * type.consumption;
  const price = Math.round(totalConsumption * type.price);

  return { totalConsumption, price };
};

const items = (item) => [item, grunt, klei, gvozdi];

const calcAll = (area, it) => it.map((_, i) => formula(area, it[i]));

const value = itemData['penoplast0'] //?

calcAll(20, items('penoplast30')); // ?


