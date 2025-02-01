import type { IEditProfileSormSchema } from ".";

export const getChangedFields = (
  original: IEditProfileSormSchema,
  updated: IEditProfileSormSchema
) =>
  Object.fromEntries(
    Object.entries(updated).filter(
      ([key, value]) =>
        value !== undefined && value !== original[key as keyof IEditProfileSormSchema]
    )
  ) as IEditProfileSormSchema;
