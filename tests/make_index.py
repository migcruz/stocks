import requests
import json
from collections import OrderedDict

#alphavantage API key: OU3HAQ4QZ8IW7QFY

class company(object):

	def __init__(self, name="", name_tick="", market_cap=0):
		self.name = name
		self.name_tick = name_tick
		self.market_cap = market_cap


def calc_weights(index):

  	index_market_cap = 0

  	# calc the index market cap
  	for key, item in index.items():
		index_market_cap += item.market_cap

  	weights = {}
  	for key, item in index.items():
		weights[item.name_tick] = float(item.market_cap)/index_market_cap

  	print(weights)

stocks = {}

stocks["MSFT"] = company("Microsoft", "MSFT", 1)
stocks["AAPL"] = company("Apple", "AAPL", 1)
stocks["AMZN"] = company("Amazon", "AMZN", 1)
stocks["FB"] = company("Facebook", "FB", 1)
stocks["GOOG"] = company("Google", "GOOG", 1)

calc_weights(stocks)


# Test
stats = requests.get('https://api.iextrading.com/1.0/stock/aapl/stats')
financials = requests.get('https://api.iextrading.com/1.0/stock/aapl/financials')
ohlc = requests.get('https://api.iextrading.com/1.0/stock/aapl/ohlc')
time_series = requests.get('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=AAPL&outputsize=full&apikey=OU3HAQ4QZ8IW7QFY')
b = (stats.json())["marketcap"]
c = (financials.json())["financials"]
# print(r.json())
print(b)
#print(c)
print(time_series.json())

company_json = {}
company_json["ticker"] = (financials.json())["symbol"]
company_json["name"] = (stats.json())["companyName"]
company_json["marketcap"] = int((stats.json())["marketcap"])
company_json["financials"] = (financials.json())["financials"]
company_json["time_series_daily"] = (time_series.json())["Time Series (Daily)"]
company_json["open_price"] = float((ohlc.json())["open"]["price"])
company_json["close_price"] = float((ohlc.json())["close"]["price"])


# save to file
ticker = 'AAPL'
path = 'companies/' + ticker + '.json'

with open(path, 'wb') as filepath:
        json.dump(company_json, filepath, indent=4, sort_keys=True)