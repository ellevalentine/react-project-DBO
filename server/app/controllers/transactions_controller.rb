class TransactionsController < ApplicationController

  

    def createTransaction

        @Transaction = Transaction.create(company: params[:company] , amount: params[:amount], date: params[:date], spendingSection: params[:category],  user_id: params[:user_id] )
        render json: Transaction.where(user_id: params[:user_id])

    end

    # ------------------------ filter transations --------------------------------

    def allTransactionsSum

        # should be have params of: user_id

        #grab all transactions and filter all transactions for the current user
        user_transactions = Transaction.all.where(user_id: params[:user_id])
        # map  user_transactions to give us an array of all amounts and sum
        sum_of_all_amounts = user_transactions.map {|t| t.amount}.sum
       
        render json: {sum_of_all_amounts: sum_of_all_amounts}

    end


    def allTransactionsByCategory

        

        # should be have params of: user_id

        #grab all transactions and filter all transactions for the current user
        user_transactions = Transaction.all.where(user_id: params[:user_id])
     
        categories = ['bills', 'subscriptions', 'food', 'travel', 'phone', 'holiday', 'retail', 'tech', 'other']
            
        category_spending = {}

        categories.each do |category|
            category_spending[category] = user_transactions.select { |t| t.spendingSection == category}
        end

        bills_total = category_spending['bills'].map {|t| t.amount}.sum
        subscriptions_total = category_spending['subscriptions'].map {|t| t.amount}.sum
        food_total = category_spending['food'].map {|t| t.amount}.sum
        travel_total = category_spending['travel'].map {|t| t.amount}.sum
        phone_total = category_spending['phone'].map {|t| t.amount}.sum
        holiday_total = category_spending['holiday'].map {|t| t.amount}.sum
        retail_total = category_spending['retail'].map {|t| t.amount}.sum
        tech_total = category_spending['tech'].map {|t| t.amount}.sum
        other_total = category_spending['other'].map {|t| t.amount}.sum

        render json: {bills: bills_total, sub: subscriptions_total, food:food_total, travel: travel_total, phone: phone_total, holiday: holiday_total, retail: retail_total, tech: tech_total, other: other_total}


    end


    def sumOfEachYear

        # should be have params of: user_id, selected_year

        #grab current user transations 
        user_transactions = Transaction.all.where(user_id: params[:user_id])
        # grab the transactions from the selected year - from the array of transations from the selected year - map over and give an array of amounts from that year and sum 
        sum_of_year = user_transactions.select{|t| t.date.split("-")[0] == params[:selected_year]}.map {|t| t.amount}.sum
  
        render json: {sum_of_year: sum_of_year}

    end


    def sumOfEachCategoryForEachYear


        # should be have params of: user_id, selected year 

           #grab current user transations 
           user_transactions = Transaction.all.where(user_id: params[:user_id])
           # grab the transactions from the selected year - from the array of transations from the selected year - map over and give an array of amounts from that year and sum 

           selected_year_transactions = user_transactions.select{|t| t.date.split("-")[0] == params[:selected_year]}

        categories = ["bills", "subscriptions", "food", "travel", "phone", "holiday", "retail", "tech", "other"]
            
        category_spending = {}

        categories.each do |category|
            category_spending[category] = selected_year_transactions.select { |t| t.spendingSection == category}
        end

        year_bills_total = category_spending['bills'].map {|t| t.amount}.sum
        year_subscriptions_total = category_spending['subscriptions'].map {|t| t.amount}.sum
        year_food_total = category_spending['food'].map {|t| t.amount}.sum
        year_travel_total = category_spending['travel'].map {|t| t.amount}.sum
        year_phone_total = category_spending['phone'].map {|t| t.amount}.sum
        year_holiday_total = category_spending['holiday'].map {|t| t.amount}.sum
        year_retail_total = category_spending['retail'].map {|t| t.amount}.sum
        year_tech_total = category_spending['tech'].map {|t| t.amount}.sum
        year_other_total = category_spending['other'].map {|t| t.amount}.sum

        render json: {bills: year_bills_total, sub: year_subscriptions_total, food: year_food_total, travel: year_travel_total, phone: year_phone_total, holiday: year_holiday_total, retail: year_retail_total, tech: year_tech_total, other: year_other_total}

    end




    def sumOfEachMonth

         # should be have params of: user_id, year wanted, month wanted 
        
            #grab current user transations 
            user_transactions = Transaction.all.where(user_id: params[:user_id])
            # grab the transactions from the selected year - from the array of transations from the selected year - map over and give an array of amounts from that year and sum 
 
            selected_year_transactions = user_transactions.select{|t| t.date.split("-")[0] == params[:selected_year]}
 



        months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12" ]
            
        selected_month = {}

        months.each do |month|
            selected_month[month] =  selected_year_transactions.select { |t| t.date.split("-")[1] == month}
        end

        jan_transactions = selected_month['01']
        feb_transactions = selected_month['02']
        mar_transactions = selected_month['03']
        apr_transactions = selected_month['04']
        may_transactions = selected_month['05']
        jun_transactions = selected_month['06']
        jul_transactions = selected_month['07']
        aug_transactions = selected_month['08']
        sep_transactions = selected_month['09']
        oct_transactions = selected_month['10']
        nov_transactions = selected_month['11']
        dec_transactions = selected_month['12']

        jan_total = jan_transactions.map {|t| t.amount}.sum
        feb_total = feb_transactions.map {|t| t.amount}.sum
        mar_total = mar_transactions.map {|t| t.amount}.sum
        apr_total = apr_transactions.map {|t| t.amount}.sum
        may_total = may_transactions.map {|t| t.amount}.sum
        jun_total = jun_transactions.map {|t| t.amount}.sum
        jul_total = jul_transactions.map {|t| t.amount}.sum
        aug_total = aug_transactions.map {|t| t.amount}.sum
        sep_total = sep_transactions.map {|t| t.amount}.sum
        oct_total = oct_transactions.map {|t| t.amount}.sum
        nov_total = nov_transactions.map {|t| t.amount}.sum
        dec_total = dec_transactions.map {|t| t.amount}.sum

        
        render json: {jan: jan_total, feb: feb_total, mar: mar_total, apr: apr_total, may: may_total, jun: jun_total, jul: jul_total, aug: aug_total, sep: sep_total, oct: oct_total, nov: nov_total, dec: dec_total}

    end




    def sumOfEachCategoryFromEachMonth

        # id of user 
        # year wanted 
        # month wanted 
        # catergory of each month 


          #grab current user transations 
          user_transactions = Transaction.all.where(user_id: params[:user_id])
          # grab the transactions from the selected year - from the array of transations from the selected year - map over and give an array of amounts from that year and sum 

          selected_year_transactions = user_transactions.select{|t| t.date.split("-")[0] == params[:selected_year]}


          months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12" ]
            
          selected_month = {}
  
          months.each do |month|
              selected_month[month] =  selected_year_transactions.select { |t| t.date.split("-")[1] == month}
          end
  
          jan_transactions = selected_month['01']
          feb_transactions = selected_month['02']
          mar_transactions = selected_month['03']
          apr_transactions = selected_month['04']
          may_transactions = selected_month['05']
          jun_transactions = selected_month['06']
          jul_transactions = selected_month['07']
          aug_transactions = selected_month['08']
          sep_transactions = selected_month['09']
          oct_transactions = selected_month['10']
          nov_transactions = selected_month['11']
          dec_transactions = selected_month['12']


        

        categories = ["bills", "subscriptions", "food", "travel", "phone", "holiday", "retail", "tech", "other"]
         
        #-----------------------------------------------jan ---------------------------------------------

        jan_categories = {}

        categories.each do |category|
            jan_categories[category] = jan_transactions.select { |t| t.spendingSection == category}
        end

        jan_bills_total = jan_categories['bills'].map {|t| t.amount}.sum
        jan_subscriptions_total = jan_categories['subscriptions'].map {|t| t.amount}.sum
        jan_food_total = jan_categories['food'].map {|t| t.amount}.sum
        jan_travel_total = jan_categories['travel'].map {|t| t.amount}.sum
        jan_phone_total = jan_categories['phone'].map {|t| t.amount}.sum
        jan_holiday_total = jan_categories['holiday'].map {|t| t.amount}.sum
        jan_retail_total = jan_categories['retail'].map {|t| t.amount}.sum
        jan_tech_total = jan_categories['tech'].map {|t| t.amount}.sum
        jan_other_total = jan_categories['other'].map {|t| t.amount}.sum

        jan_totals = {bills:jan_bills_total, sub: jan_subscriptions_total, food: jan_food_total, travel: jan_travel_total, phone: jan_phone_total, holiday: jan_holiday_total, retail: jan_retail_total, tech: jan_tech_total, other: jan_other_total}

        #-----------------------------------------------feb ---------------------------------------------

        feb_categories = {}

        categories.each do |category|
            feb_categories[category] = feb_transactions.select { |t| t.spendingSection == category}
        end

        feb_bills_total = feb_categories['bills'].map {|t| t.amount}.sum
        feb_subscriptions_total = feb_categories['subscriptions'].map {|t| t.amount}.sum
        feb_food_total = feb_categories['food'].map {|t| t.amount}.sum
        feb_travel_total = feb_categories['travel'].map {|t| t.amount}.sum
        feb_phone_total = feb_categories['phone'].map {|t| t.amount}.sum
        feb_holiday_total = feb_categories['holiday'].map {|t| t.amount}.sum
        feb_retail_total = feb_categories['retail'].map {|t| t.amount}.sum
        feb_tech_total = feb_categories['tech'].map {|t| t.amount}.sum
        feb_other_total = feb_categories['other'].map {|t| t.amount}.sum

        feb_totals = {bills:feb_bills_total, sub: feb_subscriptions_total, food: feb_food_total, travel: feb_travel_total, phone: feb_phone_total, holiday: feb_holiday_total, retail: feb_retail_total, tech: feb_tech_total, other: feb_other_total}


        #-----------------------------------------------mar ---------------------------------------------

        mar_categories = {}

        categories.each do |category|
            mar_categories[category] = mar_transactions.select { |t| t.spendingSection == category}
        end

        mar_bills_total = mar_categories['bills'].map {|t| t.amount}.sum
        mar_subscriptions_total = mar_categories['subscriptions'].map {|t| t.amount}.sum
        mar_food_total = mar_categories['food'].map {|t| t.amount}.sum
        mar_travel_total = mar_categories['travel'].map {|t| t.amount}.sum
        mar_phone_total = mar_categories['phone'].map {|t| t.amount}.sum
        mar_holiday_total = mar_categories['holiday'].map {|t| t.amount}.sum
        mar_retail_total = mar_categories['retail'].map {|t| t.amount}.sum
        mar_tech_total = mar_categories['tech'].map {|t| t.amount}.sum
        mar_other_total = mar_categories['other'].map {|t| t.amount}.sum

        mar_totals = {bills:mar_bills_total, sub: mar_subscriptions_total, food: mar_food_total, travel: mar_travel_total, phone: mar_phone_total, holiday: mar_holiday_total, retail: mar_retail_total, tech: mar_tech_total, other: mar_other_total}

        #-----------------------------------------------apr ---------------------------------------------

        apr_categories = {}

        categories.each do |category|
            apr_categories[category] = apr_transactions.select { |t| t.spendingSection == category}
        end

        apr_bills_total = apr_categories['bills'].map {|t| t.amount}.sum
        apr_subscriptions_total = apr_categories['subscriptions'].map {|t| t.amount}.sum
        apr_food_total = apr_categories['food'].map {|t| t.amount}.sum
        apr_travel_total = apr_categories['travel'].map {|t| t.amount}.sum
        apr_phone_total = apr_categories['phone'].map {|t| t.amount}.sum
        apr_holiday_total = apr_categories['holiday'].map {|t| t.amount}.sum
        apr_retail_total = apr_categories['retail'].map {|t| t.amount}.sum
        apr_tech_total = apr_categories['tech'].map {|t| t.amount}.sum
        apr_other_total = apr_categories['other'].map {|t| t.amount}.sum

        apr_totals = {bills:apr_bills_total, sub: apr_subscriptions_total, food: apr_food_total, travel: apr_travel_total, phone: apr_phone_total, holiday: apr_holiday_total, retail: apr_retail_total, tech: apr_tech_total, other: apr_other_total}


        #-----------------------------------------------may ---------------------------------------------

        may_categories = {}

        categories.each do |category|
            may_categories[category] = may_transactions.select { |t| t.spendingSection == category}
        end

        may_bills_total = may_categories['bills'].map {|t| t.amount}.sum
        may_subscriptions_total = may_categories['subscriptions'].map {|t| t.amount}.sum
        may_food_total = may_categories['food'].map {|t| t.amount}.sum
        may_travel_total = may_categories['travel'].map {|t| t.amount}.sum
        may_phone_total = may_categories['phone'].map {|t| t.amount}.sum
        may_holiday_total = may_categories['holiday'].map {|t| t.amount}.sum
        may_retail_total = may_categories['retail'].map {|t| t.amount}.sum
        may_tech_total = may_categories['tech'].map {|t| t.amount}.sum
        may_other_total = may_categories['other'].map {|t| t.amount}.sum

        may_totals = {bills:may_bills_total, sub: may_subscriptions_total, food: may_food_total, travel: may_travel_total, phone: may_phone_total, holiday: may_holiday_total, retail: may_retail_total, tech: may_tech_total, other: may_other_total}



        #-----------------------------------------------jun ---------------------------------------------

        jun_categories = {}

        categories.each do |category|
            jun_categories[category] = jun_transactions.select { |t| t.spendingSection == category}
        end

        jun_bills_total = jun_categories['bills'].map {|t| t.amount}.sum
        jun_subscriptions_total = jun_categories['subscriptions'].map {|t| t.amount}.sum
        jun_food_total = jun_categories['food'].map {|t| t.amount}.sum
        jun_travel_total = jun_categories['travel'].map {|t| t.amount}.sum
        jun_phone_total = jun_categories['phone'].map {|t| t.amount}.sum
        jun_holiday_total = jun_categories['holiday'].map {|t| t.amount}.sum
        jun_retail_total = jun_categories['retail'].map {|t| t.amount}.sum
        jun_tech_total = jun_categories['tech'].map {|t| t.amount}.sum
        jun_other_total = jun_categories['other'].map {|t| t.amount}.sum

        jun_totals = {bills:jun_bills_total, sub: jun_subscriptions_total, food: jun_food_total, travel: jun_travel_total, phone: jun_phone_total, holiday: jun_holiday_total, retail: jun_retail_total, tech: jun_tech_total, other: jun_other_total}


        #-----------------------------------------------jul ---------------------------------------------

        jul_categories = {}

        categories.each do |category|
            jul_categories[category] = jul_transactions.select { |t| t.spendingSection == category}
        end

        jul_bills_total = jul_categories['bills'].map {|t| t.amount}.sum
        jul_subscriptions_total = jul_categories['subscriptions'].map {|t| t.amount}.sum
        jul_food_total = jul_categories['food'].map {|t| t.amount}.sum
        jul_travel_total = jul_categories['travel'].map {|t| t.amount}.sum
        jul_phone_total = jul_categories['phone'].map {|t| t.amount}.sum
        jul_holiday_total = jul_categories['holiday'].map {|t| t.amount}.sum
        jul_retail_total = jul_categories['retail'].map {|t| t.amount}.sum
        jul_tech_total = jul_categories['tech'].map {|t| t.amount}.sum
        jul_other_total = jul_categories['other'].map {|t| t.amount}.sum

        jul_totals = {bills:jul_bills_total, sub: jul_subscriptions_total, food: jul_food_total, travel: jul_travel_total, phone: jul_phone_total, holiday: jul_holiday_total, retail: jul_retail_total, tech: jul_tech_total, other: jul_other_total}


        #-----------------------------------------------Aug ---------------------------------------------

        aug_categories = {}

        categories.each do |category|
            aug_categories[category] = aug_transactions.select { |t| t.spendingSection == category}
        end

        aug_bills_total = aug_categories['bills'].map {|t| t.amount}.sum
        aug_subscriptions_total = aug_categories['subscriptions'].map {|t| t.amount}.sum
        aug_food_total = aug_categories['food'].map {|t| t.amount}.sum
        aug_travel_total = aug_categories['travel'].map {|t| t.amount}.sum
        aug_phone_total = aug_categories['phone'].map {|t| t.amount}.sum
        aug_holiday_total = aug_categories['holiday'].map {|t| t.amount}.sum
        aug_retail_total = aug_categories['retail'].map {|t| t.amount}.sum
        aug_tech_total = aug_categories['tech'].map {|t| t.amount}.sum
        aug_other_total = aug_categories['other'].map {|t| t.amount}.sum

        aug_totals = {bills:aug_bills_total, sub: aug_subscriptions_total, food: aug_food_total, travel: aug_travel_total, phone: aug_phone_total, holiday: aug_holiday_total, retail: aug_retail_total, tech: aug_tech_total, other: aug_other_total}


        #-----------------------------------------------sep ---------------------------------------------

        sep_categories = {}

        categories.each do |category|
            sep_categories[category] = sep_transactions.select { |t| t.spendingSection == category}
        end

        sep_bills_total = sep_categories['bills'].map {|t| t.amount}.sum
        sep_subscriptions_total = sep_categories['subscriptions'].map {|t| t.amount}.sum
        sep_food_total = sep_categories['food'].map {|t| t.amount}.sum
        sep_travel_total = sep_categories['travel'].map {|t| t.amount}.sum
        sep_phone_total = sep_categories['phone'].map {|t| t.amount}.sum
        sep_holiday_total = sep_categories['holiday'].map {|t| t.amount}.sum
        sep_retail_total = sep_categories['retail'].map {|t| t.amount}.sum
        sep_tech_total = sep_categories['tech'].map {|t| t.amount}.sum
        sep_other_total = sep_categories['other'].map {|t| t.amount}.sum

        sep_totals = {bills:sep_bills_total, sub: sep_subscriptions_total, food: sep_food_total, travel: sep_travel_total, phone: sep_phone_total, holiday: sep_holiday_total, retail: sep_retail_total, tech: sep_tech_total, other: sep_other_total}


        #-----------------------------------------------oct ---------------------------------------------

        oct_categories = {}

        categories.each do |category|
            oct_categories[category] = oct_transactions.select { |t| t.spendingSection == category}
        end

        oct_bills_total = oct_categories['bills'].map {|t| t.amount}.sum
        oct_subscriptions_total = oct_categories['subscriptions'].map {|t| t.amount}.sum
        oct_food_total = oct_categories['food'].map {|t| t.amount}.sum
        oct_travel_total = oct_categories['travel'].map {|t| t.amount}.sum
        oct_phone_total = oct_categories['phone'].map {|t| t.amount}.sum
        oct_holiday_total = oct_categories['holiday'].map {|t| t.amount}.sum
        oct_retail_total = oct_categories['retail'].map {|t| t.amount}.sum
        oct_tech_total = oct_categories['tech'].map {|t| t.amount}.sum
        oct_other_total = oct_categories['other'].map {|t| t.amount}.sum

        oct_totals = {bills:oct_bills_total, sub: oct_subscriptions_total, food: oct_food_total, travel: oct_travel_total, phone: oct_phone_total, holiday: oct_holiday_total, retail: oct_retail_total, tech: oct_tech_total, other: oct_other_total}



        #-----------------------------------------------nov ---------------------------------------------

        nov_categories = {}

        categories.each do |category|
            nov_categories[category] = nov_transactions.select { |t| t.spendingSection == category}
        end

        nov_bills_total = nov_categories['bills'].map {|t| t.amount}.sum
        nov_subscriptions_total = nov_categories['subscriptions'].map {|t| t.amount}.sum
        nov_food_total = nov_categories['food'].map {|t| t.amount}.sum
        nov_travel_total = nov_categories['travel'].map {|t| t.amount}.sum
        nov_phone_total = nov_categories['phone'].map {|t| t.amount}.sum
        nov_holiday_total = nov_categories['holiday'].map {|t| t.amount}.sum
        nov_retail_total = nov_categories['retail'].map {|t| t.amount}.sum
        nov_tech_total = nov_categories['tech'].map {|t| t.amount}.sum
        nov_other_total = nov_categories['other'].map {|t| t.amount}.sum

        nov_totals = {bills:nov_bills_total, sub: nov_subscriptions_total, food: nov_food_total, travel: nov_travel_total, phone: nov_phone_total, holiday: nov_holiday_total, retail: nov_retail_total, tech: nov_tech_total, other: nov_other_total}


        #-----------------------------------------------dec ---------------------------------------------

        dec_categories = {}

        categories.each do |category|
            dec_categories[category] = dec_transactions.select { |t| t.spendingSection == category}
        end

        dec_bills_total = dec_categories['bills'].map {|t| t.amount}.sum
        dec_subscriptions_total = dec_categories['subscriptions'].map {|t| t.amount}.sum
        dec_food_total = dec_categories['food'].map {|t| t.amount}.sum
        dec_travel_total = dec_categories['travel'].map {|t| t.amount}.sum
        dec_phone_total = dec_categories['phone'].map {|t| t.amount}.sum
        dec_holiday_total = dec_categories['holiday'].map {|t| t.amount}.sum
        dec_retail_total = dec_categories['retail'].map {|t| t.amount}.sum
        dec_tech_total = dec_categories['tech'].map {|t| t.amount}.sum
        dec_other_total = dec_categories['other'].map {|t| t.amount}.sum

        dec_totals = {bills: dec_bills_total, sub: dec_subscriptions_total, food: dec_food_total, travel: dec_travel_total, phone: dec_phone_total, holiday: dec_holiday_total, retail: dec_retail_total, tech: dec_tech_total, other: dec_other_total}


        render json: {jan: jan_totals, feb: feb_totals, mar: mar_totals, apr: apr_totals, may: may_totals, jun: jun_totals, jul: jul_totals, aug: aug_totals, sep: sep_totals, oct: oct_totals, nov: nov_totals, dec: dec_totals}
        

    end




    def percentChange


        

         # should be have params of: user_id, year wanted, month wanted 
        
            #grab current user transations 
            user_transactions = Transaction.all.where(user_id: params[:user_id])
            # grab the transactions from the selected year - from the array of transations from the selected year - map over and give an array of amounts from that year and sum 
 
            year_2019_transactions = user_transactions.select{|t| t.date.split("-")[0] === "2019"}
            year_2018_transactions = user_transactions.select{|t| t.date.split("-")[0] === "2019"}

 

        months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12" ]
            
        selected_month_2019 = {}
        selected_month_2018 = {}


        months.each do |month|
            selected_month_2019[month] =  year_2019_transactions.select { |t| t.date.split("-")[1] == month}
        end

        months.each do |month|
            selected_month_2018[month] =  year_2018_transactions.select { |t| t.date.split("-")[1] == month}
        end



        jan_total_2019 = selected_month_2019['01'].map {|t| t.amount}.sum
        feb_total_2019 = selected_month_2019['02'].map {|t| t.amount}.sum
        mar_total_2019 = selected_month_2019['03'].map {|t| t.amount}.sum
        apr_total_2019 = selected_month_2019['04'].map {|t| t.amount}.sum
        may_total_2019 = selected_month_2019['05'].map {|t| t.amount}.sum
        jun_total_2019 = selected_month_2019['06'].map {|t| t.amount}.sum
        jul_total_2019 = selected_month_2019['07'].map {|t| t.amount}.sum
        aug_total_2019 = selected_month_2019['08'].map {|t| t.amount}.sum
        sep_total_2019 = selected_month_2019['09'].map {|t| t.amount}.sum
        oct_total_2019 = selected_month_2019['10'].map {|t| t.amount}.sum
        nov_total_2019 = selected_month_2019['11'].map {|t| t.amount}.sum
        dec_total_2019 = selected_month_2019['12'].map {|t| t.amount}.sum

        jan_total_2018 = selected_month_2018['01'].map {|t| t.amount}.sum
        feb_total_2018 = selected_month_2018['02'].map {|t| t.amount}.sum
        mar_total_2018 = selected_month_2018['03'].map {|t| t.amount}.sum
        apr_total_2018 = selected_month_2018['04'].map {|t| t.amount}.sum
        may_total_2018 = selected_month_2018['05'].map {|t| t.amount}.sum
        jun_total_2018 = selected_month_2018['06'].map {|t| t.amount}.sum
        jul_total_2018 = selected_month_2018['07'].map {|t| t.amount}.sum
        aug_total_2018 = selected_month_2018['08'].map {|t| t.amount}.sum
        sep_total_2018 = selected_month_2018['09'].map {|t| t.amount}.sum
        oct_total_2018 = selected_month_2018['10'].map {|t| t.amount}.sum
        nov_total_2018 = selected_month_2018['11'].map {|t| t.amount}.sum
        dec_total_2018 = selected_month_2019['12'].map {|t| t.amount}.sum

        # difference

        jan_increase = (jan_total_2019.to_f)-(jan_total_2018.to_f)
        jan_percent_change = ((jan_increase).to_f/(jan_total_2018).to_f)*(100)

        feb_increase = (feb_total_2019.to_f)-(feb_total_2018.to_f)
        feb_percent_change = ((feb_increase).to_f/(feb_total_2018).to_f)*(100)

        mar_increase = (mar_total_2019.to_f)-(mar_total_2018.to_f)
        mar_percent_change = ((mar_increase).to_f/(mar_total_2018).to_f)*(100)

        apr_increase = (apr_total_2019.to_f)-(apr_total_2018.to_f)
        apr_percent_change = ((apr_increase).to_f/(apr_total_2018).to_f)*(100)

        may_increase = (may_total_2019.to_f)-(may_total_2018.to_f)
        may_percent_change = ((may_increase).to_f/(may_total_2018).to_f)*(100)

        jun_increase = (jun_total_2019.to_f)-(jun_total_2018.to_f)
        jun_percent_change = ((jun_increase).to_f/(jun_total_2018).to_f)*(100)

        jul_increase = (jul_total_2019.to_f)-(jul_total_2018.to_f)
        jul_percent_change = ((jul_increase).to_f/(jul_total_2018).to_f)*(100)

        # aug_increase = (aug_total_2019.to_f)-(aug_total_2018.to_f)
        # aug_percent_change = ((aug_increase).to_f/(aug_total_2018).to_f)*(100)

        # sep_increase = (sep_total_2019.to_f)-(sep_total_2018.to_f)
        # sep_percent_change = ((sep_increase).to_f/(sep_total_2018).to_f)*(100)

        # oct_increase = (oct_total_2019.to_f)-(oct_total_2018.to_f)
        # oct_percent_change = ((oct_increase).to_f/(oct_total_2018).to_f)*(100)

        # nov_increase = (nov_total_2019.to_f)-(nov_total_2018.to_f)
        # nov_percent_change = ((nov_increase).to_f/(nov_total_2018).to_f)*(100)

        # dec_increase = (dec_total_2019.to_f)-(dec_total_2018.to_f)
        # dec_percent_change = ((dec_increase).to_f/(dec_total_2018).to_f)*(100)

        render json: {
            jan: jan_percent_change,
            feb: feb_percent_change, 
            mar: mar_percent_change, 
            apr: apr_percent_change, 
            may: may_percent_change, 
            jun: jun_percent_change, 
            jul: jul_percent_change, 
            # aug: aug_percent_change, 
            # sep: sep_percent_change, 
            # oct: oct_percent_change, 
            # nov: nov_percent_change, 
            # dec: dec_percent_change
        }

    end







    
end
