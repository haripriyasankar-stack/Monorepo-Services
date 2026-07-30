import * as fruitService from "../services/fruit.services";
export const resolvers = {
    Query: {
        fruits: async () => {
            return await fruitService.getAllFruits();
        },
        fruit: async (_: any, { id }: { id: string }) => {
            return await fruitService.getFruitById(id);
        }
    },
    Mutation: {
        createFruit: async (
            _: any,
            args: {
                 name: string,
                  color: string,
                addedBy: number;
             }
            ) => {
                return await fruitService.createFruit(
                    args.name,
                    args.color,
                    args.addedBy
                );
            }
    }
};