# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command Allstock.create(or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([( name 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Item.destroy_all
SavingPot.destroy_all
Transaction.destroy_all
Allstock.destroy_all
User.destroy_all



# ---------------------Users-------------------------------------------

user1 = User.create(username: "Elle", password: "123456", balance: 100000)
user2 =User.create(username: "Leah", password: "123456", balance: 100000)
user3 =User.create(username: "Ranya", password: "123456", balance: 100000)
user4 =User.create(username: "Tom", password: "123456", balance: 100000)
user5 =User.create(username: "Ben", password: "123456", balance: 100000)


# ---------------------pots-------------------------------------------
# Item.create(name: 'Postion', description: 'lalalal', user_id: user1.id )
# Item.create(name: 'HEllo', description: 'heheh', user_id: user2.id )

#-----------------Transactions------------------------------------------

Transaction.create(date: "01/01/2019", company:"Sky", amount: 100, spendingSection: "bills", user_id: user1.id )
Transaction.create(date: "21/01/2019", company:"BT Gas", amount: 600, spendingSection: "bills", user_id: user2.id )
Transaction.create(date: "31/01/2019", company:"British Airways", amount: 1000, spendingSection: "holiday", user_id: user1.id )
Transaction.create(date: "02/01/2019", company:"Virgin", amount: 3000, spendingSection: "holiday", user_id: user1.id )
Transaction.create(date: "08/01/2019", company:"M&S", amount: 50, spendingSection: "food", user_id: user1.id )
Transaction.create(date: "16/01/2019", company:"Tesco", amount: 40, spendingSection: "food", user_id: user2.id )
Transaction.create(date: "18/01/2019", company:"Nandos", amount: 60, spendingSection: "food", user_id: user1.id )
Transaction.create(date: "19/01/2019", company:"TFL", amount: 5, spendingSection: "travel", user_id: user1.id )
Transaction.create(date: "22/01/2019", company:"TFL", amount: 6, spendingSection: "travel", user_id: user1.id )
Transaction.create(date: "27/01/2019", company:"TFL", amount: 40, spendingSection: "travel", user_id: user1.id )
Transaction.create(date: "20/01/2019", company:"TFL", amount: 25, spendingSection: "travel", user_id: user2.id )
Transaction.create(date: "01/01/2019", company:"Sky", amount: 100, spendingSection: "bills", user_id: user1.id )
Transaction.create(date: "21/01/2019", company:"BT Gas", amount: 600, spendingSection: "bills", user_id: user2.id )
Transaction.create(date: "31/01/2019", company:"British Airways", amount: 1000, spendingSection: "holiday", user_id: user1.id )
Transaction.create(date: "02/01/2019", company:"Virgin", amount: 3000, spendingSection: "holiday", user_id: user1.id )
Transaction.create(date: "08/01/2019", company:"M&S", amount: 50, spendingSection: "food", user_id: user1.id )
Transaction.create(date: "16/01/2019", company:"Tesco", amount: 40, spendingSection: "food", user_id: user2.id )
Transaction.create(date: "18/01/2019", company:"Nandos", amount: 60, spendingSection: "food", user_id: user1.id )
Transaction.create(date: "19/01/2019", company:"TFL", amount: 5, spendingSection: "travel", user_id: user1.id )
Transaction.create(date: "22/01/2019", company:"TFL", amount: 6, spendingSection: "travel", user_id: user1.id )
Transaction.create(date: "27/01/2019", company:"TFL", amount: 40, spendingSection: "travel", user_id: user1.id )
Transaction.create(date: "20/01/2019", company:"TFL", amount: 25, spendingSection: "travel", user_id: user2.id )



#------------------------------------------------------------------------------------------------
#Saving Pot

SavingPot.create(name: "Car", description:"4 door car.", date:"12/12/2020", goal: 30000, user_id: user2.id )
SavingPot.create(name: "Wedding", description:"4 door car.", date:"12/12/2020", goal: 30000, user_id: user2.id )
SavingPot.create(name: "Dog", description:"4 door car.", date:"12/12/2020", goal: 30000, user_id: user2.id )
SavingPot.create(name: "Shoes", description:"4 door car.", date:"12/12/2020", goal: 200, user_id: user2.id )
SavingPot.create(name: "Dog", description:"4 door car.", date:"12/12/2020", goal: 100, user_id: user2.id )
SavingPot.create(name: "Belt", description:"4 door car.", date:"12/12/2020", goal: 4000, user_id: user2.id )
SavingPot.create(name: "Wedding", description:"4 door car.", date:"12/12/2020", goal: 30000, user_id: user1.id )
SavingPot.create(name: "Bag", description:"4 door car.", date:"12/12/2020", goal: 200, user_id: user1.id )
SavingPot.create(name: "Phone", description:"4 door car.", date:"12/12/2020", goal: 1000, user_id: user1.id )
SavingPot.create(name: "Food", description:"4 door car.", date:"12/12/2020", goal: 300, user_id: user1.id )
SavingPot.create(name: "Drink", description:"4 door car.", date:"12/12/2020", goal: 100, user_id: user1.id )
SavingPot.create(name: "Laptop", description:"4 door car.", date:"12/12/2020", goal: 2000, user_id: user1.id )
SavingPot.create(name: "Ipad", description:"4 door car.", date:"12/12/2020", goal: 1000, user_id: user1.id )
SavingPot.create(name: "Airpods", description:"4 door car.", date:"12/12/2020", goal: 200, user_id: user1.id )


#----------------------------------------------------------
#all stocks 


    s1=Allstock.create(ticker:"GOOG", name: "Google", sector: "Tech", price: 1194.80) 
    s2=Allstock.create(ticker: "FB", name: "Facebook", sector: "Tech", price: 168.85)
    s3=Allstock.create(ticker: "TWTR", name: "Twitter", sector: "Tech", price: 29.41)
    s4=Allstock.create(ticker: "AMZN", name: "Amazon", sector: "Tech", price: 2013.04)
    s5=Allstock.create(ticker: "V", name: "Visa", sector: "Finance", price: 150.05)
    s6=Allstock.create(ticker: "BAC", name: "Bank of America", sector: "Finance", price: 29.95)
    s7=Allstock.create(ticker: "JPM", name: "JP Morgan", sector: "Finance", price: 114.45)
    s8=Allstock.create(ticker: "C", name: "Citi Bank", sector: "Finance", price: 72.94)
    s9=Allstock.create(ticker: "NKE", name: "Nike", sector: "Sportswear", price: 84.56)
    s10=Allstock.create(ticker: "UAA", name: "Under Armour", sector: "Sportswear", price: 21.07)
