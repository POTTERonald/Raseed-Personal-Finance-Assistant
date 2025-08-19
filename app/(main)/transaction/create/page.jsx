import { getUserAccounts } from "@/actions/dashboard";
import { defaultCategories } from "@/components/data/categories";
import React from "react";
import AddTransactionForm from "../components/tranaction-form";
import { getTransaction } from "@/actions/transactions";

const AddTransactionPage = async ({ searchParams }) => {
  const accounts = await getUserAccounts();
  const params = await searchParams;
  const editId = await params?.edit;

  let initialData = null;

  if (editId) {
    const transaction = await getTransaction(editId);
    initialData = transaction;
  }
  return (
    <div className="max-w-3xl mx-auto px-5">
      <h1 className="text-5xl gradient-title mb-8">{editId ? "Edit" : "Add"} Transaction</h1>

      <AddTransactionForm
        accounts={accounts}
        categories={defaultCategories}
        editMode={!!editId}
        initialData={initialData}
      />
    </div>
  );
};

export default AddTransactionPage;
