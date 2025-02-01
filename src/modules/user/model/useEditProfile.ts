import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { useAppDispatch, useAppSelector } from "@app/store/hooks";

import { formatePhone } from "@shared/helpers";

import type { IEditProfileSormSchema } from "../lib";
import { editProfileSormSchema, getChangedFields } from "../lib";
import { getUserState, patchUserProfileAction } from "../store";

export const useEditProfile = () => {
  const { userSession, isLoading } = useAppSelector(getUserState);
  const dispatch = useAppDispatch();

  const editProfileForm = useForm<IEditProfileSormSchema>({
    resolver: zodResolver(editProfileSormSchema),
    defaultValues: {
      city: userSession?.city || "",
      email: userSession?.email || "",
      firstname: userSession?.firstname || "",
      lastname: userSession?.lastname || "",
      middlename: userSession?.middlename || "",
      phone: userSession?.phone || ""
    }
  });

  const updateUser = async (userData: IEditProfileSormSchema) => {
    const changedFields = getChangedFields(userSession!, userData);

    if (Object.keys(changedFields).length === 0) {
      return;
    }

    await dispatch(
      patchUserProfileAction({ phone: formatePhone(userData.phone!), profile: userData })
    ).then(() => editProfileForm.reset(userData));
  };

  const isDisabled = !Object.values(editProfileForm.formState.dirtyFields).some(Boolean);

  return { editProfileForm, updateUser, isDisabled, isLoading };
};
