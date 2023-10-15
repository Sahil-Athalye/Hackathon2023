import os
import openai
import requests
import sys
from dotenv import load_dotenv

load_dotenv()

def get_chatgpt_response(input_string):
    api_key = os.getenv('KEY')
    endpoint = 'https://api.openai.com/v1/chat/completions'

    headers = {
        'Content-Type': 'application/json',
        'Authorization': f'Bearer {api_key}'
    }

    data = {
        'model': 'gpt-3.5-turbo',
        'messages': [{'role': 'system', 'content': 'You are a helpful assistant.'},
                     {'role': 'user', 'content': input_string}]
    }

    response = requests.post(endpoint, headers=headers, json=data)

    if response.status_code == 200:
        return response.json()['choices'][0]['message']['content']
    else:
        print(f"Error: {response.status_code}, {response.text}")
        return None

def gptCLI():
    input_string = ""
    for i, arg in enumerate(sys.argv):
      if i >=1:
        input_string = input_string+' '+arg
    api_key = os.getenv('KEY')
    endpoint = 'https://api.openai.com/v1/chat/completions'

    headers = {
        'Content-Type': 'application/json',
        'Authorization': f'Bearer {api_key}'
    }

    data = {
        'model': 'gpt-3.5-turbo',
        'messages': [{'role': 'system', 'content': 'You are a helpful assistant.'},
                     {'role': 'user', 'content': input_string}]
    }

    response = requests.post(endpoint, headers=headers, json=data)

    if response.status_code == 200:
        return response.json()['choices'][0]['message']['content']
    else:
        print(f"Error: {response.status_code}, {response.text}")
        return None


def dishRecommend(input_string, cuisine):
  output = get_chatgpt_response(input_string)

  








output = gptCLI()

print(output)