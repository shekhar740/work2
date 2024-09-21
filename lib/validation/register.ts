import { ZodSchema } from "zod";

export const useObjectVerification = <T>({
  retistrationSchema,
  data,
}: {
  retistrationSchema: ZodSchema<T>;
  data: any;
}) => {
  const result = retistrationSchema.safeParse(data);
  if (!result.success) {
    return result.error.message;
  } else {
    return result;
  }
};
