# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     Homework.Repo.insert!(%Homework.SomeSchema{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.

import Ecto

alias Homework.Repo
alias Homework.Transactions.Transaction
alias Homework.Users.User
alias Homework.Merchants.Merchant

# First, remove any previously existing data
Repo.delete_all Transaction
Repo.delete_all Merchant
Repo.delete_all User

# These are currently hard-coded in the front end, DON'T CHANGE!
user_id = "3464c182-5dd8-11eb-ae93-0242ac130002"
merchant_id = "871b17b4-5dd8-11eb-ae93-0242ac130002"

# Insert User
Repo.insert! %User{
  id: user_id,
  first_name: "Test",
  last_name: "User",
  dob: "1980-01-01"
}

# Insert Merchant
Repo.insert! %Merchant{
  id: merchant_id,
  name: "Liverpool FC",
  description: "Entertainment"
}

#Insert Transactions
txTypes = [
  "Auto",
  "Education",
  "Entertainment",
  "Food",
  "Housing",
  "Other",
  "Subscriptions"
]

txs = Enum.map(
  txTypes,
  fn txType ->
    rand_bool = :rand.uniform(2)
    %Transaction{
      id: Ecto.UUID.generate,
      amount: :rand.uniform(10000), # Between $0.01 and $100.00
      credit: rand_bool == 1,
      debit: rand_bool == 2,
      description: txType,
      merchant_id: merchant_id,
      user_id: user_id
    }
  end
)

Enum.each(
  txs,
  fn tx -> Repo.insert! tx end
)
