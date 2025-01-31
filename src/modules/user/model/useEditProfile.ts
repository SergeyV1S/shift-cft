import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { useAppDispatch, useAppSelector } from "@app/store/hooks";

import { formatePhone } from "@shared/helpers";

import type { IEditProfileSormSchema } from "../lib";
import { editProfileSormSchema, getChangedFields } from "../lib";
import { getUserState, patchUserProfileAction } from "../store";

export const useEditProfile = () => {
  const { userSession, userProfile, isLoading } = useAppSelector(getUserState);
  const dispatch = useAppDispatch();

  const editProfileForm = useForm<IEditProfileSormSchema>({
    resolver: zodResolver(editProfileSormSchema),
    defaultValues: {
      city: userSession?.city || "",
      email: userSession?.email || "",
      firstname: userSession?.firstname || "",
      lastname: userSession?.lastname || "",
      middlename: userSession?.middlename || "",
      phone: userSession?.phone.slice(1, 11) || ""
    }
  });

  const updateUser = async (userData: IEditProfileSormSchema) => {
    const changedFields = getChangedFields(userProfile!, userData);

    if (Object.keys(changedFields).length === 0) {
      return;
    }

    await dispatch(
      patchUserProfileAction({ phone: `7${formatePhone(userData.phone!)}`, profile: userData })
    );
  };

  const isDisabled =
    !Object.values(editProfileForm.formState.dirtyFields).some(Boolean) || isLoading;

  return { editProfileForm, updateUser, isDisabled };
};
