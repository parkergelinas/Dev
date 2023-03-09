import yfinance as yf
import pandas as pd

# Get a list of all available tickers
tickers = ['']

start_date = '2020-01-01'
end_date = '2023-2-24'

# Download stock data for every ticker available
data = yf.download(tickers, start=start_date, end=end_date)

# Select only the 'Close' column for each stock
data = data['Close']

# Preview the data
print(data.head())
