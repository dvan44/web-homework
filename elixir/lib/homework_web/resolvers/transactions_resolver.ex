defmodule HomeworkWeb.Resolvers.TransactionsResolver do
  alias Homework.Merchants
  alias Homework.Transactions
  alias Homework.Users

  @doc """
  Get a list of transcations
  """
  def transactions(_root, args, _info) do
    {
      :ok,
      Transactions.list_transactions(args)
      |> Enum.map(fn (tx) -> %{tx | amount: tx.amount / 100} end)
    }
  end

  @doc """
  Get the user associated with a transaction
  """
  def user(_root, _args, %{source: %{user_id: user_id}}) do
    {:ok, Users.get_user!(user_id)}
  end

  @doc """
  Get the merchant associated with a transaction
  """
  def merchant(_root, _args, %{source: %{merchant_id: merchant_id}}) do
    {:ok, Merchants.get_merchant!(merchant_id)}
  end

  @doc """
  Create a new transaction
  """
  def create_transaction(_root, %{amount: amount} = args, _info) do
    args = %{args | amount: trunc(amount * 100)}
    case Transactions.create_transaction(args) do
      {:ok, transaction} ->
        {:ok, %{transaction | amount: transaction.amount / 100} }

      error ->
        {:error, "could not create transaction: #{inspect(error)}"}
    end
  end

  @doc """
  Updates a transaction for an id with args specified.
  """
  def update_transaction(_root, %{id: id, amount: amount} = args, _info) do
    transaction = Transactions.get_transaction!(id)

    args = %{args | amount: trunc(amount * 100)}
    case Transactions.update_transaction(transaction, args) do
      {:ok, transaction} ->
        {:ok, %{transaction | amount: transaction.amount / 100} }

      error ->
        {:error, "could not update transaction: #{inspect(error)}"}
    end
  end

  @doc """
  Deletes a transaction for an id
  """
  def delete_transaction(_root, %{id: id}, _info) do
    transaction = Transactions.get_transaction!(id)

    case Transactions.delete_transaction(transaction) do
      {:ok, transaction} ->
        {:ok, %{transaction | amount: transaction.amount / 100} }

      error ->
        {:error, "could not update transaction: #{inspect(error)}"}
    end
  end
end
