defmodule HomeworkWeb.TransactionsSchemaTest do
  use HomeworkWeb.ConnCase
  alias Homework.Repo
  alias Homework.Transactions.Transaction
  alias Homework.Merchants.Merchant
  alias Homework.Users.User

  @mock_id "73be2b0c-1c56-42d8-a504-36805f32ce6a"

  setup do
    Repo.preload(
      %Transaction{
        amount: 100,
        credit: true,
        debit: false,
        description: "Test",
        id: @mock_id
      },
      [:user, :merchant]
    )
    |> Repo.insert!

    :ok
  end

  @query """
  query GetTransactions {
    transactions {
      amount
      credit
      debit
      description
      id
      merchant_id
      user_id
    }
  }
  """

  test "query: transactions", %{conn: conn} do
    conn =
      post(conn, "/graphiql", %{
        "query" => @query,
        "variables" => %{}
      })

    assert json_response(conn, 200) == %{
      "data" => %{
        "transactions" => [%{
          "amount" => 1,
          "credit" => true,
          "debit" => false,
          "description" => "Test",
          "id" => @mock_id,
          "merchant_id" => nil,
          "user_id" => nil
        }]
      }
    }
  end
end
