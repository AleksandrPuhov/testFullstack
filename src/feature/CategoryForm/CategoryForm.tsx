import { useEffect } from "react";
import { type z } from "zod";
import { Loader } from "@mantine/core";
import { FormBase } from "@/components";
import { CategorySchema } from "./schema";
import { useCategoryParents } from "@/lib/utils/category";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { type CategoryFormProps } from "./types";
import { type Category } from "../CategoryList/types";
import { type TransactionType } from "@prisma/client";

export const CategoryForm = ({
  initialValues,
  onSubmit,
  submitLabel = "Submit",
  onSuccess,
  onError,
}: CategoryFormProps) => {
  const handleOnSubmit = async (data: z.infer<typeof CategorySchema>) => {
    try {
      await onSubmit(data);

      onSuccess?.();
    } catch (error) {
      onError?.(error);
    }
  };

  const form = useForm<z.infer<typeof CategorySchema>>({
    resolver: zodResolver(CategorySchema),
  });

  const { watch, resetField, setValue } = form;
  const type = watch("type");

  const {
    data: categoryOptions,
    isLoading: isCategoriesLoading,
    isInitialLoading,
  } = useCategoryParents({
    enabled: !!type,
    type: type as TransactionType,
  });

  useEffect(() => {
    const subscription = watch((values, { name }) => {
      if (name === "type" && values.type !== type) {
        if (values.type === initialValues?.type) {
          resetField("parentId");
        } else {
          setValue("parentId", "" as string & z.BRAND<"selectOptional">);
        }
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [watch, setValue, resetField, type, initialValues?.type]);

  return (
    <>
      <FormBase
        form={form}
        schema={CategorySchema}
        defaultValues={
          initialValues as Omit<Category, "description" | "parentId"> & {
            // todo: fix this
            description?: string;
            parentId?: string;
          }
        }
        onSubmit={handleOnSubmit}
        props={{
          name: {
            label: "Name",
          },
          type: {
            data: [
              { value: "INCOME", label: "Income" },
              { value: "OUTCOME", label: "Outcome" },
              { value: "TRANSFER", label: "Transfer" },
            ],
          },
          description: {
            label: "Description",
          },
          parentId: {
            label: "Parent category",
            data: categoryOptions ?? [],
            searchable: true,
            clearable: true,
            disabled: !type,
            readOnly: isCategoriesLoading,
            placeholder: isInitialLoading
              ? "Categories loading..."
              : !!type
              ? "Select parent category"
              : 'Select "Type" first',
            rightSection: isCategoriesLoading ? <Loader size="xs" /> : null,
          },
          archived: {
            label: "Archived",
          },
        }}
        formProps={{
          buttonProps: {
            label: submitLabel,
          },
        }}
      />
    </>
  );
};
