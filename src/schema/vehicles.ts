export const vehiclesSchema = () => z.object({
  fuelups: z.array(z.object({
    date: z.string().or(z.date()).transform((v) => new Date(v)),
    litres: z.number(),
    miles: z.number(),
    price: z.number(),
  })),
  name: z.string(),
});
